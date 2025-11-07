import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query, state, property } from 'lit/decorators.js';
import { Comissao, Destino, DestinoComponent, Option } from '@ui-commons';
import { ProposicaoReferenciada } from '../../models/diversos.modelo.js';
import { Materia } from '../../models/materia.modelo.js';

type WithValueEl = HTMLElement & { value: string };

const getAnoAtual = (): number => new Date().getFullYear();

@customElement('lexml-parecer-materia')
export class LexmlParecerMateria extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Array }) comissoes: Comissao[] = [];

  @property({ attribute: false })
  buscarMateriasFunction?: (termo: string) => Promise<ProposicaoReferenciada[]>;

  @state()
  private _opcoesMateria: Option[] = [];

  @state()
  private _resultadosBusca: ProposicaoReferenciada[] = [];

  @property({ type: Number })
  ano: number = getAnoAtual();

  @state()
  private _materiaSelecionada: ProposicaoReferenciada =
    new ProposicaoReferenciada();

  private _buscarMaterias = async (termo: string): Promise<Option[]> => {
    if (!this.buscarMateriasFunction) {
      console.warn("Nenhuma função 'buscarMateriasFunction' foi fornecida.");
      return [];
    }

    try {
      const resultados = await this.buscarMateriasFunction(termo);
      this._resultadosBusca = resultados;

      const opts = resultados.map(m => new Option(m.urn, m.identificacaoTexto));
      this._opcoesMateria = opts;
      return opts;
    } catch (e) {
      console.error('Erro ao buscar matérias:', e);
      this._opcoesMateria = [];
      return [];
    }
  };

  private _selecionarMateria = (opcaoSelecionada: Option) => {
    if (!opcaoSelecionada) {
      this._materiaSelecionada = new ProposicaoReferenciada();
    } else {
      const materiaCompleta = this._resultadosBusca.find(
        m => m.urn === opcaoSelecionada.value,
      );
      this._materiaSelecionada =
        materiaCompleta || new ProposicaoReferenciada();
    }
  };

  @query('#anoInput') anoInput!: WithValueEl;

  @query('#materiaInput') materiaInput!: WithValueEl;

  @query('#destinoRadio') destinoRadio!: WithValueEl;

  @query('#comissaoValue') comissaoValueInput!: WithValueEl;

  @query('#comissaoDesc') comissaoDescInput!: WithValueEl;

  @query('lexml-ui-editor-texto-rico')
  private _ementaEd?: {
    getTexto: () => string;
    setContent?: (html: string, notas?: any[]) => void;
    setTexto?: (html: string) => void; // se você adicionou esse atalho
    texto?: string;
  };

  @query('lexml-ui-destino')
  private _destino!: DestinoComponent;

  public getMateria(): Materia {
    const materiaFinal = new Materia();
    materiaFinal.ano = this.ano;
    materiaFinal.materia = this._materiaSelecionada;
    const ementaHtml = this._ementaEd?.getTexto?.() ?? '';
    materiaFinal.ementa = ementaHtml;
    materiaFinal.destino = this._destino.getDestino();
    return materiaFinal;
  }

  public async setMateria(materia: Materia, destino: Destino): Promise<void> {
    if (!materia) return;

    this.ano = Number(materia.ano ?? this.ano);
    this._materiaSelecionada = materia.materia ?? new ProposicaoReferenciada();

    await this.updateComplete;

    // --- Ementa ---
    if (this._ementaEd) {
      if (typeof (this._ementaEd as any).setTexto === 'function') {
        (this._ementaEd as any).setTexto(materia.ementa ?? '');
      } else if (typeof (this._ementaEd as any).setContent === 'function') {
        (this._ementaEd as any).setContent(materia.ementa ?? '', []);
      } else {
        (this._ementaEd as any).texto = materia.ementa ?? '';
      }
    }

    // --- Destino ---
    if (this._destino) {
      if (typeof (this._destino as any).setDestino === 'function') {
        (this._destino as any).setDestino(destino);
      } else if (typeof (this._destino as any).setDestino === 'undefined') {
        (this._destino as any).setDestino?.(destino);
      } else {
        (this._destino as any).destino = destino;
      }
    }

    this.requestUpdate();
  }

  // static styles = css`
  //   :host {
  //     display: block;
  //   }

  //   .card {
  //     background: #fff;
  //     border: 1px solid #e5e7eb;
  //     border-radius: 0.75rem;
  //     padding: 1rem;
  //   }

  //   .title {
  //     font-size: 1rem;
  //     font-weight: 600;
  //     margin: 0 0 0.75rem 0;
  //     color: #111827;
  //   }

  //   .grid {
  //     display: grid;
  //     grid-template-columns: 1fr;
  //     gap: 0.75rem;
  //   }

  //   @media (min-width: 700px) {
  //     .grid {
  //       grid-template-columns: repeat(2, minmax(0, 1fr));
  //     }
  //     .grid lexml-ui-destino {
  //       grid-column: 1 / -1;
  //     }
  //   }

  //   .span-2 {
  //     grid-column: 1 / -1;
  //   }

  //   .block {
  //     margin-top: 0.25rem;
  //   }

  //   wa-input::part(form-control-label),
  //   wa-textarea::part(form-control-label),
  //   wa-radio-group::part(form-control-label) {
  //     font-weight: 600;
  //     color: #374151;
  //   }

  //   wa-input,
  //   wa-textarea,
  //   wa-radio-group {
  //     width: 100%;
  //   }

  //   lexml-ui-destino lexml-destino {
  //     max-width: 100vw !important;
  //   }

  //   fieldset {
  //     font-size: 14px;
  //     font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  //     display: flex;
  //     flex-direction: column;
  //     gap: 0.75rem;
  //     background-color: var(--wa-color-gray-95);
  //     box-shadow: var(--wa-shadow-m);
  //     padding: 20px;
  //     border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
  //     border-radius: var(--wa-border-radius-s);
  //   }

  //   legend {
  //     background-color: var(--wa-color-gray-90);
  //     font-weight: bold;
  //     border-radius: 5px;
  //     border: 1px solid var(--wa-color-gray-85);
  //     padding: 2px 5px;
  //     box-shadow: var(--wa-shadow-s);
  //   }
  // `;

  render(): TemplateResult {
    return html`
      <style>
        lexml-parecer-materia {
          display: block;
        }

        .card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem;
        }

        .title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: #111827;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
        }

        @media (min-width: 700px) {
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .grid lexml-ui-destino {
            grid-column: 1 / -1;
          }
        }

        .span-2 {
          grid-column: 1 / -1;
        }

        .block {
          margin-top: 0.25rem;
        }

        lexml-ui-destino lexml-destino {
          max-width: 100vw !important;
        }

        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          padding: 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          width: 100%;
        }

        .legend-dados-materia {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
        }
      </style>
      <div class="wa-grid">
        <fieldset>
          <legend class="legend-dados-materia">Dados da Matéria</legend>
          <wa-input
            id="anoInput"
            class="block"
            type="number"
            label="Ano"
            placeholder="Digite o ano"
            min="1900"
            max="2100"
            .value=${`${this.ano}`}
            @input=${(e: Event) => {
              this.ano = Number((e.target as HTMLInputElement).value);
            }}
          ></wa-input>
          <lexml-autocomplete-universal
            class="block"
            label="Matéria"
            placeholder="ex: PL 1/1997"
            .mode=${'async'}
            .maxSuggestions=${12}
            .minChars=${1}
            .onSearch=${this._buscarMaterias}
            .onSelect=${(opcao: Option): void => this._selecionarMateria(opcao)}
            .value=${this._materiaSelecionada.identificacaoTexto}
          ></lexml-autocomplete-universal>
        </fieldset>
        <lexml-ui-destino .comissoes=${this.comissoes}></lexml-ui-destino>
      </div>
      <div>
        <label>Ementa</label>
        <lexml-ui-editor-texto-rico
          .toolbar=${'italic'}
          height="300"
        ></lexml-ui-editor-texto-rico>
      </div>
    `;
  }
}
