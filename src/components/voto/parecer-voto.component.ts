import { LitElement, html, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ItemVoto } from '../../models/item-voto.modelo.js';
import { Voto } from '../../models/voto.modelo.js';
import { AnexoParecer } from '../../models/anexo.modelo.js';
import { TipoDocumento } from '../../types/tipo-documento.js';
import { alertarInfo } from '@ui-commons';

type AnexoParecerRuntime = AnexoParecer & {
  arquivo?: File | null;
  url?: string | null;
};
@customElement('lexml-parecer-voto')
export class LexmlParecerVoto extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @state() private itens: ItemVoto[] = [];

  private static readonly ALLOWED_MIME_TYPES = new Set([
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ]);

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
    const voto: Voto = {
      itensVoto: this.sanitizeItens(),
    };
    return voto;
  }

  public setVoto(voto: Voto) {
    this.itens = (voto?.itensVoto ?? []).map((it, i) => ({
      ...it,
      posicao: i + 1,
    }));
  }

  protected render(): TemplateResult {
    return html`
      <style>
        .toolbar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
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
        details {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0.5rem 0.75rem;
          margin-bottom: 0.75rem;
          background: #fff;
        }
        summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        summary::-webkit-details-marker {
          display: none;
        }
        .caret {
          transition: transform 0.16s ease;
        }
        wa-details[open] .caret {
          transform: rotate(90deg);
        }
        .meta {
          color: #6b7280;
          font-size: 0.9em;
        }
        wa-input,
        wa-select,
        input[type='text'],
        select {
          width: 100%;
          box-sizing: border-box;
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
        .item-actions {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .file-actions {
          display: inline-flex;
          gap: 0.5rem;
        }
        .muted {
          color: #9ca3af;
        }
        wa-input,
        wa-select {
          width: 100%;
        }
        wa-details::part(base) {
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 0rem 0.75rem;
          margin-bottom: 0.75rem;
          background: #fff;
        }
        wa-details::part(summary) {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .voto-editor .ql-container {
          height: calc(100% - 55px) !important;
        }

        .voto-editor .ql-editor {
          min-height: 220px !important;
          max-height: 220px !important;
          height: 100% !important;
          overflow-y: auto;
        }
      </style>
      <div class="toolbar">
        <wa-button size="small" @click=${this.addDocumento}
          >Importar documento</wa-button
        >
        <wa-button size="small" variant="brand" @click=${this.addTexto}
          >Adicionar bloco de texto</wa-button
        >
      </div>
      ${this.itens.length === 0
        ? html`<div class="muted">Nenhum voto adicionado ainda.</div>`
        : this.itens.map((item, idx) => this.renderItem(item, idx))}
    `;
  }

  private renderItem(item: ItemVoto, idx: number): TemplateResult {
    const header = item.documento
      ? `Documento: ${
          (item.documento as AnexoParecerRuntime).arquivo?.name ??
          item.documento.nomeArquivo ??
          'sem nome'
        }`
      : 'Bloco de texto';

    return html`
      <wa-details open>
        <div slot="summary">
          <span class="chip">Voto #${item.posicao}</span>
          <span>— ${header}</span>
        </div>
        ${item.documento
          ? this.renderDocumento(item, idx)
          : this.renderTexto(item, idx)}
        <div class="item-actions">
          <wa-button size="small" @click=${() => this.move(idx, -1)}
            >↑</wa-button
          >
          <wa-button size="small" @click=${() => this.move(idx, 1)}
            >↓</wa-button
          >
          <wa-button
            size="small"
            variant="neutral"
            @click=${() => this.removeItem(idx)}
            >Remover</wa-button
          >
        </div>
      </wa-details>
    `;
  }

  private renderTexto(item: ItemVoto, idx: number): TemplateResult {
    return html`
      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div class="wa-span-grid wa-cluster wa-gap-xs">
          <label class="muted">Texto:</label>
        </div>
        <div class="wa-span-grid ">
          <lexml-ui-editor-texto-rico
            class="voto-editor"
            .texto=${item.texto ?? ''}
            @onchange=${(e: Event) => this.onEditorChange(idx, e)}
          ></lexml-ui-editor-texto-rico>
        </div>
      </div>
    `;
  }

  private renderDocumento(item: ItemVoto, idx: number): TemplateResult {
    const doc = item.documento!;
    return html`
      <div>
        <div><label>Tipo:</label></div>
        <div>
          <wa-select
            placeholder="Selecione o tipo"
            .value=${(doc.tipo as TipoDocumento) ?? ''}
            @change=${(e: Event) => this.onTipoChange(idx, e)}
            @wa-change=${(e: Event) => this.onTipoChange(idx, e)}
            @wa-input=${(e: Event) => this.onTipoChange(idx, e)}
          >
            <wa-option value="" label="Selecione…">Selecione…</wa-option>
            <wa-option value=${TipoDocumento.SUBSTITUTIVO}>
              ${TipoDocumento.SUBSTITUTIVO}
            </wa-option>
            <wa-option value=${TipoDocumento.EMENDA}>
              ${TipoDocumento.EMENDA}
            </wa-option>
            <wa-option value=${TipoDocumento.OUTRO}>
              ${TipoDocumento.OUTRO}
            </wa-option>
          </wa-select>
        </div>
      </div>

      <div>
        <div><label>Nome:</label></div>
        <div>
          <wa-input
            type="text"
            .value=${doc.nomeArquivo ?? ''}
            placeholder="Nome do documento"
            @wa-input=${(e: CustomEvent) =>
              this.updateDocField(idx, 'nomeArquivo', (e.target as any).value)}
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
        <div><label>Arquivo:</label></div>
        <div>
          <input
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            @change=${(e: Event) => this.onFilePicked(idx, e as InputEvent)}
          />
        </div>
      </div>

      <div
        class="wa-grid"
        style="--min-column-size: 16rem; margin-top: 0.5rem;"
      >
        <div class="wa-span-grid wa-cluster wa-gap-xs file-actions">
          ${doc.base64 || (doc as AnexoParecerRuntime).arquivo
            ? html`
                <wa-button size="small" @click=${() => this.view(idx)}>
                  Visualizar
                </wa-button>
                <wa-button
                  size="small"
                  variant="brand"
                  @click=${() => this.download(idx)}
                >
                  Download
                </wa-button>
              `
            : html`<span class="muted">Sem arquivo</span>`}
        </div>
      </div>
    `;
  }

  private onEditorChange(idx: number, e: Event) {
    const ed = (e.target as any) ?? (e.currentTarget as any);

    const html =
      typeof ed?.getHtml === 'function'
        ? ed.getHtml()
        : typeof ed?.getTexto === 'function'
          ? ed.getTexto()
          : (ed?.texto ?? '');

    this.updateTexto(idx, String(html ?? ''));
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
  };

  private addTexto = () => {
    this.itens = [...this.itens, { texto: '', posicao: this.itens.length + 1 }];
    this.emitChange();
  };

  private removeItem(idx: number) {
    this.itens = this.itens
      .filter((_, i) => i !== idx)
      .map((it, i) => ({ ...it, posicao: i + 1 }));
    this.emitChange();
  }

  private move(idx: number, delta: number) {
    const to = idx + delta;
    if (to < 0 || to >= this.itens.length) return;
    const arr = [...this.itens];
    const [item] = arr.splice(idx, 1);
    arr.splice(to, 0, item);
    this.itens = arr.map((it, i) => ({ ...it, posicao: i + 1 }));
    this.emitChange();
  }

  private updateTexto(idx: number, value: string) {
    const arr = [...this.itens];
    arr[idx] = { ...arr[idx], texto: value };
    this.itens = arr;
    this.emitChange();
  }

  private onTipoChange(idx: number, e: Event) {
    const anyEvt = e as any;
    const target = (e.target as any) ?? anyEvt.currentTarget;

    const raw =
      anyEvt?.detail?.value ??
      target?.value ??
      (typeof target?.getAttribute === 'function'
        ? target.getAttribute('value')
        : '');
    const value = (raw ?? '').toString();
    this.updateDocField(idx, 'tipo', value as TipoDocumento);
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
    return this.itens.map(it => {
      const doc = (it.documento ?? {}) as AnexoParecerRuntime;
      const persistente: AnexoParecer = {
        tipo: doc.tipo,
        nomeArquivo: doc.nomeArquivo ?? '',
        base64: doc.base64 ?? '',
      };
      return {
        ...it,
        documento: it.documento ? persistente : undefined,
      };
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

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
  }
}
