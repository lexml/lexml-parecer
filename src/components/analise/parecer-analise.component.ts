import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('lexml-parecer-analise')
export class LexmlParecerAnalise extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @query('lexml-ui-editor-texto-rico') private _ed!: HTMLElement & {
    getHtml: () => string;
  };

  public getHtml(): string {
    return this._ed?.getHtml?.() ?? '';
  }

  render(): TemplateResult {
    return html`
      <style>
        lexml-ui-editor-texto-rico .ql-editor {
          min-height: 420px !important;
          max-height: 420px !important;
        }
      </style>
      <lexml-ui-editor-texto-rico></lexml-ui-editor-texto-rico>
    `;
  }
}
