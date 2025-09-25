import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '../../src/index.js';
import { Parecer, ProposicaoReferenciada } from 'src/models/diversos.modelo.js';
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
    this.parecerConfig.comissoes = [
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CCDD',
        nome: 'Comissão de Comunicação e Direito Digital',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CSP',
        nome: 'Comissão de Segurança Pública',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CDD',
        nome: 'Comissão de Defesa da Democracia',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CEsp',
        nome: 'Comissão de Esporte',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CTFC',
        nome: 'Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CRA',
        nome: 'Comissão de Agricultura e Reforma Agrária',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CDR',
        nome: 'Comissão de Desenvolvimento Regional e Turismo',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CCT',
        nome: 'Comissão de Ciência, Tecnologia, Inovação e Informática',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CMA',
        nome: 'Comissão de Meio Ambiente',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CI',
        nome: 'Comissão de Serviços de Infraestrutura',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CRE',
        nome: 'Comissão de Relações Exteriores e Defesa Nacional',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CE',
        nome: 'Comissão de Educação e Cultura',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CAS',
        nome: 'Comissão de Assuntos Sociais',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CCJ',
        nome: 'Comissão de Constituição, Justiça e Cidadania',
      },
      {
        siglaCasaLegislativa: 'SF',
        sigla: 'CAE',
        nome: 'Comissão de Assuntos Econômicos',
      },
    ];
    this.parecerConfig.parlamentares = [
      {
        identificacao: 'SF001',
        nome: 'Rodrigo Pacheco',
        sexo: 'M',
        siglaPartido: 'PSD',
        siglaUF: 'MG',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF002',
        nome: 'Davi Alcolumbre',
        sexo: 'M',
        siglaPartido: 'UNIÃO',
        siglaUF: 'AP',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF003',
        nome: 'Jaques Wagner',
        sexo: 'M',
        siglaPartido: 'PT',
        siglaUF: 'BA',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF004',
        nome: 'Eliziane Gama',
        sexo: 'F',
        siglaPartido: 'PSD',
        siglaUF: 'MA',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senadora',
      },
      {
        identificacao: 'SF005',
        nome: 'Sérgio Moro',
        sexo: 'M',
        siglaPartido: 'UNIÃO',
        siglaUF: 'PR',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF006',
        nome: 'Eduardo Braga',
        sexo: 'M',
        siglaPartido: 'MDB',
        siglaUF: 'AM',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF007',
        nome: 'Tasso Jereissati',
        sexo: 'M',
        siglaPartido: 'PSDB',
        siglaUF: 'CE',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF008',
        nome: 'Omar Aziz',
        sexo: 'M',
        siglaPartido: 'PSD',
        siglaUF: 'AM',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF009',
        nome: 'Simone Tebet',
        sexo: 'F',
        siglaPartido: 'MDB',
        siglaUF: 'MS',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senadora',
      },
      {
        identificacao: 'SF010',
        nome: 'Randolfe Rodrigues',
        sexo: 'M',
        siglaPartido: 'REDE',
        siglaUF: 'AP',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },

      {
        identificacao: 'CD001',
        nome: 'Arthur Lira',
        sexo: 'M',
        siglaPartido: 'PP',
        siglaUF: 'AL',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
      {
        identificacao: 'CD002',
        nome: 'Gleisi Hoffmann',
        sexo: 'F',
        siglaPartido: 'PT',
        siglaUF: 'PR',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },
      {
        identificacao: 'CD003',
        nome: 'Kim Kataguiri',
        sexo: 'M',
        siglaPartido: 'UNIÃO',
        siglaUF: 'SP',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
      {
        identificacao: 'CD004',
        nome: 'Tabata Amaral',
        sexo: 'F',
        siglaPartido: 'PSB',
        siglaUF: 'SP',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },
      {
        identificacao: 'CD005',
        nome: 'Marina Silva',
        sexo: 'F',
        siglaPartido: 'REDE',
        siglaUF: 'AC',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },
      {
        identificacao: 'CD006',
        nome: 'Baleia Rossi',
        sexo: 'M',
        siglaPartido: 'MDB',
        siglaUF: 'SP',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
      {
        identificacao: 'CD007',
        nome: 'Marcelo Freixo',
        sexo: 'M',
        siglaPartido: 'PSB',
        siglaUF: 'RJ',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
      {
        identificacao: 'CD008',
        nome: 'Erika Kokay',
        sexo: 'F',
        siglaPartido: 'PT',
        siglaUF: 'DF',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },
      {
        identificacao: 'CD009',
        nome: 'Nikolas Ferreira',
        sexo: 'M',
        siglaPartido: 'PL',
        siglaUF: 'MG',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
      {
        identificacao: 'CD010',
        nome: 'Sâmia Bomfim',
        sexo: 'F',
        siglaPartido: 'PSOL',
        siglaUF: 'SP',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },

      {
        identificacao: 'SF011',
        nome: 'Humberto Costa',
        sexo: 'M',
        siglaPartido: 'PT',
        siglaUF: 'PE',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senador',
      },
      {
        identificacao: 'SF012',
        nome: 'Ana Amélia',
        sexo: 'F',
        siglaPartido: 'PP',
        siglaUF: 'RS',
        siglaCasaLegislativa: 'SF',
        cargo: 'Senadora',
      },
      {
        identificacao: 'CD011',
        nome: 'Lídice da Mata',
        sexo: 'F',
        siglaPartido: 'PSB',
        siglaUF: 'BA',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputada',
      },
      {
        identificacao: 'CD012',
        nome: 'Orlando Silva',
        sexo: 'M',
        siglaPartido: 'PCdoB',
        siglaUF: 'SP',
        siglaCasaLegislativa: 'CD',
        cargo: 'Deputado',
      },
    ];
    this.parecerConfig.buscarMateriasFunction = this.buscarMateriasApi;
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

  private buscarMateriasApi = async (
    termo: string,
  ): Promise<ProposicaoReferenciada[]> => {
    try {
      const response = await fetch(`/api/materias?q=${termo}`);
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
      const resultados: ProposicaoReferenciada[] = await response.json();
      return resultados;
    } catch (error) {
      console.error('Falha ao buscar matérias na API:', error);
      return [];
    }
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
