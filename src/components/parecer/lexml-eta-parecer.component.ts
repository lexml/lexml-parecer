import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import { Comissao } from '@ui-commons';
import {
  AutoriaParecer,
  OpcoesImpressao,
  Parecer,
  Parlamentar,
  ProposicaoReferenciada,
} from '../../models/diversos.modelo.js';
import { LexmlParecerMateria } from '../materia/parecer-materia.component.js';
import { LexmlParecerDataAutoriaImpressao } from '../dataAuroriaImpressao/parecer-data-autoria-impressao.component.js';
import { LexmlParecerVoto } from '../voto/parecer-voto.component.js';
import { Voto } from '../../models/voto.modelo.js';
import { LexmlParecerConfig } from '../../config/lexml-parecer-config.js';
import { Materia } from '../../models/materia.modelo.js';

@customElement('lexml-eta-parecer')
export class LexmlEtaParecer extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Number }) totalAlertas = 0;

  @property({ type: Object }) lexmlParecerConfig?: Partial<LexmlParecerConfig>;

  @state() private _parlamentares: Parlamentar[] = [];

  @state() private _comissoes: Comissao[] = [];

  @state() private disableAnalise: boolean = false;

  @property({ attribute: false })
  buscarMateriasFunction?: (termo: string) => Promise<ProposicaoReferenciada[]>;

  @state() private parecer: Parecer = new Parecer();

  @query('wa-tab-panel[name="materia"] lexml-parecer-materia')
  private _materia?: LexmlParecerMateria;

  @query(
    'wa-tab-panel[name="dataAutoriaImpressao"] lexml-parecer-data-autoria-impressao',
  )
  private _dataAutiraImpressao?: LexmlParecerDataAutoriaImpressao;

  @query('wa-tab-panel[name="relatorio"] lexml-parecer-relatorio')
  private _relatorio?: { getHtml: () => string };

  @query('wa-tab-panel[name="analise"] lexml-parecer-analise')
  private _analise?: { getHtml: () => string };

  @query('wa-tab-panel[name="voto"] lexml-parecer-voto')
  private _voto?: LexmlParecerVoto;

  public getParecer(): Parecer {
    const materiaEl = this._materia;
    const dataAutiraImpressaoEl = this._dataAutiraImpressao;
    const votoEl = this._voto;
    const relatorioHtml = this._relatorio?.getHtml() ?? '';
    const analiseHtml = this._analise?.getHtml() ?? '';

    if (!materiaEl) {
      console.warn('lexml-parecer-materia não encontrado.');
      return new Parecer();
    }
    if (!dataAutiraImpressaoEl) {
      console.warn('lexml-parecer-data-autoria-impressao não encontrado.');
      return new Parecer();
    }
    if (!votoEl) {
      console.warn('lexml-parecer-voto não encontrado.');
      return new Parecer();
    }

    const materia: Materia = materiaEl.getMateria();
    const opcoesImpressao: OpcoesImpressao =
      dataAutiraImpressaoEl.getOpcoesImpressao();
    const data: string | null = dataAutiraImpressaoEl.getData();
    const autoriaParecer: AutoriaParecer =
      dataAutiraImpressaoEl.getAutoriaParecer();
    const voto: Voto = votoEl.getVoto();

    console.log('---DESTINO---');
    console.log(materia.destino);
    this.parecer = {
      ...this.parecer,
      dataUltimaModificacao: new Date().toISOString(),
      materia: { ...materia.materia },
      ano: materia.ano,
      ementa: materia.ementa,
      opcoesImpressao: { ...opcoesImpressao },
      data,
      autoria: { ...autoriaParecer },
      relatorio: relatorioHtml,
      analise: analiseHtml,
      voto,
    };
    return this.parecer;
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('lexmlParecerConfig') && this.lexmlParecerConfig) {
      this._parlamentares = this.lexmlParecerConfig.parlamentares ?? [];
      this._comissoes = this.lexmlParecerConfig.comissoes ?? [];
      this.buscarMateriasFunction =
        this.lexmlParecerConfig.buscarMateriasFunction;
      this.disableAnalise = this.lexmlParecerConfig.disableAnalise ?? true;
    }
  }

  render(): TemplateResult {
    return html`
      <style>
        lexml-eta-parecer {
          display: block;
          color: var(--lexml-eta-parecer-text-color, #000);
        }
        .badge-pulse {
          margin-left: 7px;
          height: 16px;
          margin-top: -4px;
        }
        .badge-alertas {
          height: 20px;
          width: 18px;
          display: flex;
        }
      </style>
      <wa-tab-group>
        <wa-tab slot="nav" panel="voto">Voto</wa-tab>
        <wa-tab slot="nav" panel="materia">Matéria</wa-tab>
        <wa-tab slot="nav" panel="relatorio">Relatório</wa-tab>
        ${!this.disableAnalise
          ? html`<wa-tab slot="nav" panel="analise">Análise</wa-tab>`
          : html``}
        <wa-tab slot="nav" panel="dataAutoriaImpressao"
          >Data, Autoria e Impressão</wa-tab
        >
        <wa-tab slot="nav" panel="avisos">
          Avisos
          <div class="badge-pulse" id="contadorAvisos">
            ${this.totalAlertas > 0
              ? html`
                  <wa-badge
                    class="badge-alertas"
                    variant="danger"
                    attention="pulse"
                    pill
                  >
                    ${this.totalAlertas}
                  </wa-badge>
                `
              : ''}
          </div>
        </wa-tab>

        <wa-tab-panel name="materia" class="overflow-hidden">
          <lexml-parecer-materia
            .comissoes=${this._comissoes}
            .buscarMateriasFunction=${this.buscarMateriasFunction}
          ></lexml-parecer-materia>
        </wa-tab-panel>
        <wa-tab-panel name="relatorio" class="overflow-hidden">
          <lexml-parecer-relatorio></lexml-parecer-relatorio>
        </wa-tab-panel>
        ${!this.disableAnalise
          ? html`
              <wa-tab-panel name="analise" class="overflow-hidden">
                <lexml-parecer-analise></lexml-parecer-analise>
              </wa-tab-panel>
            `
          : html``}
        <wa-tab-panel name="voto" class="overflow-hidden">
          <lexml-parecer-voto></lexml-parecer-voto>
        </wa-tab-panel>
        <wa-tab-panel name="dataAutoriaImpressao" class="overflow-hidden">
          <lexml-parecer-data-autoria-impressao
            .parlamentares=${this._parlamentares}
          ></lexml-parecer-data-autoria-impressao>
        </wa-tab-panel>
        <wa-tab-panel name="avisos" class="overflow-hidden">
          <lexml-parecer-avisos
            @parecer-total-alertas=${(e: CustomEvent<{ total: number }>) => {
              this.totalAlertas = e.detail.total;
            }}
          ></lexml-parecer-avisos>
        </wa-tab-panel>
      </wa-tab-group>
    `;
  }
}
