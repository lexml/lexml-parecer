import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Comissao } from '@ui-commons';
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

  @query('#ementaInput') ementaInput!: WithValueEl;

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
    }

    .span-2 {
      grid-column: 1 / -1;
    }

    .block {
      margin-top: 0.25rem;
    }

    sl-input::part(form-control-label),
    sl-textarea::part(form-control-label),
    sl-radio-group::part(form-control-label) {
      font-weight: 600;
      color: #374151;
    }

    sl-input,
    sl-textarea,
    sl-radio-group {
      width: 100%;
    }
  `;

  render(): TemplateResult {
    return html`
      <div class="card">
        <div class="title">Dados da Matéria</div>

        <div class="grid">
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
          <div>
            <lexml-ui-destino
              .comissoes=${this.comissoesTeste}
            ></lexml-ui-destino>
          </div>
          <wa-textarea
            id="ementaInput"
            class="span-2 block"
            label="Ementa"
            placeholder="Digite a ementa"
            .value=${this.materia.ementa}
          ></wa-textarea>
        </div>
      </div>
    `;
  }
}
