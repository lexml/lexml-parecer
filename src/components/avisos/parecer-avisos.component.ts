import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { TipoMensagem, Alerta } from '@ui-commons';

@customElement('lexml-parecer-avisos')
export class LexmlParecerAvisos extends LitElement {
  // ******************************************* Itens para o Teste do Alert
  @state() private _tipoIdx = 0;

  // Recebe o total via seletorHost (o lexml-ui-alertas seta isso)
  @state() totalAlertas = 0;

  // Demo local de alertas (substitui Redux neste teste)
  @state() private alertasDemo: Alerta[] = [
    {
      id: 'a1',
      tipo: TipoMensagem.INFO,
      mensagem: 'Bem-vindo! Este é um alerta informativo.',
      podeFechar: true,
    },
    {
      id: 'a2',
      tipo: TipoMensagem.WARNING,
      mensagem: 'Atenção: verifique os dados preenchidos.',
      podeFechar: true,
    },
  ];

  private gerarId(): string {
    // pega o MAIOR número já usado no id (ex.: a1, a2, a10) e soma +1
    const maxNum = this.alertasDemo.reduce((max, a) => {
      const m = /(\d+)$/.exec(a.id); // pega os dígitos no final
      const n = m ? parseInt(m[1], 10) : 0;
      return n > max ? n : max;
    }, 0);
    return `a${maxNum + 1}`;
  }

  // 2) ADICIONE um helper para garantir unicidade na lista atual:

  private readonly tiposCiclo: TipoMensagem[] = [
    TipoMensagem.INFO,
    TipoMensagem.WARNING,
    TipoMensagem.ERROR,
    TipoMensagem.CRITICAL,
    TipoMensagem.SUCCESS,
  ];

  private readonly labelTipo: Record<TipoMensagem, string> = {
    [TipoMensagem.INFO]: 'INFO',
    [TipoMensagem.WARNING]: 'WARNING',
    [TipoMensagem.ERROR]: 'ERROR',
    [TipoMensagem.CRITICAL]: 'CRITICAL',
    [TipoMensagem.SUCCESS]: 'SUCCESS',
  };

  private adicionarAlertaDemo = (): void => {
    const tipo = this.tiposCiclo[this._tipoIdx];
    this._tipoIdx = (this._tipoIdx + 1) % this.tiposCiclo.length;

    const agora = new Date().toLocaleTimeString();
    const novo: Alerta = {
      id: this.gerarId(),
      tipo,
      mensagem: `[${this.labelTipo[tipo]}] Alerta criado As disparidades são ainda maiores quando se avalia as diferentes regiões do Brasil: no Norte, a média de investimento anual é de R$ 66,52 por habitante e, no Nordeste, de R$ 87,21 — muito abaixo dos R$ 171,49 registrados para o Sudeste. Os dados são do Sistema Nacional de Informações em Saneamento Básico (Sinisa – 2023) Fonte: Agência Senado ${agora}.`,
      podeFechar: true,
    };

    this.alertasDemo = [novo, ...this.alertasDemo];
  };

  private removerAlertaDemo = (id: string): void => {
    this.alertasDemo = this.alertasDemo.filter(a => a.id !== id);
  };

  private limparAlertasDemo = (): void => {
    this.alertasDemo = [];
  };
  // ******************************************* Fim dos Itens para o Teste do Alert

  render(): TemplateResult {
    return html` <style>
        lexml-parecer-avisos {
          display: block;
        }
        .linha {
          display: flex;
          align-items: center;
          background-color: #fafafa;
          border: 6px solid #038d15;
          gap: 8px;
        }
        .caixa {
          padding: 12px 0;
        }
      </style>
      <br />
      <div class="linha">
        <h2 style="margin: 0">
          Item apenas para testes e validar funcionalidade
        </h2>
        <div id="contadorAvisos">
          <wa-badge attention="none">${this.totalAlertas}</wa-badge>
        </div>
        <button @click=${this.adicionarAlertaDemo}>Adicionar alerta</button>
        <button @click=${this.limparAlertasDemo}>Limpar alertas</button>
      </div>

      <div class="caixa">
        <lexml-ui-alertas
          .alertas=${this.alertasDemo}
          .removeAlert=${(id: string): void => this.removerAlertaDemo(id)}
          .clearAlerts=${(): void => this.limparAlertasDemo()}
          .seletorHost=${'lexml-ui-commons'}
          .seletorBadge=${'#contadorAvisos wa-badge'}
          @alertas:alterados=${(
            e: CustomEvent<{ total: number; aumentou: boolean }>,
          ): any => {
            this.totalAlertas = e.detail.total;
          }}
        ></lexml-ui-alertas>
      </div>`;
  }
}
