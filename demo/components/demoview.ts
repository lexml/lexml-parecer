import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '../../src/index.js';
import { Parecer } from 'src/models/diversos.modelo.js';
import { LexmlEtaParecer } from '../../src/components/parecer/lexml-eta-parecer.component.js';
import { LexmlParecerConfig } from '../../src/config/lexml-parecer-config.js';

@customElement('demo-view')
export class DemoView extends LitElement {
  @query('lexml-eta-parecer')
  private _parecer?: LexmlEtaParecer;

  parecerConfig: LexmlParecerConfig;

  constructor() {
    super();
    this.parecerConfig = new LexmlParecerConfig();
    this.parecerConfig.urlComissoes = '/api/comissoes';
    this.parecerConfig.urlConsultaParlamentares = '/api/parlamentares';
    this.parecerConfig.urlAutocomplete = '/api/autocomplete-norma';
  }

  private getObjetoParecer = (): void => {
    const parecerEl = this._parecer;
    if (!parecerEl) {
      console.warn('lexml-eta-parecer não encontrado.');
      return;
    }
    const ObjetoParecer: Parecer = parecerEl.getParecer();
    console.log('--------------------- [PARECER] ---------------------');
    console.log(ObjetoParecer);
  };

  render(): TemplateResult {
    return html`
      <style>
        .lexml-eta-main-header {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          flex-wrap: wrap;
        }
        .lexml-eta-main-header span {
          vertical-align: middle;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .lexml-eta-btn--demo {
          text-align: center;
          color: white;
          border-radius: 8px;
          background: red;
          width: 4rem;
          height: 1.5rem;
        }
        .nome-proposicao {
          font-weight: bold;
          background-color: #ccc;
          /* color: black; */
          padding: 5px 10px;
          border-radius: 2px;
          margin-bottom: 2px;
        }
      </style>
      <div class="lexml-eta-main-header">
        <div class="lexml-eta-main-header--title">
          <span>ETA - Parecer</span>
          <input
            type="button"
            class="lexml-eta-btn--demo"
            title="Aplicação exemplo"
            value="Demo"
          />
        </div>
        <div class="lexml-eta-main-header--actions">
          <input
            type="button"
            value="gerar Objeto Parecer (Console)"
            @click=${this.getObjetoParecer}
          />
        </div>
      </div>
      <div class="nome-proposicao">TESTE</div>
      <lexml-eta-parecer
        .lexmlParecerConfig=${this.parecerConfig}
      ></lexml-eta-parecer>
    `;
  }
}
