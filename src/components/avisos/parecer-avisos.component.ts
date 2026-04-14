import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { Alerta } from '@lexml/lexml-ui-commons';

@customElement('lexml-parecer-avisos')
export class LexmlParecerAvisos extends LitElement {
  @property({ type: Array }) alertas: Alerta[] = [];

  @state() totalAlertas = 0;

  private _notifyParentTotal() {
    this.dispatchEvent(
      new CustomEvent('parecer-total-alertas', {
        detail: { total: this.alertas.length },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected firstUpdated(): void {
    this.totalAlertas = this.alertas.length;
    this._notifyParentTotal();
  }

  protected updated(changed: Map<string, unknown>): void {
    if (changed.has('alertas')) {
      this.totalAlertas = this.alertas.length;
      this._notifyParentTotal();
    }
  }

  private removerAlerta = (id: string): void => {
    this.dispatchEvent(
      new CustomEvent('parecer-remover-alerta', {
        detail: { id },
        bubbles: true,
        composed: true,
      }),
    );
  };

  private limparAlertas = (): void => {
    this.dispatchEvent(
      new CustomEvent('parecer-limpar-alertas', {
        bubbles: true,
        composed: true,
      }),
    );
  };

  render(): TemplateResult {
    return html` <style>
        .main-avisos {
          padding: 10px 10px 10px 10px;
        }
      </style>

      <div class="main-avisos">
        <lexml-ui-alertas
          .alertas=${this.alertas}
          .removeAlert=${(id: string): void => this.removerAlerta(id)}
          .clearAlerts=${(): void => this.limparAlertas()}
          .seletorHost=${'lexml-ui-commons'}
          .seletorBadge=${'#contadorAvisos wa-badge'}
          @alertas:alterados=${(
            e: CustomEvent<{ total: number; aumentou: boolean }>,
          ): any => {
            this.totalAlertas = e.detail.total;
            this._notifyParentTotal();
          }}
        ></lexml-ui-alertas>
      </div>`;
  }
}
