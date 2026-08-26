import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import type { AutoriaParecer } from '../../models/autoria-parecer.model.js';
import { OpcoesImpressao } from '../../models/opcoes-impressao.model.js';
import type { Parlamentar } from '../../models/parlamentar.model.js';
import '../autoria/parecer-autoria.component.js';
import type { LexmlParecerAutoriaComponent } from '../autoria/parecer-autoria.component.js';

type DataElement = HTMLElement & {
  getData(): string | null;
};

type OpcoesImpressaoElement = HTMLElement & {
  getOpcoesImpressao(): OpcoesImpressao;
};

@customElement('lexml-parecer-data-autoria-impressao')
export class LexmlParecerDataAutoriaImpressao extends LitElement {
  @query('lexml-ui-data') private _data!: DataElement;

  @query('lexml-ui-opcoes-impressao')
  private _opcoesImpressao!: OpcoesImpressaoElement;

  @query('lexml-parecer-autoria')
  private _parecerAutoria!: LexmlParecerAutoriaComponent;

  @property({ type: Array }) parlamentares: Parlamentar[] = [];

  @state() private _dataValor: string | null = new Date()
    .toISOString()
    .slice(0, 10);
  @state() private _opcoesValor: OpcoesImpressao = new OpcoesImpressao();

  public async setData(d?: string | null): Promise<void> {
    this._dataValor = d ?? null;
    await this.updateComplete;
    this._data?.dispatchEvent(new Event('input', { bubbles: true } as any));
  }

  public async setOpcoesImpressao(o?: OpcoesImpressao): Promise<void> {
    this._opcoesValor = o ?? new OpcoesImpressao();
    await this.updateComplete;
  }

  public async setAutoria(a?: AutoriaParecer): Promise<void> {
    this._autoria = {
      relator: a?.relator ? { ...a.relator } : undefined,
      presidente: a?.presidente ? { ...a.presidente } : undefined,
    };
    await this.updateComplete;
  }

  public async setDataAutoriaImpressao(
    data?: string | null,
    autoria?: AutoriaParecer,
    opcoes?: OpcoesImpressao,
  ): Promise<void> {
    await this.setData(data ?? null);
    await this.setAutoria(autoria);
    await this.setOpcoesImpressao(opcoes);
  }

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
      <style>
        :host {
          display: block;
          min-width: 0;
        }
        .main-data-autoria-impressao {
          padding-right: 10px;
          padding-left: 10px;
          min-width: 0;
        }
        .espaco {
          display: block;
          height: 12px;
        }
      </style>
      <div class="main-data-autoria-impressao">
        <lexml-ui-data .data=${this._dataValor ?? ''}></lexml-ui-data>
        <span class="espaco"></span>
        <lexml-parecer-autoria
          .parlamentares=${this.parlamentares}
          .autoria=${this._autoria}
          @onchange=${this._onAutoriaChange}
        >
        </lexml-parecer-autoria>
        <span class="espaco"></span>
        <lexml-ui-opcoes-impressao
          .opcoesImpressao=${this._opcoesValor}
        ></lexml-ui-opcoes-impressao>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lexml-parecer-data-autoria-impressao': LexmlParecerDataAutoriaImpressao;
  }
}
