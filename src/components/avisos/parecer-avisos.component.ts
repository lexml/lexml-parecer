import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Alerta } from '@lexml/lexml-ui-commons';

@customElement('lexml-parecer-avisos')
export class LexmlParecerAvisos extends LitElement {
  @property({ type: Array }) alertas: Alerta[] = [];

  private _notifyParentTotal(total: number = this.alertas.length): void {
    this.dispatchEvent(
      new CustomEvent('parecer-total-alertas', {
        detail: { total },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected firstUpdated(): void {
    this._notifyParentTotal();
  }

  protected updated(changed: Map<string, unknown>): void {
    if (changed.has('alertas')) {
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
            this._notifyParentTotal(e.detail.total);
          }}
        ></lexml-ui-alertas>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lexml-parecer-avisos': LexmlParecerAvisos;
  }
}
