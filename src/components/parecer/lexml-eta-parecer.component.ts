import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('lexml-eta-parecer')
export class LexmlEtaParecer extends LitElement {
  static _styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--lexml-eta-parecer-text-color, #000);
    }
  `;

  static styles = [LexmlEtaParecer._styles];

  @property({ type: String }) header = 'Lexml-Eta-Parecer';

  render(): TemplateResult {
    return html`
      <h2>${this.header}</h2>
      <wa-tab-group>
        <wa-tab slot="nav" panel="dataAutoriaImpressao"
          >Data, Autoria e Impressão</wa-tab
        >
        <wa-tab slot="nav" panel="materia">Matéria</wa-tab>
        <wa-tab slot="nav" panel="relatorio">Relatório</wa-tab>
        <wa-tab slot="nav" panel="analise">Análise</wa-tab>
        <wa-tab slot="nav" panel="voto">Voto</wa-tab>
        <wa-tab slot="nav" panel="avisos">Avisos</wa-tab>

        <wa-tab-panel name="materia" class="overflow-hidden">
          <lexml-parecer-materia></lexml-parecer-materia>
        </wa-tab-panel>
        <wa-tab-panel name="relatorio" class="overflow-hidden">
          <lexml-parecer-relatorio></lexml-parecer-relatorio>
        </wa-tab-panel>
        <wa-tab-panel name="analise" class="overflow-hidden">
          <lexml-parecer-analise></lexml-parecer-analise>
        </wa-tab-panel>
        <wa-tab-panel name="voto" class="overflow-hidden">
          <lexml-parecer-voto></lexml-parecer-voto>
        </wa-tab-panel>
        <wa-tab-panel name="dataAutoriaImpressao" class="overflow-hidden">
          <lexml-parecer-data-autria-impressao></lexml-parecer-data-autria-impressao>
        </wa-tab-panel>
        <wa-tab-panel name="avisos" class="overflow-hidden">
          <lexml-parecer-avisos></lexml-parecer-avisos>
        </wa-tab-panel>
      </wa-tab-group>
    `;
  }
}
