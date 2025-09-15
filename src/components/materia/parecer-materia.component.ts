import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, query, state, property } from 'lit/decorators.js';
import { Comissao, Destino, DestinoComponent } from '@ui-commons';
import { ProposicaoReferenciada } from '../../models/diversos.modelo.js';

type WithValueEl = HTMLElement & { value: string };

@customElement('lexml-parecer-materia')
export class LexmlParecerMateria extends LitElement {
  @state() private materia: ProposicaoReferenciada =
    new ProposicaoReferenciada();

  @property({ type: Array }) comissoes: Comissao[] = [];

  @query('#anoInput') anoInput!: WithValueEl;

  @query('#materiaInput') materiaInput!: WithValueEl;

  @query('#ementaInput') ementaInput!: WithValueEl;

  @query('lexml-ui-destino')
  private _destino!: DestinoComponent;

  public getDestino(): Destino {
    return this._destino.getDestino();
  }

  public getMateria(): ProposicaoReferenciada {
    const ano = String(this.anoInput?.value ?? '').trim();
    const idTxt = String(this.materiaInput?.value ?? '');
    const ementa = String(this.ementaInput?.value ?? '');
    return {
      urn: this.materia.urn ?? '',
      sigla: this.materia.sigla ?? '',
      numero: this.materia.numero ?? '',
      ano: ano ?? '',
      ementa,
      identificacaoTexto: idTxt,
    };
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
            .value=${this.materia.ano || ''}
          ></wa-input>

          <wa-input
            id="materiaInput"
            class="block"
            type="text"
            label="Matéria"
            .value=${this.materia.identificacaoTexto || ''}
          ></wa-input>
          <div>
            <lexml-ui-destino .comissoes=${this.comissoes}></lexml-ui-destino>
          </div>
          <wa-textarea
            id="ementaInput"
            class="span-2 block"
            label="Ementa"
            placeholder="Digite a ementa"
            .value=${this.materia.ementa || ''}
          ></wa-textarea>
        </div>
      </div>
    `;
  }
}
