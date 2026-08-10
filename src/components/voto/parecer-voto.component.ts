import { LitElement, html, TemplateResult } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { AnexoParecer, MimeType } from '../../models/anexo-parecer.model.js';
import {
  DeleteAnexoCallback,
  ObterAnexoBlobCallback,
  UploadAnexoCallback,
  VisualizarAnexoCallback,
} from '../../config/lexml-parecer-config.js';
import {
  TipoDocumento,
  TipoDocumentoLabel,
} from '../../types/tipo-documento.js';
import {
  alertarInfo,
  ConfiguracaoPainelNotasRodape,
  Usuario,
} from '@lexml/lexml-ui-commons';
import { NotaRodape } from '../../models/diversos.model.js';
import { RevisaoVoto } from '../../models/revisao.model.js';

type AnexoParecerRuntime = AnexoParecer & {
  _uid: string;
};

type DialogMode = 'new' | 'replace';
@customElement('lexml-parecer-voto')
export class LexmlParecerVoto extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }
  @property({ attribute: false }) onUploadAnexo?: UploadAnexoCallback;
  @property({ attribute: false }) onDeleteAnexo?: DeleteAnexoCallback;
  @property({ attribute: false }) onObterAnexoBlob?: ObterAnexoBlobCallback;
  @property({ attribute: false }) onVisualizarAnexo?: VisualizarAnexoCallback;
  @property({ type: Number }) alturaEditor = 320;
  @property({ attribute: false })
  configuracaoPainelNotasRodape?: ConfiguracaoPainelNotasRodape;

  @query('lexml-ui-editor-texto-rico')
  private _ed!: HTMLElement & {
    getTexto?: () => string;
    setTexto?: (html: string) => void;
    setNotasRodape?: (notas: NotaRodape[]) => void;
    setContent?: (html: string, notas?: NotaRodape[]) => void;
    getNotasRodape?: () => NotaRodape[];
    setNotaRodapeInicio?: (n: number) => void;
    getQuantidadeNotasRodape?: () => number;
    setUsuarioRevisao?: (u: Usuario) => void;
    updateRevisionStatus?: (on: boolean) => void;
    aceitarRevisoes?: () => void;
    rejeitarRevisoes?: () => void;
    getQuantidadeDeRevisoes?: () => number;
    getRevisoes?: () => any[];
    quill?: any;
  };

  @query('#dlgImportAnexo')
  private _dlg!: any;

  @query('#dlgFileInput')
  private _dlgFileInput!: HTMLInputElement;

  private pickDialogFile = () => {
    this._dlgFileInput?.click();
  };

  @state() private _textoVoto = '';

  @state() private anexos: AnexoParecerRuntime[] = [];
  @state() private uploading = false;

  // ---------- estado do modal ----------
  @state() private dialogOpen = false;
  @state() private dialogMode: DialogMode = 'new';
  @state() private dialogIdx: number = -1;

  @state() private dialogTipo: TipoDocumento | '' = '';
  @state() private dialogNomeDocumento: string = '';
  @state() private dialogFile: File | null = null;

  @state() private dialogFileKey = 0;

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

  private static readonly ALLOWED_EXTS = new Set(['.pdf', '.docx']);

  public getTextoVoto(): string {
    if (this._ed?.getTexto) {
      return this._ed.getTexto() ?? '';
    }
    return this._textoVoto ?? '';
  }

  public setTextoVoto(html: string = ''): void {
    this._textoVoto = html ?? '';
    if (!this._ed) return;

    if (typeof this._ed.setTexto === 'function') {
      this._ed.setTexto(html);
    } else if (typeof this._ed.setContent === 'function') {
      this._ed.setContent(html, this.getNotasRodape());
    }
  }

  private _onTextoChange = () => {
    this._textoVoto = this.getTextoVoto();
    this.emitChange();
  };

  public getNotasRodape(): NotaRodape[] {
    return this._ed?.getNotasRodape?.() ?? [];
  }

  public setNotasRodape(notas: NotaRodape[] = []): void {
    if (!this._ed) return;
    if (typeof this._ed.setNotasRodape === 'function') {
      this._ed.setNotasRodape(notas);
    } else if (typeof this._ed.setContent === 'function') {
      this._ed.setContent(this.getTextoVoto(), notas);
    }
  }

  public setNotaRodapeInicio(base: number): void {
    const n = Number.isFinite(base) && base > 0 ? Math.floor(base) : 1;
    this._ed?.setNotaRodapeInicio?.(n);
  }

  public getQuantidadeNotasRodape(): number {
    return this._ed?.getQuantidadeNotasRodape?.() ?? 0;
  }

  private _usuarioRevisao?: Usuario;
  private _applyUsuarioTries = 0;

  public setUsuarioRevisaoVoto(usuario: Usuario): void {
    this._usuarioRevisao = usuario;
    this._applyUsuarioToEditor();
  }

  private _applyUsuarioToEditor(): void {
    if (!this._usuarioRevisao || !this._ed) return;

    const ed: any = this._ed;
    if (typeof ed.setUsuarioRevisao === 'function') {
      ed.setUsuarioRevisao(this._usuarioRevisao);
      return;
    }

    if (!ed.quill?.revisao) {
      if (this._applyUsuarioTries < 20) {
        this._applyUsuarioTries++;
        setTimeout(() => this._applyUsuarioToEditor(), 50);
      }
      return;
    }

    ed.quill.revisao.usuario = this._usuarioRevisao?.nome || 'Anônimo';
    ed.quill.revisao.usuarioId = this._usuarioRevisao?.id;
    ed.quill.revisao.usuarioSigla = this._usuarioRevisao?.sigla;
    ed.quill.revisao.usuarioObj = this._usuarioRevisao;
    this._applyUsuarioTries = 0;
  }

  public setEmRevisaoVoto(on: boolean): void {
    const ed: any = this._ed;
    if (!ed) return;

    if (typeof ed.updateRevisionStatus === 'function') {
      ed.updateRevisionStatus(!!on);
      return;
    }

    if (ed.quill?.revisao) {
      ed.quill.revisao.emRevisao = !!on;
      if (on) {
        const txtAtual =
          (typeof ed.getTexto === 'function' ? ed.getTexto() : ed.texto) ?? '';
        ed.quill.revisao.textoAntesRevisao = txtAtual;
      }
    }
  }

  public aceitarTodasRevisoesVoto(): void {
    const ed: any = this._ed;
    if (!ed) return;

    if (typeof ed.aceitarRevisoes === 'function') {
      ed.aceitarRevisoes();
    } else {
      ed.quill?.revisao?.revisarTodos?.(true);
    }
  }

  public rejeitarTodasRevisoesVoto(): void {
    const ed: any = this._ed;
    if (!ed) return;

    if (typeof ed.rejeitarRevisoes === 'function') {
      ed.rejeitarRevisoes();
    } else {
      ed.quill?.revisao?.revisarTodos?.(false);
    }
  }

  public getQuantidadeRevisoesVoto(): number {
    const ed: any = this._ed;
    if (!ed) return 0;

    if (typeof ed.getQuantidadeDeRevisoes === 'function') {
      return ed.getQuantidadeDeRevisoes() ?? 0;
    }
    return ed.quill?.revisao?.quantidade ?? 0;
  }

  public getRevisoes(): RevisaoVoto[] {
    const base = (this._ed as any)?.getRevisoes?.() ?? [];
    return base.map(
      (r: any) =>
        new RevisaoVoto(
          new Usuario(r.usuario?.nome, r.usuario?.id, r.usuario?.sigla),
          r.dataHora,
          'Voto alterado',
        ),
    );
  }

  public isEmRevisao(): boolean {
    return !!(this._ed as any)?.quill?.revisao?.emRevisao;
  }

  public getAnexos(): AnexoParecer[] {
    return this.anexos.map(a => ({
      nomeArquivo: a.nomeArquivo ?? '',
      nomeDocumento: (a.nomeDocumento ?? a.nomeArquivo ?? '').trim(),
      idArquivo: a.idArquivo ?? '',
      tipo: a.tipo,
      mimeType: a.mimeType,
    }));
  }

  public async setAnexos(anexos?: AnexoParecer[] | null): Promise<void> {
    const orig = Array.isArray(anexos) ? anexos : [];
    this.anexos = orig.map(a => ({
      ...a,
      nomeDocumento: (a as any).nomeDocumento ?? a.nomeArquivo ?? '',
      _uid: this.uid(),
    }));
    await this.updateComplete;
    this.emitChange();
  }

  private toAnexoParecer(anexo: Partial<AnexoParecer>): AnexoParecer {
    return {
      idArquivo: anexo.idArquivo ?? '',
      nomeArquivo: anexo.nomeArquivo ?? '',
      nomeDocumento: (anexo.nomeDocumento ?? anexo.nomeArquivo ?? '').trim(),
      tipo: anexo.tipo,
      mimeType: anexo.mimeType ?? MimeType.PDF,
    };
  }

  private async uploadAnexo(file: File): Promise<string> {
    if (typeof this.onUploadAnexo === 'function') {
      const idArquivo = (await this.onUploadAnexo(file))?.trim();
      if (!idArquivo) {
        throw new Error('Callback de upload não retornou idArquivo válido.');
      }
      return idArquivo;
    }
    throw new Error('Callback onUploadAnexo não informado.');
  }

  private async deleteAnexo(anexo: AnexoParecer): Promise<void> {
    if (!anexo?.idArquivo) return;
    if (typeof this.onDeleteAnexo === 'function') {
      await this.onDeleteAnexo(this.toAnexoParecer(anexo));
      return;
    }
    throw new Error('Callback onDeleteAnexo não informado.');
  }

  private async obterAnexoBlob(
    anexo: AnexoParecer,
  ): Promise<{ blob: Blob; contentType: string | null }> {
    if (typeof this.onObterAnexoBlob === 'function') {
      const result = await this.onObterAnexoBlob(this.toAnexoParecer(anexo));
      if (!result?.blob) {
        throw new Error('Callback de obtenção de anexo não retornou blob.');
      }
      return {
        blob: result.blob,
        contentType: result.contentType ?? null,
      };
    }
    throw new Error('Callback onObterAnexoBlob não informado.');
  }

  private isAllowedFile(file: File): boolean {
    const hasGoodMime =
      file.type && LexmlParecerVoto.ALLOWED_MIME_TYPES.has(file.type);

    const name = file.name?.toLowerCase() ?? '';
    const dot = name.lastIndexOf('.');
    const ext = dot >= 0 ? name.slice(dot) : '';
    const hasGoodExt = LexmlParecerVoto.ALLOWED_EXTS.has(ext);

    return hasGoodMime || hasGoodExt;
  }

  private guessMime(name: string): MimeType {
    const n = (name || '').toLowerCase();
    if (n.endsWith('.pdf')) return MimeType.PDF;
    if (n.endsWith('.docx')) return MimeType.DOCX;
    return MimeType.PDF;
  }

  private async removeItem(idx: number) {
    const item = this.anexos[idx];
    if (!item) return;

    try {
      if (item.idArquivo) {
        await this.deleteAnexo(this.toAnexoParecer(item));
      }

      this.anexos = this.anexos.filter((_, i) => i !== idx);
      this.emitChange();
    } catch (err) {
      console.error('[lexml-parecer-voto] Erro ao excluir anexo:', err);
      alertarInfo('Não foi possível excluir o anexo. Tente novamente.');
    }
  }

  private findIdxFromEvent(e: Event): number {
    const card = (e.currentTarget as HTMLElement)?.closest(
      'wa-card.card-header',
    ) as HTMLElement | null;
    const uid = card?.dataset.uid;
    return uid ? this.anexos.findIndex(it => it._uid === uid) : -1;
  }

  private removeByEvent(e: Event) {
    const idx = this.findIdxFromEvent(e);
    if (idx < 0) return;
    this.removeItem(idx);
  }

  private async move(idx: number, delta: number) {
    const to = idx + delta;
    if (to < 0 || to >= this.anexos.length) return;

    await this.animateReorder(() => {
      const arr = [...this.anexos];
      const [item] = arr.splice(idx, 1);
      arr.splice(to, 0, item);
      this.anexos = arr;
      this.emitChange();
    });
  }

  private async moveByEvent(e: Event, delta: number) {
    const idx = this.findIdxFromEvent(e);
    if (idx < 0) return;
    await this.move(idx, delta);
  }

  private updateDocField(
    idx: number,
    field: keyof AnexoParecer,
    value: string | TipoDocumento | MimeType,
  ) {
    const arr = [...this.anexos];
    const atual = arr[idx];
    arr[idx] = {
      ...atual,
      [field]: value,
    } as AnexoParecerRuntime;
    this.anexos = arr;
    this.emitChange();
  }

  private async view(idx: number) {
    const doc = this.anexos[idx];
    if (!doc?.idArquivo) {
      alertarInfo('Nenhum arquivo anexado ainda.');
      return;
    }

    if (doc.mimeType !== MimeType.PDF) {
      alertarInfo('Visualização disponível apenas para PDFs.');
      return;
    }

    const anexo = this.toAnexoParecer(doc);

    if (typeof this.onVisualizarAnexo === 'function') {
      try {
        await this.onVisualizarAnexo(anexo);
      } catch (err) {
        console.error(
          '[lexml-parecer-voto] Erro ao executar callback de visualização:',
          err,
        );
        alertarInfo('Não foi possível visualizar o anexo. Tente novamente.');
      }
      return;
    }

    const { blob } = await this.obterAnexoBlob(anexo);
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener');
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  }

  private async download(idx: number) {
    const doc = this.anexos[idx];
    if (!doc?.idArquivo) {
      alertarInfo('Nenhum arquivo anexado ainda.');
      return;
    }

    const anexo = this.toAnexoParecer(doc);
    const { blob } = await this.obterAnexoBlob(anexo);

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = doc.nomeArquivo || doc.idArquivo;
    a.click();
    URL.revokeObjectURL(url);
  }

  // ---------- ANIMAÇÕES  ----------

  private async animateReorder(reorderFn: () => void) {
    const cards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );
    const first = new Map<string, DOMRect>();
    cards.forEach(el => first.set(el.dataset.uid!, el.getBoundingClientRect()));

    reorderFn();
    await this.updateComplete;

    const afterCards = Array.from(
      this.querySelectorAll<HTMLElement>('wa-card.card-header'),
    );
    const animations: Animation[] = [];

    afterCards.forEach(el => {
      const uid = el.dataset.uid!;
      const last = el.getBoundingClientRect();
      const prev = first.get(uid);
      if (!prev) return;

      const dx = Math.round(prev.left - last.left);
      const dy = Math.round(prev.top - last.top);
      if (dx === 0 && dy === 0) return;

      el.classList.add('reorder-anim');

      const anim = el.animate(
        [
          {
            transform: `translate(${dx}px, ${dy}px)`,
            boxShadow: 'var(--wa-shadow-l)',
          },
          { transform: 'translate(0, 0)', boxShadow: 'var(--wa-shadow-m)' },
        ],
        {
          duration: 220,
          easing: 'cubic-bezier(.2,.8,.2,1)',
          fill: 'none',
        },
      );

      anim.addEventListener('finish', () => {
        try {
          (el as HTMLElement).style.transform = 'none';
        } catch {
          console.log('erro ao gerar animação do itens de anexo');
        }
        el.classList.remove('reorder-anim');
      });

      animations.push(anim);
    });

    await Promise.allSettled(animations.map(a => a.finished.catch(() => {})));
  }

  private async scrollToBottom(): Promise<void> {
    await this.updateComplete;
    await new Promise<void>(r => requestAnimationFrame(() => r()));

    const tabPanelContent = this.closest(
      '.tab-panel-content',
    ) as HTMLElement | null;
    if (tabPanelContent) {
      tabPanelContent.scrollTo({
        top: tabPanelContent.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  // ---------- EMISSÃO DE EVENTO ----------

  private emitChange() {
    this.dispatchEvent(
      new CustomEvent('voto-change', {
        detail: {
          texto: this.getTextoVoto(),
          anexos: this.getAnexos(),
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  connectedCallback(): void {
    super.connectedCallback?.();
    this.addEventListener('rte:ready', this._onEditorReady as any);
  }

  disconnectedCallback(): void {
    this.removeEventListener('rte:ready', this._onEditorReady as any);
    super.disconnectedCallback?.();
  }

  private _onEditorReady = () => {
    this._applyUsuarioToEditor();
    if (this._textoVoto) {
      this.setTextoVoto(this._textoVoto);
    }
  };

  // ---------- MODAL FLOW ----------

  private openNewDialog = () => {
    this.dialogMode = 'new';
    this.dialogIdx = -1;

    this.dialogTipo = '';
    this.dialogNomeDocumento = '';
    this.dialogFile = null;

    this.dialogFileKey++;
    this.dialogOpen = true;

    queueMicrotask(() => this._dlg?.show?.());
  };

  private openReplaceDialog = (idx: number) => {
    const item = this.anexos[idx];
    if (!item) return;

    this.dialogMode = 'replace';
    this.dialogIdx = idx;

    this.dialogTipo = (item.tipo ?? '') as any;
    this.dialogNomeDocumento = (
      item.nomeDocumento ??
      item.nomeArquivo ??
      ''
    ).trim();
    this.dialogFile = null;
    this.dialogFileKey++;
    this.dialogOpen = true;

    queueMicrotask(() => this._dlg?.show?.());
  };

  private closeDialog = () => {
    this.dialogOpen = false;
    this.dialogFile = null;
    this.dialogFileKey++;
  };

  private onDialogTipoChange = (e: any) => {
    const value = String(e.detail?.value ?? e.target?.value ?? '').trim();
    this.dialogTipo =
      value && Object.values(TipoDocumento).includes(value as any)
        ? (value as TipoDocumento)
        : '';
  };

  private onDialogNomeInput = (e: Event) => {
    const v =
      (e.target as any)?.value ?? (e.target as HTMLInputElement)?.value ?? '';
    this.dialogNomeDocumento = String(v);
  };

  private onDialogFilePicked = (e: Event) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    input.value = '';

    if (!file) {
      this.dialogFile = null;
      return;
    }

    if (!this.isAllowedFile(file)) {
      this.dialogFile = null;
      alertarInfo('Arquivo inválido. Envie apenas PDF ou DOCX.');
      return;
    }

    this.dialogFile = file;

    if (!this.dialogNomeDocumento?.trim()) {
      this.dialogNomeDocumento = this.fileBaseName(file.name);
    }
  };

  private canConfirmDialog(): boolean {
    if (this.uploading) return false;
    if (!this.dialogFile) return false;
    if (!this.dialogTipo) return false;
    return true;
  }

  private async confirmDialogImport(): Promise<void> {
    if (!this.canConfirmDialog()) return;

    const file = this.dialogFile!;
    const tipo = this.dialogTipo as TipoDocumento;
    const mime = this.guessMime(file.name);

    const excludeUid =
      this.dialogMode === 'replace'
        ? this.anexos[this.dialogIdx]?._uid
        : undefined;

    const uniqueNomeArquivo = this.makeUniqueNomeArquivo(file.name, excludeUid);

    const originalBase = this.fileBaseName(file.name);
    let nomeDocumento = (
      this.dialogNomeDocumento?.trim() ||
      originalBase ||
      file.name
    ).trim();

    if (
      !this.dialogNomeDocumento?.trim() ||
      this.dialogNomeDocumento.trim() === originalBase
    ) {
      nomeDocumento = (
        this.fileBaseName(uniqueNomeArquivo) || nomeDocumento
      ).trim();
    }

    this.uploading = true;

    try {
      const newIdArquivo = await this.uploadAnexo(file);

      if (this.dialogMode === 'new') {
        const novo: AnexoParecerRuntime = {
          _uid: this.uid(),
          idArquivo: newIdArquivo,
          mimeType: mime,
          tipo,
          nomeArquivo: uniqueNomeArquivo,
          nomeDocumento,
        };

        this.anexos = [...this.anexos, novo];
        this.emitChange();
        this.closeDialog();
        queueMicrotask(() => this.scrollToBottom());
        return;
      }

      // replace
      const idx = this.dialogIdx;
      const atual = this.anexos[idx];
      if (!atual) {
        this.closeDialog();
        return;
      }

      const oldIdArquivo = atual.idArquivo ?? '';

      const arr = [...this.anexos];
      arr[idx] = {
        ...atual,
        idArquivo: newIdArquivo,
        mimeType: mime,
        nomeArquivo: uniqueNomeArquivo,
        nomeDocumento,
        tipo: atual.tipo ?? tipo,
      };

      this.anexos = arr;
      this.emitChange();
      this.closeDialog();

      if (oldIdArquivo && oldIdArquivo !== newIdArquivo) {
        await this.deleteAnexo({
          ...this.toAnexoParecer(atual),
          idArquivo: oldIdArquivo,
        });
      }
    } catch (err) {
      console.error('[lexml-parecer-voto] Erro ao enviar anexo:', err);
      alertarInfo('Erro ao enviar anexo. Tente novamente mais tarde.');
    } finally {
      this.uploading = false;
      this.dialogFile = null;
      this.dialogFileKey++;
    }
  }

  private onDialogHide = (event: any) => {
    if (event.target !== this._dlg) return;

    this.dialogOpen = false;
    this.dialogFile = null;
    this.dialogFileKey++;
  };

  private normalizeName(n: string): string {
    return (n ?? '').trim().toLowerCase();
  }

  private splitFileName(name: string): { base: string; ext: string } {
    const onlyName = (name ?? '').split(/[\\/]/).pop() ?? '';
    const dot = onlyName.lastIndexOf('.');
    if (dot > 0) {
      return { base: onlyName.slice(0, dot), ext: onlyName.slice(dot) };
    }
    return { base: onlyName, ext: '' };
  }

  private isNomeArquivoTaken(nome: string, excludeUid?: string): boolean {
    const key = this.normalizeName(nome);
    if (!key) return false;

    return this.anexos.some(a => {
      if (excludeUid && a._uid === excludeUid) return false;
      return this.normalizeName(a.nomeArquivo ?? '') === key;
    });
  }

  private makeUniqueNomeArquivo(original: string, excludeUid?: string): string {
    const clean = (original ?? '').trim() || 'anexo';
    if (!this.isNomeArquivoTaken(clean, excludeUid)) return clean;

    const { base, ext } = this.splitFileName(clean);

    for (let i = 1; i < 1000; i++) {
      const candidate = `${base} (${i})${ext}`;
      if (!this.isNomeArquivoTaken(candidate, excludeUid)) return candidate;
    }
    return `${base} (${Date.now()})${ext}`;
  }

  private fileBaseName(name: string): string {
    const onlyName = (name ?? '').split(/[\\/]/).pop() ?? '';
    const dot = onlyName.lastIndexOf('.');
    return dot > 0 ? onlyName.slice(0, dot) : onlyName;
  }

  protected render(): TemplateResult {
    return html`
      <style>
        .toolbar {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 16px;
          margin-bottom: 50px;
          justify-content: center;
        }
        .field-texto-voto {
          margin-bottom: 8px;
        }
        wa-card {
          margin-bottom: 0.75rem;
          box-shadow: var(--wa-shadow-m);
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
        }
        wa-card.card-header {
          transition: box-shadow 0.2s ease;
        }
        .reorder-anim {
          will-change: transform;
        }
        .filed-header {
          display: flex;
          justify-content: space-between;
        }
        .item-actions {
          display: flex;
          gap: 0.5rem;
        }
        .muted {
          display: flex;
          color: #9ca3af;
          margin: 2rem 0 1rem 0;
          justify-content: center;
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
        .dlg-grid {
          display: grid;
          gap: 0.75rem;
        }
        .dlg-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .dlg-file-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .dlg-file-name {
          flex: 1;
        }
      </style>
      <div class="wa-grid field-texto-voto" style="--min-column-size: 16rem;">
        <div class="wa-span-grid">
          <lexml-ui-editor-texto-rico
            .height=${this.alturaEditor}
            .configuracaoPainelNotasRodape=${this.configuracaoPainelNotasRodape}
            @onchange=${this._onTextoChange}
          ></lexml-ui-editor-texto-rico>
        </div>
      </div>

      <!-- LISTA DE ANEXOS -->
      ${this.anexos.length === 0
        ? html`<div class="muted">Nenhum anexo adicionado ainda.</div>`
        : repeat(
            this.anexos,
            it => it._uid,
            (item, idx) => this.renderAnexo(item, idx),
          )}

      <div class="toolbar">
        <wa-button size="small" @click=${this.openNewDialog}>
          Importar anexo
        </wa-button>
      </div>
      <wa-dialog
        id="dlgImportAnexo"
        label=${this.dialogMode === 'new'
          ? 'Importar anexo'
          : 'Importar documento'}
        .open=${this.dialogOpen}
        @wa-hide=${this.onDialogHide}
      >
        <div class="dlg-grid">
          <wa-select
            label="Tipo"
            placeholder="Selecione o tipo"
            .value=${String(this.dialogTipo ?? '')}
            ?disabled=${this.dialogMode === 'replace'}
            @wa-change=${this.onDialogTipoChange}
            @change=${this.onDialogTipoChange}
          >
            <wa-option value="">Selecione…</wa-option>

            <wa-option
              value=${TipoDocumento.SUBSTITUTIVO}
              ?selected=${this.dialogTipo === TipoDocumento.SUBSTITUTIVO}
            >
              ${TipoDocumentoLabel[TipoDocumento.SUBSTITUTIVO]}
            </wa-option>

            <wa-option
              value=${TipoDocumento.EMENDA}
              ?selected=${this.dialogTipo === TipoDocumento.EMENDA}
            >
              ${TipoDocumentoLabel[TipoDocumento.EMENDA]}
            </wa-option>

            <wa-option
              value=${TipoDocumento.OUTRO}
              ?selected=${this.dialogTipo === TipoDocumento.OUTRO}
            >
              ${TipoDocumentoLabel[TipoDocumento.OUTRO]}
            </wa-option>
          </wa-select>
          <div>
            <div><label>Arquivo</label></div>

            <div class="dlg-file-row">
              <wa-button appearance="outlined" @click=${this.pickDialogFile}>
                Escolher Arquivo
              </wa-button>

              <wa-input
                class="dlg-file-name"
                disabled
                placeholder="Nenhum arquivo escolhido"
                .value=${this.dialogFile?.name ?? ''}
              ></wa-input>

              <input
                id="dlgFileInput"
                type="file"
                style="display:none"
                accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                @change=${(e: Event) => this.onDialogFilePicked(e as any)}
              />
            </div>
          </div>

          <wa-input
            label="Nome"
            type="text"
            .value=${this.dialogNomeDocumento ?? ''}
            placeholder="Nome do documento"
            @wa-input=${this.onDialogNomeInput}
            @input=${this.onDialogNomeInput}
          ></wa-input>

          <div class="dlg-actions">
            <wa-button
              appearance="outlined"
              @click=${this.closeDialog}
              ?disabled=${this.uploading}
            >
              Cancelar
            </wa-button>

            <wa-button
              variant="brand"
              @click=${this.confirmDialogImport}
              ?disabled=${!this.canConfirmDialog()}
            >
              ${this.uploading ? 'Importando...' : 'Importar'}
            </wa-button>
          </div>
        </div>
      </wa-dialog>
    `;
  }

  private renderAnexo(item: AnexoParecerRuntime, idx: number): TemplateResult {
    const hasFile = !!item.idArquivo;
    const canPreview = item.mimeType === MimeType.PDF;

    const viewTitle = canPreview
      ? 'Visualizar Documento'
      : 'Não é possível visualizar .docx';

    return html`
      <wa-card with-header class="card-header" data-uid=${item._uid}>
        <div slot="header" class="filed-header">
          <div>
            <span class="chip">Anexo</span>
            <span>—</span>
            ${item.nomeArquivo
              ? html`<span class="sub">${item.nomeArquivo}</span>`
              : html``}
          </div>

          <div class="item-actions">
            <wa-button
              title=${viewTitle}
              appearance="outlined"
              pill
              size="small"
              variant="brand"
              ?disabled=${!hasFile || !canPreview}
              @click=${() => this.view(idx)}
            >
              <wa-icon
                name="eye"
                variant="solid"
                label="Visualizar Documento"
              ></wa-icon>
            </wa-button>

            <wa-button
              title="Baixar documento"
              appearance="outlined"
              pill
              size="small"
              variant="success"
              ?disabled=${!hasFile}
              @click=${() => this.download(idx)}
            >
              <wa-icon
                name="download"
                variant="solid"
                label="Baixar documento"
              ></wa-icon>
            </wa-button>

            <wa-button
              title="Mover para cima"
              appearance="outlined"
              pill
              size="small"
              ?disabled=${idx === 0}
              @click=${(e: Event) => this.moveByEvent(e, -1)}
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
              ?disabled=${idx === this.anexos.length - 1}
              @click=${(e: Event) => this.moveByEvent(e, 1)}
            >
              <wa-icon
                name="arrow-down"
                variant="solid"
                label="Mover para baixo"
              ></wa-icon>
            </wa-button>

            <wa-button
              title="Excluir anexo"
              pill
              size="small"
              variant="danger"
              @click=${(e: Event) => this.removeByEvent(e)}
            >
              <wa-icon
                name="trash"
                variant="solid"
                label="Excluir anexo"
              ></wa-icon>
            </wa-button>
          </div>
        </div>

        <div class="wa-grid" style="--min-column-size: 48rem;">
          <div>
            <wa-select
              label="Tipo"
              .value=${String((item.tipo as any) ?? '')}
              disabled
            >
              <wa-option value="">Selecione…</wa-option>

              <wa-option
                value=${TipoDocumento.SUBSTITUTIVO}
                ?selected=${item.tipo === TipoDocumento.SUBSTITUTIVO}
              >
                ${TipoDocumentoLabel[TipoDocumento.SUBSTITUTIVO]}
              </wa-option>

              <wa-option
                value=${TipoDocumento.EMENDA}
                ?selected=${item.tipo === TipoDocumento.EMENDA}
              >
                ${TipoDocumentoLabel[TipoDocumento.EMENDA]}
              </wa-option>

              <wa-option
                value=${TipoDocumento.OUTRO}
                ?selected=${item.tipo === TipoDocumento.OUTRO}
              >
                ${TipoDocumentoLabel[TipoDocumento.OUTRO]}
              </wa-option>
            </wa-select>
          </div>

          <div>
            <wa-input
              label="Nome"
              type="text"
              .value=${item.nomeDocumento ?? ''}
              placeholder="Nome do documento"
              @wa-input=${(e: CustomEvent) =>
                this.updateDocField(
                  idx,
                  'nomeDocumento',
                  (e.target as any).value,
                )}
              @input=${(e: Event) =>
                this.updateDocField(
                  idx,
                  'nomeDocumento',
                  (e.target as HTMLInputElement).value,
                )}
            ></wa-input>
          </div>
        </div>
      </wa-card>
    `;
  }
}
