import { html, LitElement, TemplateResult } from 'lit';
import { customElement, state, query, property } from 'lit/decorators.js';
import {
  Revisao,
  Usuario,
  alertarInfo,
  TipoMensagem,
  Alerta,
} from '@ui-commons';
import {
  AutoriaParecer,
  NotaRodape,
  OpcoesImpressao,
  Parecer,
  Parlamentar,
} from '../../models/diversos.model.js';
import { LexmlEtaParecerParametrosEdicao } from '../../models/lexml-eta-parecer-parametro-edicao.model.js';
import { LexmlParecerDataAutoriaImpressao } from '../dataAuroriaImpressao/parecer-data-autoria-impressao.component.js';
import { LexmlParecerVoto } from '../voto/parecer-voto.component.js';
import {
  LexmlParecerConfig,
  VisualizarAnexoCallback,
} from '../../config/lexml-parecer-config.js';
import { waResetString, waThemeString } from '../../assets/css/wa-bundled.js';

@customElement('lexml-eta-parecer')
export class LexmlEtaParecer extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @state() private urlAnexo: string = '';

  @state() private _parlamentares: Parlamentar[] = [];

  @state() private onVisualizarAnexo?: VisualizarAnexoCallback;

  @property({ type: Number }) totalAlertas = 0;

  @property({ type: Object }) lexmlParecerConfig?: Partial<LexmlParecerConfig>;

  @state() private parecer: Parecer = new Parecer();

  @state() private _alertas: Alerta[] = [];

  @state() private _pendenciasPreenchimento: string[] = [];

  @state() private _abaAtiva: string = 'relatorio';

  @state() private _alturaEditor = 590;

  @query('wa-tab-group')
  private _tabGroup?: any;

  @query(
    'wa-tab-panel[name="dataAutoriaImpressao"] lexml-parecer-data-autoria-impressao',
  )
  private _dataAutoriaImpressao?: LexmlParecerDataAutoriaImpressao;

  @query('wa-tab-panel[name="ementa"] lexml-parecer-ementa')
  private _ementa?: { getTexto: () => string };

  @query('wa-tab-panel[name="relatorio"] lexml-parecer-relatorio')
  private _relatorio?: { getTexto: () => string };

  @query('wa-tab-panel[name="analise"] lexml-parecer-analise')
  private _analise?: { getTexto: () => string };

  @query('wa-tab-panel[name="voto"] lexml-parecer-voto')
  private _voto?: LexmlParecerVoto;

  private _resizeObserver?: ResizeObserver;

  private readonly _alturaMinimaEditor = 300;

  private _onTabShow = () => this._agendarAjusteAltura();

  private _pesquisarAlturaParentElement(elemento: HTMLElement | null): number {
    if (!elemento) return 0;

    if (elemento.clientHeight >= this._alturaMinimaEditor) {
      return elemento.clientHeight;
    }

    return this._pesquisarAlturaParentElement(elemento.parentElement);
  }

  private _obterAlturaTabs(): number {
    const nav = this._tabGroup?.shadowRoot?.querySelector(
      '.tab-group__nav-container',
    ) as HTMLElement | null;
    return nav?.clientHeight ?? 0;
  }

  private _ajustarAltura = (): void => {
    const alturaBaseParent = this._pesquisarAlturaParentElement(
      this.parentElement as HTMLElement | null,
    );
    const alturaBaseViewport =
      window.innerHeight - this.getBoundingClientRect().top - 12;
    const alturaBase = Math.min(
      alturaBaseParent || Number.POSITIVE_INFINITY,
      alturaBaseViewport,
    );
    const alturaTabs = this._obterAlturaTabs();

    if (!alturaBase || !alturaTabs || !Number.isFinite(alturaBase)) return;

    const novaAltura = Math.max(
      this._alturaMinimaEditor,
      alturaBase - alturaTabs - 12,
    );

    if (novaAltura !== this._alturaEditor) {
      this._alturaEditor = novaAltura;
    }
  };

  private _agendarAjusteAltura(): void {
    requestAnimationFrame(() => this._ajustarAltura());
  }

  private _aplicarTitulosSecoes(): void {
    this.parecer.tituloSecao2 = this.isCamara ? 'Voto' : 'Análise';
    this.parecer.tituloSecao3 = this.isCamara ? 'Conclusão do Voto' : 'Voto';
  }
  private _isHtmlVazio(html?: string | null): boolean {
    if (!html) return true;

    const cleaned = html
      .replace(/<p[^>]*><br\s*\/?><\/p>/gi, ' ')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/&nbsp;/gi, ' ')
      .replace(/<\/?[^>]+(>|$)/g, ' ')
      .trim();

    return cleaned.length === 0;
  }

  private _recalcularAlertas = (): void => {
    const alertas: Alerta[] = [];

    // --- EMENTA (só quando NÃO for Câmara) ---
    if (!this.isCamara) {
      const ementaHtml = this._ementa?.getTexto?.() ?? '';

      if (this._isHtmlVazio(ementaHtml)) {
        alertas.push({
          id: 'ementa-nao-preenchida',
          tipo: TipoMensagem.ERROR,
          mensagem: 'Texto da ementa não preenchido.',
          podeFechar: false,
        });
      }
    }

    // --- RELATÓRIO (sempre) ---
    const relatorioHtml = this._relatorio?.getTexto?.() ?? '';
    if (this._isHtmlVazio(relatorioHtml)) {
      alertas.push({
        id: 'relatorio-nao-preenchido',
        tipo: TipoMensagem.ERROR,
        mensagem: 'Texto do relatório não preenchido.',
        podeFechar: false,
      });
    }

    // --- ANÁLISE / VOTO (aba "analise") ---
    const analiseHtml = this._analise?.getTexto?.() ?? '';
    if (this._isHtmlVazio(analiseHtml)) {
      alertas.push({
        id: 'analise-ou-voto-nao-preenchido',
        tipo: TipoMensagem.ERROR,
        mensagem: this.isCamara
          ? 'Texto do voto não preenchido.'
          : 'Texto da análise não preenchido.',
        podeFechar: false,
      });
    }

    // --- VOTO / CONCLUSÃO DO VOTO (aba "voto") ---
    const votoTexto = (this._voto as any)?.getTextoVoto?.() ?? '';

    const votoVazio = this._isHtmlVazio(votoTexto);

    if (votoVazio) {
      alertas.push({
        id: 'voto-nao-preenchido',
        tipo: TipoMensagem.ERROR,
        mensagem: this.isCamara
          ? 'Conclusão do voto não preenchida.'
          : 'Voto não preenchido.',
        podeFechar: false,
      });
    }

    // --- RELATOR / PRESIDENTE (AutoriaParecer) ---
    let autoriaParecer: AutoriaParecer | undefined;

    try {
      const dai: any = this._dataAutoriaImpressao;
      if (dai && typeof dai.getAutoriaParecer === 'function') {
        // Quando o componente de Data/Autoria já estiver pronto
        autoriaParecer = dai.getAutoriaParecer();
      } else {
        // Fallback: usa o objeto Parecer atual
        autoriaParecer = this.parecer?.autoria;
      }
    } catch (e) {
      // Qualquer erro, ainda assim não quebra os outros alertas
      autoriaParecer = this.parecer?.autoria;
    }

    if (!autoriaParecer?.relator) {
      alertas.push({
        id: 'relator-nao-informado',
        tipo: TipoMensagem.ERROR,
        mensagem: 'Relator não informado.',
        podeFechar: false,
      });
    }

    if (!autoriaParecer?.presidente && !this.isCamara) {
      alertas.push({
        id: 'presidente-nao-informado',
        tipo: TipoMensagem.ERROR,
        mensagem: 'Presidente não informado.',
        podeFechar: false,
      });
    }

    this._alertas = alertas;
    this.totalAlertas = alertas.length;
    this._pendenciasPreenchimento = alertas.map(a => a.mensagem);
  };

  protected firstUpdated(): void {
    this._aplicarTitulosSecoes();
    this._recalcularAlertas();
    this._definirAbaInicial();
    this._agendarAjusteAltura();
    this._tabGroup?.addEventListener('wa-tab-show', this._onTabShow as any);

    this._resizeObserver = new ResizeObserver(() => this._ajustarAltura());
    this._resizeObserver.observe(this);
    window.addEventListener('resize', this._ajustarAltura);
  }

  private _definirAbaInicial(): void {
    if (this.isCamara) {
      // Força a ativação da aba no próximo ciclo
      setTimeout(() => {
        if (this._tabGroup) {
          this._tabGroup.active = 'relatorio';
        }
      }, 0);
    }
  }

  private _onRteChange = (_ev: Event): void => {
    _ev;
    this._recalcularAlertas();
  };

  private _onRemoverAlerta = (e: CustomEvent<{ id: string }>): void => {
    const id = e.detail?.id;
    if (!id) return;

    this._alertas = this._alertas.filter(a => a.id !== id);
    this.totalAlertas = this._alertas.length;
  };

  private _onLimparAlertas = (): void => {
    this._alertas = [];
    this.totalAlertas = 0;
  };

  private get isCamara(): boolean {
    return this.parecer?.siglaCasaLegislativa === 'CD';
  }

  public setUsuario(usuario: Usuario): void {
    (this._relatorio as any)?.setUsuarioRevisao?.(usuario);
    (this._analise as any)?.setUsuarioRevisao?.(usuario);
    (this._voto as any)?.setUsuarioRevisaoVoto?.(usuario);
    (this._ementa as any)?.setUsuarioRevisao?.(usuario);
  }

  public setEmRevisaoGlobal(value: boolean): void {
    (this._relatorio as any)?.setEmRevisao?.(value);
    (this._analise as any)?.setEmRevisao?.(value);
    (this._voto as any)?.setEmRevisaoVoto?.(value);
    (this._ementa as any)?.setEmRevisao?.(value);
  }

  private _queryAllSwitches(): any {
    return Array.from(
      this.renderRoot?.querySelectorAll('lexml-ui-switch-revisao') ?? [],
    );
  }

  private _syncAllSwitches(checked: boolean) {
    this._queryAllSwitches().forEach((sw: any) =>
      (sw as any).setChecked?.(checked),
    );
  }

  private _revisoesPendentesTotal(): number {
    const e = (this._ementa as any)?.getQuantidadeRevisoes?.() ?? 0;
    const r = (this._relatorio as any)?.getQuantidadeRevisoes?.() ?? 0;
    const a = (this._analise as any)?.getQuantidadeRevisoes?.() ?? 0;
    const v = (this._voto as any)?.getQuantidadeRevisoesVoto?.() ?? 0;
    return e + r + a + v;
  }

  private _onSwitchIntent = (ev: CustomEvent<{ checked: boolean }>) => {
    const quererAtivar = !!ev.detail?.checked;
    if (quererAtivar) {
      this.setEmRevisaoGlobal?.(true);
      this._syncAllSwitches(true);
      return;
    }
    if (this._revisoesPendentesTotal() > 0) {
      alertarInfo?.(this._msgBloqueioDesativar());
      this.setEmRevisaoGlobal?.(true);
      this._syncAllSwitches(true);
      return;
    }
    this.setEmRevisaoGlobal?.(false);
    this._syncAllSwitches(false);
  };

  private _revisoesPendentesPorAba() {
    const e = (this._ementa as any)?.getQuantidadeRevisoes?.() ?? 0;
    const r = (this._relatorio as any)?.getQuantidadeRevisoes?.() ?? 0;
    const a = (this._analise as any)?.getQuantidadeRevisoes?.() ?? 0;
    const v = (this._voto as any)?.getQuantidadeRevisoesVoto?.() ?? 0;
    return { e, r, a, v, total: e + r + a + v };
  }

  private _msgBloqueioDesativar(): string {
    const { e, r, a, v } = this._revisoesPendentesPorAba();
    const abas: string[] = [];
    if (e > 0) abas.push('Ementa');
    if (r > 0) abas.push('Relatório');
    if (a > 0) abas.push('Análise');
    if (v > 0) abas.push('Voto');

    if (abas.length <= 1) {
      return `É necessário resolver todas as marcas de revisão da aba ${abas[0] ?? 'Relatório'} para desativar o modo de controle de alterações`;
    }
    const lista = abas.slice(0, -1).join(', ') + ' e ' + abas[abas.length - 1];
    return `É necessário resolver todas as marcas de revisão das abas ${lista} para desativar o modo de controle de alterações`;
  }

  public aceitarTodasRevisoes(): void {
    (this._ementa as any)?.aceitarTodasRevisoes?.();
    (this._relatorio as any)?.aceitarTodasRevisoes?.();
    (this._analise as any)?.aceitarTodasRevisoes?.();
    (this._voto as any)?.aceitarTodasRevisoesVoto?.();
  }

  public rejeitarTodasRevisoes(): void {
    (this._ementa as any)?.rejeitarTodasRevisoes?.();
    (this._relatorio as any)?.rejeitarTodasRevisoes?.();
    (this._analise as any)?.rejeitarTodasRevisoes?.();
    (this._voto as any)?.rejeitarTodasRevisoesVoto?.();
  }

  public getContagemRevisoes(): number {
    const r = (this._relatorio as any)?.getQuantidadeRevisoes?.() ?? 0;
    const a = (this._analise as any)?.getQuantidadeRevisoes?.() ?? 0;
    const e = (this._ementa as any)?.getQuantidadeRevisoes?.() ?? 0;
    const v = (this._voto as any)?.getQuantidadeRevisoesVoto?.() ?? 0;
    return r + a + e + v;
  }

  async inicializarEdicao(params: LexmlEtaParecerParametrosEdicao) {
    await this.updateComplete;
    if (params.parecer) {
      await this.setParecer(params.parecer);
      this._definirAbaInicial();
    }
    this._agendarAjusteAltura();
  }

  private _nrGlobalScheduled = false;
  private _scheduleRenumGlobal = (): void => {
    if (this._nrGlobalScheduled) return;
    this._nrGlobalScheduled = true;
    queueMicrotask(async () => {
      this._nrGlobalScheduled = false;
      await this.renumerarNotasGlobal();
    });
  };

  private _onRevisionCount = () => {
    const total = this.getContagemRevisoes();
    this.dispatchEvent(
      new CustomEvent('parecer:revision-total', {
        bubbles: true,
        composed: true,
        detail: { total },
      }),
    );
  };
  private _onRevisionChange = () => {
    const isEmeEmRev = !!(this._ementa as any)?.isEmRevisao?.();
    const isRelEmRev = !!(this._relatorio as any)?.isEmRevisao?.();
    const isAnaEmRev = (this._analise as any)?.isEmRevisao?.();
    const isVotoEmRev = !!(this._voto as any)?.isEmRevisao?.();
    const emRevisaoGlobal =
      isEmeEmRev || isRelEmRev || isAnaEmRev || isVotoEmRev;

    this.dispatchEvent(
      new CustomEvent('parecer:revision-change', {
        bubbles: true,
        composed: true,
        detail: { emRevisao: emRevisaoGlobal },
      }),
    );
  };

  private async _ensureRevisionModeIfNeeded(source?: Parecer): Promise<void> {
    const hasFromPayload = !!(source?.revisoes && source.revisoes.length > 0);
    const anyFromEditors = this.getContagemRevisoes() > 0;

    if (hasFromPayload || anyFromEditors) {
      this.setEmRevisaoGlobal?.(true);
      this._syncAllSwitches(true);
      this.dispatchEvent(
        new CustomEvent('parecer:revision-change', {
          bubbles: true,
          composed: true,
          detail: { emRevisao: true },
        }),
      );
    }
  }

  private _onNrEvt = () => this._scheduleRenumGlobal();

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('switch-revisao:intent', this._onSwitchIntent as any);
    this.addEventListener('nota-rodape:change', this._onNrEvt as any);
    this.addEventListener('nota-rodape:remove', this._onNrEvt as any);
    this.addEventListener('rte:revision-count', this._onRevisionCount as any);
    this.addEventListener('rte:revision-change', this._onRevisionChange as any);
    this.addEventListener('onchange', this._onRteChange as any);
  }

  disconnectedCallback(): void {
    this._tabGroup?.removeEventListener('wa-tab-show', this._onTabShow as any);
    this._resizeObserver?.disconnect();
    window.removeEventListener('resize', this._ajustarAltura);

    this.removeEventListener(
      'switch-revisao:intent',
      this._onSwitchIntent as any,
    );
    this.removeEventListener('nota-rodape:change', this._onNrEvt as any);
    this.removeEventListener('nota-rodape:remove', this._onNrEvt as any);
    this.removeEventListener(
      'rte:revision-count',
      this._onRevisionCount as any,
    );
    this.removeEventListener(
      'rte:revision-change',
      this._onRevisionChange as any,
    );
    this.removeEventListener('onchange', this._onRteChange as any);
    super.disconnectedCallback();
  }

  private renumerarNotasGlobal = async (): Promise<void> => {
    const rel: any = this._relatorio;
    const ana: any = this._analise;
    const votoEl: any = this._voto;

    rel?.setNotaRodapeInicio?.(1);
    const qtdRel = rel?.getQuantidadeNotasRodape?.() ?? 0;

    let qtdAna = 0;
    ana?.setNotaRodapeInicio?.(1 + qtdRel);
    qtdAna = ana?.getQuantidadeNotasRodape?.() ?? 0;

    if (votoEl?.setNotaRodapeInicio) {
      votoEl.setNotaRodapeInicio(1 + qtdRel + qtdAna);
    }
  };

  private async setParecer(parecer: Parecer): Promise<void> {
    if (!parecer) return;
    this.parecer = {
      ...parecer,
      dataUltimaModificacao:
        parecer.dataUltimaModificacao ?? new Date().toISOString(),
    };

    // ---------- Data, Autoria e Impressão ----------
    const dai = this._dataAutoriaImpressao as any;
    await dai?.setDataAutoriaImpressao?.(
      this.parecer.data ?? null,
      this.parecer.autoria,
      this.parecer.opcoesImpressao,
    );

    // ---------- Ementa ----------
    const eme: any = this._ementa;
    eme?.setTexto?.(this.parecer.ementa ?? '');
    eme && !eme.setTexto && (eme.texto = this.parecer.ementa ?? '');

    // ---------- Relatório ----------
    const rel: any = this._relatorio;
    rel?.setTexto?.(this.parecer.relatorio ?? '');
    rel && !rel.setTexto && (rel.texto = this.parecer.relatorio ?? '');

    // ---------- Análise (respeita disableAnalise) ----------
    const ana: any = this._analise;
    ana?.setTexto?.(this.parecer.analise ?? '');
    ana && !ana.setTexto && (ana.texto = this.parecer.analise ?? '');

    // ---------- Voto ----------
    const voto: any = this._voto;
    voto?.setTextoVoto?.(this.parecer.voto ?? '');
    voto?.setAnexos?.(this.parecer.anexos ?? []);

    this.requestUpdate();
    this._scheduleRenumGlobal();
    //Para setar todos os itens em modo de revisão
    await Promise.all(
      [
        (this._ementa as any)?.updateComplete,
        (this._relatorio as any)?.updateComplete,
        (this._analise as any)?.updateComplete,
        (this._voto as any)?.updateComplete,
      ].filter(Boolean),
    );
    await 0;
    await this._ensureRevisionModeIfNeeded(this.parecer);

    this._recalcularAlertas();
    this._aplicarTitulosSecoes();
    this._agendarAjusteAltura();
  }

  public getParecer(): Parecer {
    const ementaEl = this._ementa;
    const dataAutiraImpressaoEl = this._dataAutoriaImpressao;
    const votoEl = this._voto;
    const ementaHtml = this._ementa?.getTexto() ?? '';
    const relatorioHtml = this._relatorio?.getTexto() ?? '';
    const analiseHtml = this._analise?.getTexto() ?? '';

    if (!ementaEl) {
      console.warn('lexml-parecer-ementa não encontrado.');
      return new Parecer();
    }
    if (!dataAutiraImpressaoEl) {
      console.warn('lexml-parecer-data-autoria-impressao não encontrado.');
      return new Parecer();
    }
    if (!votoEl) {
      console.warn('lexml-parecer-voto não encontrado.');
      return new Parecer();
    }
    const opcoesImpressao: OpcoesImpressao =
      dataAutiraImpressaoEl.getOpcoesImpressao();
    const data: string | null = dataAutiraImpressaoEl.getData();
    const autoriaParecer: AutoriaParecer =
      dataAutiraImpressaoEl.getAutoriaParecer();
    const votoTexto = (this._voto as any)?.getTextoVoto?.() ?? '';
    const anexos = (this._voto as any)?.getAnexos?.() ?? [];

    const notasRelatorio: NotaRodape[] =
      (this._relatorio as any)?.getNotasRodape?.() ?? [];

    const notasAnalise: NotaRodape[] =
      (this._analise as any)?.getNotasRodape?.() ?? [];

    const notasVoto: NotaRodape[] =
      (this._voto as any)?.getNotasRodape?.() ?? [];

    const notasRodape: NotaRodape[] = [
      ...notasRelatorio,
      ...notasAnalise,
      ...notasVoto,
    ];

    const revisoesEme = (this._ementa as any)?.getRevisoes?.() ?? [];
    const revisoesRel = (this._relatorio as any)?.getRevisoes?.() ?? [];
    const revisoesAna = (this._analise as any)?.getRevisoes?.() ?? [];
    const revisoesVoto = (this._voto as any)?.getRevisoes?.() ?? [];

    const revisoes: Revisao[] = [
      ...revisoesEme,
      ...revisoesRel,
      ...revisoesAna,
      ...revisoesVoto,
    ];

    this.parecer = {
      ...this.parecer,
      dataUltimaModificacao: new Date().toISOString(),
      ementa: ementaHtml,
      opcoesImpressao: { ...opcoesImpressao },
      data,
      autoria: { ...autoriaParecer },
      relatorio: relatorioHtml,
      analise: analiseHtml,
      voto: votoTexto,
      anexos,
      notasRodape: notasRodape,
      revisoes: revisoes,
      local:
        this.parecer.destino.colegiadoApreciador === 'Plenário'
          ? 'Sala das Sessões'
          : 'Sala da Comissão',
      epigrafe: 'PARECER Nº         ',
      pendenciasPreenchimento: [...this._pendenciasPreenchimento],
    };
    return this.parecer;
  }

  willUpdate(changed: Map<string, unknown>): void {
    if (changed.has('lexmlParecerConfig') && this.lexmlParecerConfig) {
      this._parlamentares = this.lexmlParecerConfig.parlamentares ?? [];
      this.urlAnexo = this.lexmlParecerConfig.urlAnexo ?? '';
      this.onVisualizarAnexo = this.lexmlParecerConfig.onVisualizarAnexo;
    }
  }

  render(): TemplateResult {
    return html`
      <style>
        ${waResetString} ${waThemeString} lexml-eta-parecer {
          --wa-color-primary-600: #ff0000 !important; /* Vermelho para testar */
          --wa-color-primary-500: #ff0000 !important;
          --altura-max-tab-panel: ${this._alturaEditor}px;
          display: block;
          height: 100%;
          min-height: 0;
          overflow: hidden;
          color: var(--lexml-eta-parecer-text-color, #000);
        }
        .lexml-default-ds {
          min-height: 0 !important;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .wa-theme-shoelace.wa-palette-shoelace.wa-brand-blue {
          height: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        wa-tab-group {
          height: 100%;
          min-height: 0;
          flex: 1 1 auto;
        }
        wa-tab-group::part(body) {
          height: var(--altura-max-tab-panel);
          max-height: var(--altura-max-tab-panel);
          min-height: 0;
          overflow: hidden;
        }
        lexml-eta-parecer wa-tab-panel {
          height: var(--altura-max-tab-panel);
          max-height: var(--altura-max-tab-panel);
          min-height: 0;
        }
        lexml-parecer-voto {
          display: block;
          height: 100%;
          min-height: 0;
        }
        lexml-eta-parecer wa-tab-panel::part(base) {
          height: 100%;
          max-height: 100%;
          padding-top: 0;
          padding-bottom: 0;
          min-height: 0;
          overflow: hidden;
        }
        lexml-eta-parecer wa-tab-panel.overflow-hidden {
          overflow: hidden;
        }
        .tab-panel-content {
          box-sizing: border-box;
          height: 100%;
          max-height: 100%;
          min-height: 0;
          overflow-y: auto;
          overflow-x: hidden;
          padding-top: 2px;
        }
        .badge-pulse {
          margin-left: 7px;
          height: 16px;
          margin-top: -4px;
        }
        .badge-alertas {
          height: 20px;
          width: 18px;
          display: flex;
        }
      </style>

      <div
        class="lexml-default-ds"
        style="--altura-max-tab-panel: ${this._alturaEditor}px;"
      >
        <div class="wa-theme-shoelace wa-palette-shoelace wa-brand-blue">
          <wa-tab-group>
            <wa-tab
              slot="nav"
              panel="ementa"
              style="${this.isCamara ? 'display: none;' : ''}"
            >
              Ementa
            </wa-tab>
            <wa-tab slot="nav" panel="relatorio">Relatório</wa-tab>
            <wa-tab slot="nav" panel="analise">
              ${this.parecer.tituloSecao2}
            </wa-tab>
            <wa-tab slot="nav" panel="voto"
              >${this.parecer.tituloSecao3}</wa-tab
            >
            <wa-tab slot="nav" panel="dataAutoriaImpressao"
              >Data, Autoria e Impressão</wa-tab
            >
            <wa-tab slot="nav" panel="avisos">
              Avisos
              <div class="badge-pulse" id="contadorAvisos">
                ${this.totalAlertas > 0
                  ? html`
                      <wa-badge
                        class="badge-alertas"
                        variant="danger"
                        attention="pulse"
                        pill
                      >
                        ${this.totalAlertas}
                      </wa-badge>
                    `
                  : ''}
              </div>
            </wa-tab>

            <wa-tab-panel
              name="ementa"
              class="overflow-hidden"
              style="${this.isCamara ? 'display: none;' : ''}"
            >
              <div class="tab-panel-content">
                <lexml-parecer-ementa
                  .alturaEditor=${this._alturaEditor - 2}
                ></lexml-parecer-ementa>
              </div>
            </wa-tab-panel>
            <wa-tab-panel name="relatorio" class="overflow-hidden">
              <div class="tab-panel-content">
                <lexml-parecer-relatorio
                  .alturaEditor=${this._alturaEditor - 2}
                ></lexml-parecer-relatorio>
              </div>
            </wa-tab-panel>
            <wa-tab-panel name="analise" class="overflow-hidden">
              <div class="tab-panel-content">
                <lexml-parecer-analise
                  .alturaEditor=${this._alturaEditor - 2}
                ></lexml-parecer-analise>
              </div>
            </wa-tab-panel>
            <wa-tab-panel name="voto" class="overflow-hidden">
              <div class="tab-panel-content">
                <lexml-parecer-voto
                  .urlAnexo=${this.urlAnexo}
                  .onVisualizarAnexo=${this.onVisualizarAnexo}
                ></lexml-parecer-voto>
              </div>
            </wa-tab-panel>
            <wa-tab-panel name="dataAutoriaImpressao" class="overflow-hidden">
              <div class="tab-panel-content">
                <lexml-parecer-data-autoria-impressao
                  .parlamentares=${this._parlamentares}
                ></lexml-parecer-data-autoria-impressao>
              </div>
            </wa-tab-panel>
            <wa-tab-panel name="avisos" class="overflow-hidden">
              <div class="tab-panel-content">
                <lexml-parecer-avisos
                  .alertas=${this._alertas}
                  @parecer-total-alertas=${(
                    e: CustomEvent<{ total: number }>,
                  ) => {
                    this.totalAlertas = e.detail.total;
                  }}
                  @parecer-remover-alerta=${this._onRemoverAlerta}
                  @parecer-limpar-alertas=${this._onLimparAlertas}
                ></lexml-parecer-avisos>
              </div>
            </wa-tab-panel>
          </wa-tab-group>
        </div>
      </div>
    `;
  }
}
