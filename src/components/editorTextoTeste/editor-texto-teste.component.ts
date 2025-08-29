import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';

import { quillSnowStyles } from '../../assets/css/quill.snow.css.js';
import { quillCoreStyles } from '../../assets/css/quill.core.css.js';
import { quillTableStyles } from '../../assets/css/quill.table.css.js';

@customElement('editor-texto-teste')
export class EditorTextoTeste extends LitElement {
  @query('#editor') private editorEl!: HTMLDivElement;

  @state() private quill?: any;

  createRenderRoot() {
    return this;
  }

  render(): TemplateResult {
    return html`
      <style>
        ${quillSnowStyles}${quillCoreStyles}${quillTableStyles} #editor {
          height: 320px;
        }
      </style>
      <div id="editor">
        <p>Teste</p>
      </div>
    `;
  }

  async firstUpdated() {
    if (!this.editorEl) return;

    try {
      const mod: any = await import('quill/dist/quill.js');

      const QuillCtor =
        mod?.default?.Quill ??
        mod?.Quill ??
        mod?.default ??
        (window as any).Quill;

      if (typeof QuillCtor !== 'function') {
        throw new Error(
          'Construtor do Quill não encontrado no módulo carregado.',
        );
      }

      this.quill = new QuillCtor(this.editorEl, {
        theme: 'snow',
        modules: { toolbar: true },
      });

      console.log('Quill inicializado');
    } catch (err) {
      console.error('Falha ao carregar Quill:', err);
    }
  }

  disconnectedCallback(): void {
    this.quill = undefined;
    super.disconnectedCallback?.();
  }
}
