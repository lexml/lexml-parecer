import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lexml-eta-parecer')
export class LexmlEtaParecer extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lexml-eta-parecer-text-color, #000);
    }
  `;

  @property({ type: String }) header = 'Lexml-Eta-Parecer';

  render(): TemplateResult {
    return html` <h2>${this.header}</h2> `;
  }
}
