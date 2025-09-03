import { html, LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lexml-parecer-data-autria-impressao')
export class LexmlParecerDataAutoriaImpressao extends LitElement {
  render(): TemplateResult {
    return html`
      <div>
        <lexml-ui-data></lexml-ui-data>
        <h2>Componente AUTORIA PARECER</h2>
        <lexml-ui-opcoes-impressao></lexml-ui-opcoes-impressao>
      </div>
    `;
  }
}
