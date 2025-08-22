import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Materia } from '../../models/Materia.js';
import { Destino, getAllDestinosValues } from '../../models/Destino.js';
import { Option } from '../../models/Option.js';

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

  public getMateria(): Materia {
    this.materia.ano = Number(this.anoInput.value) || this.materia.ano;
    this.materia.materia = this.materiaInput.value ?? '';
    this.materia.destino = this.destinoRadio.value as Destino;

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
          <sl-input
            id="anoInput"
            class="block"
            type="number"
            label="Ano"
            placeholder="Digite o ano"
            min="1900"
            max="2100"
            .value=${String(this.materia.ano)}
          ></sl-input>

          <sl-input
            id="materiaInput"
            class="block"
            type="text"
            label="Matéria"
            placeholder="Digite a matéria"
            .value=${this.materia.materia}
          ></sl-input>

          <sl-radio-group
            id="destinoRadio"
            class="span-2 block"
            label="Destino"
            .value=${this.materia.destino}
          >
            ${getAllDestinosValues().map(
              opt => html`<sl-radio value=${opt.value}>${opt.label}</sl-radio>`,
            )}
          </sl-radio-group>

          <sl-input
            id="comissaoValue"
            class="block"
            type="text"
            label="Comissão (value)"
            placeholder="Ex.: CDR"
            .value=${this.materia.comissao?.value ?? ''}
          ></sl-input>

          <sl-input
            id="comissaoDesc"
            class="block"
            type="text"
            label="Comissão (descrição)"
            placeholder="Ex.: CDR - COMISSÃO DE DESENVOLVIMENTO REGIONAL E TURISMO"
            .value=${this.materia.comissao?.description ?? ''}
          ></sl-input>

          <sl-textarea
            id="ementaInput"
            class="span-2 block"
            label="Ementa"
            placeholder="Digite a ementa"
            .value=${this.materia.ementa}
          ></sl-textarea>
        </div>
      </div>
    `;
  }
}
