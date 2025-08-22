import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import lightStyles from '@shoelace-style/shoelace/dist/themes/light.styles.js';

@customElement('lexml-eta-parecer')
export class LexmlEtaParecer extends LitElement {
  static _styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lexml-eta-parecer-text-color, #000);
    }
  `;

  static styles = [lightStyles, LexmlEtaParecer._styles];

  @property({ type: String }) header = 'Lexml-Eta-Parecer';

  render(): TemplateResult {
    return html`
      <h2>${this.header}</h2>
      <sl-tab-group>
        <sl-tab slot="nav" panel="materia">Matéria</sl-tab>
        <sl-tab slot="nav" panel="relatorio">Relatório</sl-tab>
        <sl-tab slot="nav" panel="analise">Análise</sl-tab>
        <sl-tab slot="nav" panel="voto">Voto</sl-tab>
        <sl-tab slot="nav" panel="DataAutoriaEIpressao"
          >Data, Autoria e Impressão</sl-tab
        >
        <sl-tab slot="nav" panel="avisos">Avisos</sl-tab>

        <sl-tab-panel name="materia" class="overflow-hidden">
          <lexml-parecer-materia></lexml-parecer-materia>
        </sl-tab-panel>
        <sl-tab-panel name="relatorio" class="overflow-hidden">
          <lexml-parecer-relatorio></lexml-parecer-relatorio>
        </sl-tab-panel>
        <sl-tab-panel name="analise" class="overflow-hidden">
          <lexml-parecer-analise></lexml-parecer-analise>
        </sl-tab-panel>
        <sl-tab-panel name="voto" class="overflow-hidden">
          <lexml-parecer-voto></lexml-parecer-voto>
        </sl-tab-panel>
      </sl-tab-group>
    `;
  }
}
