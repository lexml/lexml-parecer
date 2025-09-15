import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { Comissao } from '@ui-commons';
import { quillSnowStyles } from '../../assets/css/quill.snow.css.js';
import { quillCoreStyles } from '../../assets/css/quill.core.css.js';
import { quillTableStyles } from '../../assets/css/quill.table.css.js';
import { Materia } from '../../models/materia.modelo.js';
import { Option } from '../../models/option.modelo.js';

type WithValueEl = HTMLElement & { value: string };

@customElement('lexml-parecer-materia')
export class LexmlParecerMateria extends LitElement {
  private materia = new Materia();

  @query('#anoInput') anoInput!: WithValueEl;

  @query('#materiaInput') materiaInput!: WithValueEl;

  @query('#destinoRadio') destinoRadio!: WithValueEl;

  @query('#comissaoValue') comissaoValueInput!: WithValueEl;

  @query('#comissaoDesc') comissaoDescInput!: WithValueEl;

  @query('#ementaInput') ementaInput!: WithValueEl & HTMLDivElement;

  @state() private quill?: any;

  private comissoesTeste: Comissao[] = [
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
    { siglaCasaLegislativa: 'SF', sigla: 'CEsp', nome: 'Comissão de Esporte' },
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

  public getMateria(): Materia {
    this.materia.ano = Number(this.anoInput.value) || this.materia.ano;
    this.materia.materia = this.materiaInput.value ?? '';

    const cValue = this.comissaoValueInput.value?.trim();
    const cDesc = this.comissaoDescInput.value?.trim();
    this.materia.comissao =
      cValue || cDesc ? new Option(cValue ?? '', cDesc ?? '') : undefined;

    this.materia.ementa = this.ementaInput.value ?? '';

    return this.materia;
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

      const initialText = this.materia.ementa ?? '';
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
            .value=${String(this.materia.ano)}
          ></wa-input>

          <wa-input
            id="materiaInput"
            class="block"
            type="text"
            label="Matéria"
            placeholder="Digite a matéria"
            .value=${this.materia.materia}
          ></wa-input>
        </fieldset>
        <lexml-ui-destino .comissoes=${this.comissoesTeste}></lexml-ui-destino>
        <div class="span-2 block">
          <label class="muted">Ementa</label>
          <div id="ementaInput"></div>
        </div>
      </div>
    `;
  }
}
