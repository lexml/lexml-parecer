import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, query, state, property } from 'lit/decorators.js';
import { Comissao, DestinoComponent, REGEX_ACCENTS } from '@ui-commons';
import { ProposicaoReferenciada } from '../../models/diversos.modelo.js';
import { quillSnowStyles } from '../../assets/css/quill.snow.css.js';
import { quillCoreStyles } from '../../assets/css/quill.core.css.js';
import { quillTableStyles } from '../../assets/css/quill.table.css.js';
import { Materia } from '../../models/materia.modelo.js';

type WithValueEl = HTMLElement & { value: string };

const getAnoAtual = (): number => new Date().getFullYear();

@customElement('lexml-parecer-materia')
export class LexmlParecerMateria extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Array }) comissoes: Comissao[] = [];

  private _materiasDisponiveis: ProposicaoReferenciada[] = [];

  @property({ type: Number })
  ano: number = getAnoAtual();

  @state()
  private _materiasIndetificacaoTexto: string[] = [];

  @state()
  private _materiaSelecionada: ProposicaoReferenciada =
    new ProposicaoReferenciada();

  @property({ type: Array })
  set materias(value: ProposicaoReferenciada[]) {
    const old = this._materiasDisponiveis;
    this._materiasDisponiveis = value ?? [];
    this._materiasIndetificacaoTexto = this._materiasDisponiveis.map(
      m => m.identificacaoTexto,
    );
    this.requestUpdate('materias', old);
  }

  get materias(): ProposicaoReferenciada[] {
    return this._materiasDisponiveis;
  }

  @query('#anoInput') anoInput!: WithValueEl;

  @query('#materiaInput') materiaInput!: WithValueEl;

  @query('#destinoRadio') destinoRadio!: WithValueEl;

  @query('#comissaoValue') comissaoValueInput!: WithValueEl;

  @query('#comissaoDesc') comissaoDescInput!: WithValueEl;

  @query('#ementaInput') ementaInput!: WithValueEl & HTMLDivElement;

  @state() private quill?: any;

  @query('lexml-ui-destino')
  private _destino!: DestinoComponent;

  public getMateria(): Materia {
    const materiaFinal = new Materia();
    materiaFinal.ano = this.ano;
    materiaFinal.materia = this._materiaSelecionada;
    materiaFinal.ementa = (this.ementaInput as any)?.value ?? '';
    materiaFinal.destino = this._destino.getDestino();

    return materiaFinal;
  }

  private _onAutocomplete(e: CustomEvent<{ value: string }>) {
    const selecionado = this._materiasDisponiveis.find(
      m => m.identificacaoTexto === e.detail.value,
    );
    this._materiaSelecionada = selecionado
      ? { ...selecionado }
      : new ProposicaoReferenciada();
    this.requestUpdate();
  }

  private _validarMateria(ev: Event) {
    const isBlur = ev.type === 'focusout';
    const inputEl = ev.target as HTMLElement & { value?: string };
    const textoAtual = inputEl.value ?? '';

    if (!textoAtual) {
      this._materiaSelecionada = new ProposicaoReferenciada();
      if (isBlur) inputEl.value = '';
      this.requestUpdate();
      return;
    }

    const regex = new RegExp(
      `^${textoAtual.normalize('NFD').replace(REGEX_ACCENTS, '')}$`,
      'i',
    );

    const materiaEncontrada = this._materiasDisponiveis.find(p =>
      p.identificacaoTexto
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .match(regex),
    );

    if (materiaEncontrada?.urn) {
      this._materiaSelecionada = { ...materiaEncontrada };
    } else if (isBlur) {
      this._materiaSelecionada = new ProposicaoReferenciada();
      inputEl.value = '';
    }
    this.requestUpdate();
  }

  async firstUpdated(): Promise<void> {
    if (!this.ementaInput) return;

    try {
      const mod: any = await import('quill/dist/quill.js');
      const QuillCtor =
        mod?.default?.Quill ??
        mod?.Quill ??
        mod?.default ??
        (window as any).Quill;

      if (typeof QuillCtor !== 'function') {
        throw new Error('Construtor do Quill não encontrado.');
      }

      this.quill = new QuillCtor(this.ementaInput, {
        theme: 'snow',
        modules: { toolbar: [['italic']] },
        placeholder: 'Digite a ementa',
      });

      const initialText = this.ementaInput ?? '';
      try {
        this.quill.setText(initialText);
      } catch (_) {
        // ignore
      }
      (this.ementaInput as any).value = initialText;

      this.quill.on('text-change', () => {
        if (!this.quill) return;
        const text: string = this.quill.getText().replace(/\n$/, '');
        (this.ementaInput as any).value = text;
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Falha ao inicializar Quill para ementa:', err);
    }
  }

  disconnectedCallback(): void {
    this.quill = undefined;
    super.disconnectedCallback?.();
  }

  static styles = css`
    :host {
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

    wa-input::part(form-control-label),
    wa-textarea::part(form-control-label),
    wa-radio-group::part(form-control-label) {
      font-weight: 600;
      color: #374151;
    }

    wa-input,
    wa-textarea,
    wa-radio-group {
      width: 100%;
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
      max-width: 655px;
      margin: 1em 0 2em 0;
    }

    legend {
      background-color: var(--wa-color-gray-90);
      font-weight: bold;
      border-radius: 5px;
      border: 1px solid var(--wa-color-gray-85);
      padding: 2px 5px;
      box-shadow: var(--wa-shadow-s);
    }
  `;

  render(): TemplateResult {
    return html`
      <style>
        ${quillSnowStyles}${quillCoreStyles}${quillTableStyles}
          #ementaInput
          .ql-container.ql-snow {
          height: auto;
        }
        #ementaInput .ql-container .ql-editor {
          min-height: 160px;
          height: auto;
          max-height: none;
          overflow-y: visible;
        }
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

        wa-input::part(form-control-label),
        wa-textarea::part(form-control-label),
        wa-radio-group::part(form-control-label) {
          font-weight: 600;
          color: #374151;
        }

        wa-input,
        wa-textarea,
        wa-radio-group {
          width: 100%;
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
          max-width: 655px;
          margin: 1em 0 2em 0;
        }

        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
        }
      </style>
      <div class="card">
        <fieldset>
          <legend>Dados da Matéria</legend>
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
          <lexml-ui-autocomplete
            class="block"
            label="Matéria"
            .items=${this._materiasIndetificacaoTexto}
            .value=${this._materiaSelecionada.identificacaoTexto || ''}
            @autocomplete=${this._onAutocomplete}
            @input=${this._validarMateria}
            @focusout=${this._validarMateria}
          ></lexml-ui-autocomplete>
        </fieldset>
        <div>
          <lexml-ui-destino .comissoes=${this.comissoes}></lexml-ui-destino>
        </div>
        <div class="span-2 block">
          <label class="muted">Ementa</label>
          <div id="ementaInput"></div>
        </div>
      </div>
    `;
  }
}
