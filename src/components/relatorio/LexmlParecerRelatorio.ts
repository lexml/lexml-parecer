import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lexml-parecer-relatorio')
export class LexmlParecerRelatorio extends LitElement {
  render(): TemplateResult {
    return html` <editor-texto-teste></editor-texto-teste> `;
  }
}
