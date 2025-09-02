import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lexml-parecer-data-autria-impressao')
export class LexmlParecerDataAutoriaImpressao extends LitElement {
  render(): TemplateResult {
    return html` <lexml-ui-data></lexml-ui-data> `;
  }
}
