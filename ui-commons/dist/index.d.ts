import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement, TemplateResult } from 'lit';

declare class LexmlUiCommons extends LitElement {
  static styles: lit.CSSResult;
  private comissoesTeste;
  render(): lit_html.TemplateResult<1>;
}

declare class ColegiadoApreciador {
  siglaCasaLegislativa?: 'CN' | 'SF' | 'CD' | undefined;
  tipoColegiado: 'Plenário' | 'Comissão' | 'Plenário via Comissão';
  siglaComissao?: string | undefined;
}

declare class RefProposicaoEmendada {
  urn: string;
  sigla: string;
  numero: string;
  ano: string;
  ementa: string;
  identificacaoTexto: string;
  emendarTextoSubstitutivo: boolean;
}

declare class Comissao {
  siglaCasaLegislativa: 'SF' | 'CD' | 'CN';
  sigla: string;
  nome: string;
}

/**
 * Exemplo de uso do componente <lexml-destino>:
 *
 * Caso o projeto utilize Redux para gerenciar alertas globais, você pode integrar
 * o componente passando callbacks via propriedades:
 *
 * ```html
 * <!-- Exemplo de integração com Redux -->
 * <lexml-destino
 *   .addAlert=${a => rootStore.dispatch(adicionarAlerta(a))}
 *   .removeAlert=${id => rootStore.dispatch(removerAlerta(id))}
 *   criticalType=${TipoMensagem.CRITICAL}
 *   .comissoes=${listaDeComissoes}
 *   .proposicao=${proposicao}
 *   .colegiadoApreciador=${colegiado}
 * ></lexml-destino>
 * ```
 *
 * Caso não injete as funções `addAlert` e `removeAlert`, o componente emitirá
 * eventos customizados (`alert:add` e `alert:remove`) que podem ser ouvidos externamente.
 */
type DestinoAlert = {
  id: string;
  tipo: string;
  mensagem: string;
  podeFechar?: boolean;
};
type AddAlertFn = (alerta: DestinoAlert) => void;
type RemoveAlertFn = (id: string) => void;
declare class DestinoComponent extends LitElement {
  private _autocomplete;
  private _comissoesAutocomplete;
  private isMPV;
  private isPlenario;
  private tipoColegiadoPlenario;
  isMateriaOrcamentaria: boolean;
  private isErroComissaoSelecionada;
  private _proposicao;
  static styles: lit.CSSResult[];
  addAlert?: AddAlertFn;
  removeAlert?: RemoveAlertFn;
  criticalType: string;
  set proposicao(value: RefProposicaoEmendada);
  constructor();
  get proposicao(): RefProposicaoEmendada;
  private _comissoes;
  set comissoes(value: Comissao[]);
  get comissoes(): Comissao[];
  private _comissoesOptions;
  private ajustarValorAutocomplete;
  private _colegiadoApreciador;
  set colegiadoApreciador(value: ColegiadoApreciador | undefined);
  get colegiadoApreciador(): ColegiadoApreciador;
  render(): TemplateResult;
  private _exibirComissoes;
  private criarAlertaErroComissao;
  private removerAlertaErroComissao;
  private updateTipoColegiado;
  private _selecionarComissao;
  private _filtroComissao;
  private _blurAutoComplete;
  private emitirEventoOnChange;
  private ajustarTipoColegiadoPlenario;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-destino': DestinoComponent;
  }
}

export { Comissao, DestinoComponent, LexmlUiCommons };
