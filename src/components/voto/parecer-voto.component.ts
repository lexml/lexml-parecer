import { LitElement, html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ItemVoto } from '../../models/item-voto.modelo.js';
import { Voto } from '../../models/voto.modelo.js';
import { AnexoParecer } from '../../models/anexo.modelo.js';
import {
  TipoDocumento,
  TipoDocumentoLabel,
} from '../../types/tipo-documento.js';
import { alertarInfo } from '@ui-commons';
import { NotaRodape } from 'src/models/diversos.modelo.js';

type ItemVotoRuntime = ItemVoto & { _uid: string; notasRodape?: NotaRodape[] };

type AnexoParecerRuntime = AnexoParecer & {
  arquivo?: File | null;
  url?: string | null;
};
@customElement('lexml-parecer-voto')
export class LexmlParecerVoto extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @state() private itens: ItemVotoRuntime[] = [];

  private uid(): string {
    try {
      return crypto.randomUUID();
    } catch {
      return 'uid_' + Math.random().toString(36).slice(2);
    }
  }

  private static readonly ALLOWED_MIME_TYPES = new Set([
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]);

  @state() private _nrScheduled = false;
  @state() private notaRodapeInicioVoto = 1;

  private scheduleRenumerarDentroDoVoto(): void {
    if (this._nrScheduled) return;
    this._nrScheduled = true;

    queueMicrotask(() => {
      this._nrScheduled = false;
      this._renumerarNotasEncadeadas(this.notaRodapeInicioVoto);
    });
  }

  private _renumerarNotasEncadeadas(base: number): void {
    const editors = Array.from(
      this.querySelectorAll<HTMLElement>('lexml-ui-editor-texto-rico'),
    ) as any[];

    let corrente = base;
    for (const ed of editors) {
      ed?.setNotaRodapeInicio?.(corrente);
      const qtd = ed?.getQuantidadeNotasRodape?.() ?? 0;
      corrente += qtd;
    }
  }

  public flushNotasRodape(): void {
    const editors = Array.from(
      this.querySelectorAll<
        HTMLElement & { getNotasRodape?: () => NotaRodape[] }
      >('lexml-ui-editor-texto-rico'),
    );

    let textIndex = 0;
    const arr = [...this.itens];

    for (let i = 0; i < arr.length; i++) {
      const it = arr[i];
      if (!it.documento) {
        const ed = editors[textIndex++];
        if (ed) {
          const notas = ed.getNotasRodape?.() ?? [];
          arr[i] = { ...it, notasRodape: notas };
        }
      }
    }
    this.itens = arr;
    this.emitChange();
  }

  public setNotaRodapeInicio(base: number): void {
    const inicio = Number.isFinite(base) && base > 0 ? Math.floor(base) : 1;
    this.notaRodapeInicioVoto = inicio;
    this.scheduleRenumerarDentroDoVoto();
  }

  public getQuantidadeNotasRodape(): number {
    const editors = Array.from(
      this.querySelectorAll<HTMLElement>('lexml-ui-editor-texto-rico'),
    ) as any[];
    return editors.reduce(
      (sum, ed) => sum + (ed?.getQuantidadeNotasRodape?.() ?? 0),
      0,
    );
  }

  private static readonly ALLOWED_EXTS = new Set(['.pdf', '.docx']);

  private isAllowedFile(file: File): boolean {
    const hasGoodMime =
      file.type && LexmlParecerVoto.ALLOWED_MIME_TYPES.has(file.type);

    const name = file.name?.toLowerCase() ?? '';
    const dot = name.lastIndexOf('.');
    const ext = dot >= 0 ? name.slice(dot) : '';
    const hasGoodExt = LexmlParecerVoto.ALLOWED_EXTS.has(ext);

    return hasGoodMime || hasGoodExt;
  }

  private async onFilePicked(idx: number, e: InputEvent): Promise<void> {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    const arr = [...this.itens];
    const atual = arr[idx];
    const docAntigo = atual.documento as AnexoParecerRuntime | undefined;

    if (!file) {
      const novoDocVazio: AnexoParecerRuntime = {
        ...(docAntigo ?? {}),
        nomeArquivo: docAntigo?.nomeArquivo ?? '',
        base64: '',
        arquivo: null,
        url: null,
      };
      arr[idx] = { ...atual, documento: novoDocVazio };
      this.itens = arr;
      this.emitChange();
      return;
    }

    if (!this.isAllowedFile(file)) {
      input.value = '';
      const novoDocVazio: AnexoParecerRuntime = {
        ...(docAntigo ?? {}),
        nomeArquivo: docAntigo?.nomeArquivo ?? '',
        base64: '',
        arquivo: null,
        url: null,
      };
      arr[idx] = { ...atual, documento: novoDocVazio };
      this.itens = arr;
      this.emitChange();

      this.dispatchEvent(
        new CustomEvent('file-invalid', {
          bubbles: true,
          composed: true,
          detail: {
            reason: 'INVALID_TYPE',
            allowed: ['PDF', 'DOCX'],
            fileName: file.name,
            fileType: file.type || 'unknown',
          },
        }),
      );
      alertarInfo('Arquivo inválido. Envie apenas PDF ou DOCX.');
      return;
    }

    const base64 = await this.fileToBase64(file);

    const novoDoc: AnexoParecerRuntime = {
      ...(docAntigo ?? {}),
      nomeArquivo:
        docAntigo?.nomeArquivo && docAntigo.nomeArquivo.trim() !== ''
          ? docAntigo.nomeArquivo
          : file.name,
      base64,
      arquivo: file,
      url: null,
    };

    arr[idx] = { ...atual, documento: novoDoc };
    this.itens = arr;
    this.emitChange();
  }

  public getVoto(): Voto {
    this.flushNotasRodape();
    this.pullTiposFromDom();
    const voto: Voto = {
      itensVoto: this.sanitizeItens(),
    };
    console.log(voto);
    return voto;
  }

  public async setVoto(voto?: Voto | null): Promise<void> {
    const orig = Array.isArray(voto?.itensVoto) ? voto!.itensVoto : [];

    const ordenados = [...orig].sort((a, b) => {
      const pa = Number.isFinite(a.posicao as number)
        ? (a.posicao as number)
        : Number.POSITIVE_INFINITY;
      const pb = Number.isFinite(b.posicao as number)
        ? (b.posicao as number)
        : Number.POSITIVE_INFINITY;
      return pa - pb;
    });

    const itensRuntime = ordenados.map((it, i) => {
      const doc = it.documento
        ? {
            ...it.documento,
            tipo: this.normalizeTipo((it.documento as any).tipo),
          }
        : undefined;

      return {
        ...it,
        documento: doc,
        posicao: Number.isFinite(it.posicao as number)
          ? (it.posicao as number)
          : i + 1,
        _uid: this.uid(),
        notasRodape: it.notasRodape ?? [],
      };
    });

    this.itens = itensRuntime;
    await this.updateComplete;
    await this.syncSelectValues();
    await this.syncTextEditorsContent();
    for (let i = 0; i < this.itens.length; i++) {
      const d: any = this.itens[i]?.documento;
      if (d?.base64 && d?.nomeArquivo && !d?.arquivo) {
        await this.setNativeFileInputFromModel(i);
      }
    }
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  }

  public async setItensVoto(itens: ItemVoto[] = []): Promise<void> {
    const ordenados = [...itens].sort((a, b) => {
      const pa = Number.isFinite(a.posicao as number)
        ? (a.posicao as number)
        : Number.POSITIVE_INFINITY;
      const pb = Number.isFinite(b.posicao as number)
        ? (b.posicao as number)
        : Number.POSITIVE_INFINITY;
      return pa - pb;
    });

    this.itens = ordenados.map((it, i) => {
      const doc = it.documento
        ? {
            ...it.documento,
            tipo: this.normalizeTipo((it.documento as any).tipo),
          }
        : undefined;

      return {
        ...it,
        documento: doc,
        posicao: i + 1,
        _uid: this.uid(),
      };
    });

    await this.updateComplete;
    await this.syncSelectValues();
    await this.syncTextEditorsContent();
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  }

  private async syncSelectValues() {
    await this.updateComplete;
    const cards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );

    cards.forEach((card, index) => {
      const item = this.itens[index];
      const tipo = (item?.documento as any)?.tipo ?? '';
      if (!tipo) return;

      const sel = card.querySelector('wa-select') as any;
      if (sel && sel.value !== tipo) {
        sel.value = tipo;
        sel.requestUpdate?.();
      }
    });
  }

  private async syncTextEditorsContent(): Promise<void> {
    await this.updateComplete;
    const editors = Array.from(
      this.querySelectorAll<
        HTMLElement & {
          setContent?: (html: string, notas?: NotaRodape[]) => void;
        }
      >('lexml-ui-editor-texto-rico'),
    );

    let textIndex = 0;
    for (let i = 0; i < this.itens.length; i++) {
      const it = this.itens[i];
      if (!it.documento) {
        const ed = editors[textIndex++];
        if (ed?.setContent) {
          ed.setContent(it.texto ?? '', it.notasRodape ?? []);
        }
      }
    }
  }

  public async clearVoto(): Promise<void> {
    this.itens = [];
    await this.updateComplete;
    this.emitChange();
  }

  protected render(): TemplateResult {
    return html`
      <style>
        .toolbar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 1rem;
          justify-content: center;
        }
        button {
          border: 1px solid #d0d7de;
          background: #fff;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        button:hover {
          background: #f6f8fa;
        }
        wa-card {
          margin-bottom: 0.75rem;
          box-shadow: var(--wa-shadow-m);
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
        }
        wa-card.card-header {
          will-change: transform;
          transition: box-shadow 0.2s ease;
        }
        .caret {
          transition: transform 0.16s ease;
        }
        .meta {
          color: #6b7280;
          font-size: 0.9em;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.85em;
          padding: 0.2rem 0.5rem;
          border: 1px solid #e5e7eb;
          border-radius: 999px;
          background: #f9fafb;
        }
        .filed-header {
          display: flex;
          justify-content: space-between;
        }
        .item-actions {
          display: flex;
          gap: 0.5rem;
        }
        .file-actions {
          display: inline-flex;
          gap: 0.5rem;
        }
        .muted {
          display: flex;
          color: #9ca3af;
          margin-bottom: 2rem;
          justify-content: center;
        }
        .card-header .wa-grid {
          align-items: end;
        }
        .field-file {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .input-file {
          width: 100%;
          margin-right: 0.5em;
          border-color: var(--wa-form-control-border-color);
          border-radius: var(--wa-form-control-border-radius);
          border-style: var(--wa-form-control-border-style);
          border-width: var(--wa-form-control-border-width);
          color: var(--wa-form-control-value-color);
        }
        .input-file input {
          width: 100%;
        }
      </style>
      ${this.itens.length === 0
        ? html`<div class="muted">Nenhum voto adicionado ainda.</div>`
        : this.itens.map((item, idx) => this.renderItem(item, idx))}
      <div class="toolbar">
        <wa-button size="small" @click=${this.addDocumento}
          >Importar anexo</wa-button
        >
        <wa-button size="small" variant="brand" @click=${this.addTexto}
          >Adicionar texto</wa-button
        >
      </div>
    `;
  }

  private renderItem(item: ItemVotoRuntime, idx: number): TemplateResult {
    const header = item.documento ? 'Anexo' : 'Texto';

    return html`
      <wa-card with-header class="card-header" data-uid=${item._uid}>
        <div slot="header" class="filed-header">
          <div>
            <span class="chip">#${item.posicao}</span>
            <span>— ${header}</span>
          </div>
          <div class="item-actions">
            <div class="item-actions">
              <wa-button
                title="Mover para cima"
                appearance="outlined"
                pill
                size="small"
                @click=${() => this.move(idx, -1)}
              >
                <wa-icon
                  name="arrow-up"
                  variant="solid"
                  label="Mover para cima"
                ></wa-icon>
              </wa-button>
              <wa-button
                title="Mover para baixo"
                appearance="outlined"
                pill
                size="small"
                @click=${() => this.move(idx, 1)}
              >
                <wa-icon
                  name="arrow-down"
                  variant="solid"
                  label="Mover para baixo"
                ></wa-icon>
              </wa-button>
              <wa-button
                title="Excluir item"
                pill
                size="small"
                variant="danger"
                @click=${() => this.removeItem(idx)}
              >
                <wa-icon
                  name="trash"
                  variant="solid"
                  label="Excluir item"
                ></wa-icon>
              </wa-button>
            </div>
          </div>
        </div>
        ${item.documento
          ? this.renderDocumento(item, idx)
          : this.renderTexto(item, idx)}
      </wa-card>
    `;
  }

  private renderTexto(item: ItemVoto, idx: number): TemplateResult {
    return html`
      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div class="wa-span-grid">
          <lexml-ui-editor-texto-rico
            height="350"
            orientacaoNotaRodaPe="abaixo"
            .texto=${item.texto ?? ''}
            @onchange=${(e: Event) => this.onEditorChange(idx, e)}
          ></lexml-ui-editor-texto-rico>
        </div>
      </div>
    `;
  }

  private renderDocumento(item: ItemVoto, idx: number): TemplateResult {
    const doc = item.documento!;
    const hasFile = Boolean(doc?.base64 && doc.base64.trim() !== '');
    return html`
      <div class="wa-grid" style="--min-column-size: 48rem;">
        <div>
          <wa-select
            label="Tipo"
            placeholder="Selecione o tipo"
            .value=${(doc.tipo as TipoDocumento) ?? ''}
            @wa-change=${(e: Event) => this.onTipoChange(idx, e)}
            @change=${(e: Event) => this.onTipoChange(idx, e)}
          >
            <wa-option value="" label="Selecione…">Selecione…</wa-option>
            <wa-option
              value=${TipoDocumento.SUBSTITUTIVO}
              ?selected=${doc.tipo === TipoDocumento.SUBSTITUTIVO}
            >
              ${TipoDocumentoLabel[TipoDocumento.SUBSTITUTIVO]}
            </wa-option>
            <wa-option
              value=${TipoDocumento.EMENDA}
              ?selected=${doc.tipo === TipoDocumento.EMENDA}
            >
              ${TipoDocumentoLabel[TipoDocumento.EMENDA]}
            </wa-option>
            <wa-option
              value=${TipoDocumento.OUTRO}
              ?selected=${doc.tipo === TipoDocumento.OUTRO}
            >
              ${TipoDocumentoLabel[TipoDocumento.OUTRO]}
            </wa-option>
          </wa-select>
        </div>
        <div>
          <div>
            <wa-input
              label="Nome"
              type="text"
              .value=${doc.nomeArquivo ?? ''}
              placeholder="Nome do documento"
              @wa-input=${(e: CustomEvent) =>
                this.updateDocField(
                  idx,
                  'nomeArquivo',
                  (e.target as any).value,
                )}
              @input=${(e: Event) =>
                this.updateDocField(
                  idx,
                  'nomeArquivo',
                  (e.target as HTMLInputElement).value,
                )}
            ></wa-input>
          </div>
        </div>
        <div>
          <div><label>Arquivo</label></div>
          <div class="field-file">
            <div class="input-file">
              <input
                type="file"
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                @change=${(e: Event) => this.onFilePicked(idx, e as InputEvent)}
              />
            </div>
            <div class="file-actions">
              <wa-button
                title="Visualizar Documento"
                appearance="outlined"
                pill
                ?disabled=${!hasFile}
                size="small"
                @click=${() => this.view(idx)}
              >
                <wa-icon
                  name="eye"
                  variant="solid"
                  label="Visualizar Documento"
                ></wa-icon>
              </wa-button>
              <wa-button
                title="Baixar Documento"
                appearance="outlined"
                pill
                ?disabled=${!hasFile}
                size="small"
                variant="brand"
                @click=${() => this.download(idx)}
              >
                <wa-icon
                  name="download"
                  variant="solid"
                  label="Baixar Documento"
                ></wa-icon>
              </wa-button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private guessMime(name: string): string {
    const n = (name || '').toLowerCase();
    if (n.endsWith('.pdf')) return 'application/pdf';
    if (n.endsWith('.docx'))
      return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    return 'application/octet-stream';
  }

  /** Converte base64 -> Blob com o mime informado. */
  private base64ToBlob(base64: string, mime: string): Blob {
    const byteStr = atob(base64);
    const len = byteStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = byteStr.charCodeAt(i);
    return new Blob([bytes], { type: mime });
  }

  private async setNativeFileInputFromModel(idx: number): Promise<void> {
    await this.updateComplete;

    const cards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );
    const card = cards[idx];
    if (!card) return;

    const input = card.querySelector(
      'input[type="file"]',
    ) as HTMLInputElement | null;
    if (!input) return;

    const item = this.itens[idx];
    const doc: any = item?.documento;
    if (!doc || !doc.base64 || !doc.nomeArquivo || doc.arquivo) return;

    const mime = this.guessMime(String(doc.nomeArquivo));
    const blob = this.base64ToBlob(String(doc.base64), mime);
    const file = new File([blob], String(doc.nomeArquivo), { type: mime });

    // Mantém também no runtime (opcional, ajuda em view/download)
    doc.arquivo = file;

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
  }

  private onEditorChange(idx: number, e: Event) {
    const ed = (e.target as any) ?? (e.currentTarget as any);

    const html =
      typeof ed?.getHtml === 'function'
        ? ed.getHtml()
        : typeof ed?.getTexto === 'function'
          ? ed.getTexto()
          : (ed?.texto ?? '');

    const notas: NotaRodape[] =
      typeof ed?.getNotasRodape === 'function'
        ? (ed.getNotasRodape() ?? [])
        : [];

    const arr = [...this.itens];
    arr[idx] = { ...arr[idx], texto: String(html ?? ''), notasRodape: notas };
    this.itens = arr;
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  }

  private view(idx: number) {
    const doc = this.itens[idx].documento as AnexoParecerRuntime | undefined;
    if (!doc) return;

    const name = (doc.nomeArquivo ?? '').toLowerCase();

    const isDocx =
      name.endsWith('.docx') ||
      doc.arquivo?.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (isDocx) {
      alertarInfo('Visualização de DOCX ainda não suportada.');
      return;
    }

    const isPdf =
      name.endsWith('.pdf') || doc.arquivo?.type === 'application/pdf';

    if (!isPdf) {
      alertarInfo('Visualização disponível apenas para PDFs.');
      return;
    }

    let blob: Blob | null = null;
    if (doc.arquivo) {
      blob = doc.arquivo;
    } else if (doc.base64) {
      const byteCharacters = atob(doc.base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++)
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      const byteArray = new Uint8Array(byteNumbers);
      blob = new Blob([byteArray], { type: 'application/pdf' });
    }

    if (!blob) {
      alertarInfo('Arquivo não disponível para visualização.');
      return;
    }

    const tempUrl = URL.createObjectURL(blob);
    window.open(tempUrl, '_blank', 'noopener');
    setTimeout(() => URL.revokeObjectURL(tempUrl), 60_000);
  }

  private addDocumento = () => {
    this.itens = [
      ...this.itens,
      {
        _uid: this.uid(),
        documento: {
          tipo: undefined,
          nomeArquivo: '',
          base64: '',
          arquivo: null,
          url: null,
        } as AnexoParecerRuntime,
        posicao: this.itens.length + 1,
      },
    ];
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  };

  private addTexto = () => {
    this.itens = [
      ...this.itens,
      {
        _uid: this.uid(),
        texto: '',
        notasRodape: [],
        posicao: this.itens.length + 1,
      },
    ];
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  };

  private removeItem(idx: number) {
    this.itens = this.itens
      .filter((_, i) => i !== idx)
      .map((it, i) => ({ ...it, posicao: i + 1 }));
    this.emitChange();
    this.scheduleRenumerarDentroDoVoto();
  }

  private async move(idx: number, delta: number) {
    const to = idx + delta;
    if (to < 0 || to >= this.itens.length) return;

    await this.animateReorder(() => {
      const arr = [...this.itens];
      const [item] = arr.splice(idx, 1);
      arr.splice(to, 0, item);
      this.itens = arr.map((it, i) => ({ ...it, posicao: i + 1 }));
      this.emitChange();
      this.scheduleRenumerarDentroDoVoto();
    });
  }

  private updateTexto(idx: number, value: string) {
    const arr = [...this.itens];
    arr[idx] = { ...arr[idx], texto: value };
    this.itens = arr;
    this.emitChange();
  }

  private pullTiposFromDom(): void {
    const cards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );

    const arr = [...this.itens];
    cards.forEach((card, index) => {
      const sel = card.querySelector('wa-select') as any;
      if (!sel) return;

      const raw =
        sel?.value ??
        sel?.getAttribute?.('value') ??
        (sel as any)?.selected?.value ??
        '';

      const up = String(raw).trim().toUpperCase();
      if (!up) return;

      if (Object.values(TipoDocumento).includes(up as TipoDocumento)) {
        const cur = arr[index];
        if (cur?.documento) {
          (cur.documento as any).tipo = up as TipoDocumento;
        }
      }
    });

    this.itens = arr;
  }

  private onTipoChange(idx: number, e: Event) {
    const anyEvt = e as any;
    if (!anyEvt?.isTrusted) return;

    let sel: any = anyEvt.currentTarget;
    if (!sel || sel.tagName?.toLowerCase() !== 'wa-select') {
      const maybe = (anyEvt.target as HTMLElement)?.closest?.('wa-select');
      if (maybe) sel = maybe;
    }

    const raw =
      sel?.value ?? anyEvt?.detail?.value ?? sel?.getAttribute?.('value') ?? '';

    const up = String(raw).trim().toUpperCase();
    if (!up) return;

    const valid = Object.values(TipoDocumento).includes(up as TipoDocumento);
    if (!valid) return;

    const atual = this.itens[idx]?.documento as any;
    if (atual?.tipo === up) return;

    this.updateDocField(idx, 'tipo', up as TipoDocumento);
  }

  private normalizeTipo(value: unknown): TipoDocumento | undefined {
    const up = String(value ?? '')
      .trim()
      .toUpperCase();
    return Object.values(TipoDocumento).includes(up as TipoDocumento)
      ? (up as TipoDocumento)
      : undefined;
  }

  private updateDocField(
    idx: number,
    field: keyof AnexoParecer,
    value: string | TipoDocumento,
  ) {
    const arr = [...this.itens];
    const atual = arr[idx];
    const doc = {
      ...(atual.documento ?? {}),
      [field]: value,
    } as AnexoParecerRuntime;
    arr[idx] = { ...atual, documento: doc };
    this.itens = arr;
    this.emitChange();
  }

  private download(idx: number) {
    const doc = this.itens[idx].documento as AnexoParecerRuntime | undefined;
    if (!doc) return;

    const name = doc.nomeArquivo || 'documento';
    let mime = 'application/pdf';
    if (
      name.toLowerCase().endsWith('.docx') ||
      doc.arquivo?.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      mime =
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }

    let blob: Blob | null = null;
    if (doc.arquivo) {
      const blobFromFile = doc.arquivo;
      blob =
        blobFromFile.type === mime
          ? blobFromFile
          : new Blob([blobFromFile], { type: mime });
    } else if (doc.base64) {
      const byteCharacters = atob(doc.base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++)
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      const byteArray = new Uint8Array(byteNumbers);
      blob = new Blob([byteArray], { type: mime });
    }

    if (!blob) {
      alertarInfo('Arquivo não disponível para download.');
      return;
    }

    const tempUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = tempUrl;
    a.download = name;
    a.click();
    URL.revokeObjectURL(tempUrl);
  }

  private sanitizeItens(): ItemVoto[] {
    const purificados = this.itens.map(it => {
      const rest = { ...(it as any) };
      delete (rest as any)._uid;

      const docRt = (rest.documento ?? null) as AnexoParecerRuntime | null;
      const persistente: AnexoParecer | undefined = docRt
        ? {
            tipo: docRt.tipo,
            nomeArquivo: docRt.nomeArquivo ?? '',
            base64: docRt.base64 ?? '',
          }
        : undefined;

      return {
        ...rest,
        documento: persistente,
        notasRodape: rest.notasRodape ?? [],
      } as ItemVoto;
    });

    return purificados.sort((a, b) => {
      const pa = Number.isFinite(a.posicao as number)
        ? (a.posicao as number)
        : Number.MAX_SAFE_INTEGER;
      const pb = Number.isFinite(b.posicao as number)
        ? (b.posicao as number)
        : Number.MAX_SAFE_INTEGER;
      return pa - pb;
    });
  }

  private emitChange() {
    const detail: Voto = { itensVoto: this.sanitizeItens() };
    this.dispatchEvent(
      new CustomEvent<Voto>('voto-change', {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => {
        const res = String(fr.result ?? '');
        const comma = res.indexOf(',');
        resolve(comma >= 0 ? res.slice(comma + 1) : res);
      };
      fr.onerror = () => reject(fr.error);
      fr.readAsDataURL(file);
    });
  }

  private async animateReorder(reorderFn: () => void) {
    const cards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );
    const first = new Map<string, DOMRect>();
    cards.forEach(el => {
      const uid = el.dataset.uid!;
      first.set(uid, el.getBoundingClientRect());
    });

    reorderFn();

    await this.updateComplete;

    const afterCards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );
    afterCards.forEach(el => {
      const uid = el.dataset.uid!;
      const last = el.getBoundingClientRect();
      const prev = first.get(uid);
      if (!prev) return;

      const dx = prev.left - last.left;
      const dy = prev.top - last.top;
      if (dx === 0 && dy === 0) return;

      el.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px)`,
            boxShadow: 'var(--wa-shadow-l)',
          },
          { transform: 'translate(0, 0)', boxShadow: 'var(--wa-shadow-m)' },
        ],
        { duration: 220, easing: 'cubic-bezier(.2,.8,.2,1)' },
      );
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
  }
}
