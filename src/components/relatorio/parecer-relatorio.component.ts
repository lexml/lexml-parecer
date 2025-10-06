import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('lexml-parecer-relatorio')
export class LexmlParecerRelatorio extends LitElement {
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
    return html` <lexml-ui-editor-texto-rico></lexml-ui-editor-texto-rico> `;
  }
}
