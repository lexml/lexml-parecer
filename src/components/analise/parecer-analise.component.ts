import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('lexml-parecer-analise')
export class LexmlParecerAnalise extends LitElement {
  @query('editor-texto-teste') private _ed!: HTMLElement & {
    getHtml: () => string;
  };

  public getHtml(): string {
    return this._ed?.getHtml?.() ?? '';
  }

  render(): TemplateResult {
    return html` <editor-texto-teste></editor-texto-teste> `;
  }
}
