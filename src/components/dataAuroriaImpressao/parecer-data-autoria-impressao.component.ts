import { Data, OpcoesImpressaoComponent } from '@ui-commons';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import {
  AutoriaParecer,
  OpcoesImpressao,
  Parlamentar,
} from 'src/models/diversos.modelo.js';
import { LexmlParecerAutoriaComponent } from '../autoria/parecer-autoria.component.js';

@customElement('lexml-parecer-data-autria-impressao')
export class LexmlParecerDataAutoriaImpressao extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @query('lexml-ui-data') private _data!: Data;

  @query('lexml-ui-opcoes-impressao')
  private _opcoesImpressao!: OpcoesImpressaoComponent;

  @query('lexml-parecer-autoria')
  private _parecerAutoria!: LexmlParecerAutoriaComponent;

  @property({ type: Array }) parlamentares: Parlamentar[] = [];

  public getData(): string | null {
    return this._data.getData();
  }

  public getOpcoesImpressao(): OpcoesImpressao {
    return this._opcoesImpressao.getOpcoesImpressao();
  }

  public getAutoriaParecer(): AutoriaParecer {
    return this._parecerAutoria.getAutoriaAtualizada();
  }

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
          .parlamentares=${this.parlamentares}
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
