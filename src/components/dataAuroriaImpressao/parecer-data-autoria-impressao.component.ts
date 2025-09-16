import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { AutoriaParecer, Parlamentar } from 'src/models/diversos.modelo.js';

@customElement('lexml-parecer-data-autria-impressao')
export class LexmlParecerDataAutoriaImpressao extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @state() private _parlamentares: Parlamentar[] = [
    {
      identificacao: 'SF001',
      nome: 'João Pereira',
      sexo: 'M',
      siglaPartido: 'PSD',
      siglaUF: 'MG',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },
    {
      identificacao: 'SF002',
      nome: 'Maria Albuquerque',
      sexo: 'F',
      siglaPartido: 'MDB',
      siglaUF: 'BA',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },
    {
      identificacao: 'SF003',
      nome: 'Carlos Nogueira',
      sexo: 'M',
      siglaPartido: 'PL',
      siglaUF: 'SP',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },
    {
      identificacao: 'SF004',
      nome: 'Ana Bezerra',
      sexo: 'F',
      siglaPartido: 'PDT',
      siglaUF: 'CE',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },
    {
      identificacao: 'SF005',
      nome: 'Roberto Lima',
      sexo: 'M',
      siglaPartido: 'PSDB',
      siglaUF: 'RJ',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },
    {
      identificacao: 'SF006',
      nome: 'Eliane Castro',
      sexo: 'F',
      siglaPartido: 'PSD',
      siglaUF: 'MA',
      siglaCasaLegislativa: 'SF',
      cargo: '',
    },

    {
      identificacao: 'CD001',
      nome: 'Bruno Rocha',
      sexo: 'M',
      siglaPartido: 'UNIÃO',
      siglaUF: 'PE',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
    {
      identificacao: 'CD002',
      nome: 'Fernanda Ribeiro',
      sexo: 'F',
      siglaPartido: 'PT',
      siglaUF: 'RS',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
    {
      identificacao: 'CD003',
      nome: 'Rafael Martins',
      sexo: 'M',
      siglaPartido: 'PSD',
      siglaUF: 'PR',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
    {
      identificacao: 'CD004',
      nome: 'Camila Duarte',
      sexo: 'F',
      siglaPartido: 'PSOL',
      siglaUF: 'RJ',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
    {
      identificacao: 'CD005',
      nome: 'Gustavo Azevedo',
      sexo: 'M',
      siglaPartido: 'NOVO',
      siglaUF: 'MG',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
    {
      identificacao: 'CD006',
      nome: 'Patrícia Gomes',
      sexo: 'F',
      siglaPartido: 'PODE',
      siglaUF: 'GO',
      siglaCasaLegislativa: 'CD',
      cargo: '',
    },
  ];

  @state() private _autoria: AutoriaParecer = {
    relator: undefined,
    presidente: undefined,
  };

  private _onAutoriaChange = (e: CustomEvent) => {
    const comp = e.currentTarget as any;
    const atualizado: AutoriaParecer = comp.getAutoriaAtualizada();
    this._autoria = atualizado;
  };

  render(): TemplateResult {
    return html`
      <div>
        <lexml-ui-data></lexml-ui-data>
        <br />
        <lexml-parecer-autoria
          .parlamentares=${this._parlamentares}
          .autoria=${this._autoria}
          @onchange=${this._onAutoriaChange}
        >
        </lexml-parecer-autoria>
        <br />
        <lexml-ui-opcoes-impressao></lexml-ui-opcoes-impressao>
      </div>
    `;
  }
}
