import * as lit_html from 'lit-html';
import * as lit from 'lit';
import { LitElement, TemplateResult, PropertyValues } from 'lit';

declare class LexmlUiCommons extends LitElement {
  private _destinoEl;
  private _dataEl;
  private _opcoesImpressaoEl;
  private _log;
  private _nomesParlamentares;
  private _nomeSelecionado;
  private _onAutocomplete;
  private _onInput;
  private _tipoIdx;
  totalAlertas: number;
  private alertasDemo;
  private gerarId;
  private readonly tiposCiclo;
  private readonly labelTipo;
  private adicionarAlertaDemo;
  private removerAlertaDemo;
  private limparAlertasDemo;
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

declare class Destino {
  colegiadoApreciador: 'Plenário' | 'Comissão' | 'Plenário via Comissão';
  comissao: Comissao | null;
}

/**
 * Exemplo de uso do componente <lexml-destino>:
 *
 * Caso o projeto utilize Redux para gerenciar alertas globais, você pode integrar
 * o componente passando callbacks via propriedades:
 *
 * ```html
 * <!-- Exemplo de integração com Redux -->
 * <lexml-ui-destino
 *   .addAlert=${a => rootStore.dispatch(adicionarAlerta(a))}
 *   .removeAlert=${id => rootStore.dispatch(removerAlerta(id))}
 *   criticalType=${TipoMensagem.CRITICAL}
 *   .comissoes=${listaDeComissoes}
 *   .proposicao=${proposicao}
 *   .colegiadoApreciador=${colegiado}
 * ></lexml-ui-destino>
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
type RemoveAlertFn$1 = (id: string) => void;
declare class DestinoComponent extends LitElement {
  private _autocomplete;
  private _comissoesAutocomplete;
  private _comissaoSelecionada;
  private isMPV;
  private isPlenario;
  private tipoColegiadoPlenario;
  isMateriaOrcamentaria: boolean;
  private isErroComissaoSelecionada;
  private _proposicao;
  static styles: lit.CSSResult[];
  addAlert?: AddAlertFn;
  removeAlert?: RemoveAlertFn$1;
  criticalType: string;
  set proposicao(value: RefProposicaoEmendada);
  constructor();
  getDestino(): Destino;
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
  private _blurAutoComplete;
  private emitirEventoOnChange;
  private ajustarTipoColegiadoPlenario;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ui-destino': DestinoComponent;
  }
}

declare class Data extends LitElement {
  inputData: HTMLInputElement;
  private group;
  optionNaoInformarData: any;
  data: string;
  getData(): string | null;
  firstUpdated(): void;
  private selecionarRadioData;
  updated(): void;
  render(): TemplateResult;
  private resetDate;
  private setDate;
  private timerOnChange;
  private agendarEmissaoEventoOnChange;
  private emitirEventoOnChange;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ui-data': Data;
  }
}

declare class OpcoesImpressao {
  imprimirBrasao: boolean;
  textoCabecalho: string;
  reduzirEspacoEntreLinhas: boolean;
  tamanhoFonte: number;
}

declare class OpcoesImpressaoComponent extends LitElement {
  tamanhoFonte: HTMLElement & {
    value: string;
  };
  private _opcoesImpressao;
  set opcoesImpressao(value: OpcoesImpressao);
  get opcoesImpressao(): OpcoesImpressao;
  getOpcoesImpressao(): OpcoesImpressao;
  private timerEmitirEventoOnChange;
  protected firstUpdated(): void;
  render(): TemplateResult;
  private _atualizarTextoCabecalho;
  private _atualizarImprimirBrasao;
  private _atualizarTamanhoFonte;
  private _atualizarReduzirEspacoEntreLinhas;
  private agendarEmissaoEventoOnChange;
  private emitirEventoOnChange;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ui-opcoes-impressao': OpcoesImpressaoComponent;
  }
}

declare enum TipoMensagem {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
  SUCCESS = 'SUCCESS',
}
declare enum AutoFix {
  INFORMAR_NORMA = '\u00C9 necess\u00E1rio informar a norma a ser alterada',
  OMISSIS_ANTES = '\u00C9 necess\u00E1rio uma linha pontilhada antes deste dispositivo',
  OMISSIS_SEQUENCIAIS = 'N\u00E3o pode haver mais de uma linha pontilhada sequencialmente',
  RENUMERAR_DISPOSITIVO = 'Numere o dispositivo',
}
interface Mensagem {
  tipo: TipoMensagem;
  descricao?: string;
  descricaoParaPDF?: string;
  detalhe?: any;
  fix?: any;
  nomeEvento?: string;
}
interface MensagemErro extends Mensagem {
  tipo: TipoMensagem.ERROR;
}

interface Alerta {
  id: string;
  tipo: TipoMensagem;
  mensagem: string;
  podeFechar: boolean;
  exibirComandoEmenda?: boolean;
}

/**
 * Exemplo de uso do componente <lexml-ui-alertas>:
 *
 * Caso o projeto utilize Redux para gerenciar alertas, injete callbacks pelo PAI:
 *
 * ```html
 * <lexml-ui-alertas
 *   .alertas=${store.getState().elementoReducer.ui?.alertas ?? []}
 *   .removeAlert=${(id: string) => store.dispatch(removerAlerta(id))}
 *   .clearAlerts=${() => store.dispatch(limparAlertas())}
 *   .seletorHost=${'lexml-emenda'}              <!-- opcional -->
 *   .seletorBadge=${'#contadorAvisos wa-badge'}  <!-- opcional -->
 *   @alertas:alterados=${(e: CustomEvent<{ total: number; aumentou: boolean }>) => {
 *     // opcional: usar e.detail.total / e.detail.aumentou
 *   }}
 * ></lexml-ui-alertas>
 * ```
 *
 * Caso NÃO injete `removeAlert`/`clearAlerts`, o componente emitirá eventos
 * (`alert:remove` com { id } e `alert:clear`) que podem ser ouvidos externamente:
 *
 * ```html
 * <lexml-ui-alertas
 *   .alertas=${meusAlertas}
 *   @alert:remove=${(e: CustomEvent<{ id: string }>) => store.dispatch(removerAlerta(e.detail.id))}
 *   @alert:clear=${() => store.dispatch(limparAlertas())}
 * ></lexml-ui-alertas>
 * ```
 */
type RemoveAlertFn = (id: string) => void;
type ClearAlertsFn = () => void;
declare class AlertasComponent extends LitElement {
  alertas: Alerta[];
  removeAlert?: RemoveAlertFn;
  clearAlerts?: ClearAlertsFn;
  seletorHost: string;
  seletorBadge: string;
  stateChanged(state: any): void;
  private _lastCount;
  getAlertIcon(tipoAlerta: TipoMensagem): TemplateResult;
  limparAlertas(): void;
  removeAlertaById(id: string): void;
  private onCloseClick;
  updated(changedProperties: PropertyValues): void;
  render(): TemplateResult;
}

declare class Autocomplete extends LitElement {
  items: string[];
  label: string;
  opened: boolean;
  maxSuggestions: number;
  _suggestions: string[];
  _bound: any;
  _inputEl: any;
  _suggestionEl: any;
  _highlightedEl: any;
  _blur: boolean;
  _mouseEnter: boolean;
  render(): TemplateResult;
  /**
   * Input element getter
   */
  get contentElement(): any;
  private _tempValue?;
  /**
   * Value getter from input element.
   */
  get value(): any;
  /**
   * Value setter to input element.
   */
  set value(value: any);
  firstUpdated(): void;
  disconnectedCallback(): void;
  focus(options?: FocusOptions): void;
  updated(changed: PropertyValues): void;
  /**
   * Open suggestions.
   */
  open(): void;
  /**
   * Close suggestions.
   */
  close(): void;
  /**
   * Suggest autocomplete items.
   * @param {Array<String>} suggestions
   */
  suggest(suggestions: string[]): void;
  /**
   * Autocomplete input with `value`.
   * @param {String} value
   */
  autocomplete(value: string): void;
  private _selectFromMouse;
  _highlightPrev(): void;
  _highlightNext(): void;
  _handleKeyDown(ev: KeyboardEvent): void;
  _handleKeyUp(ev: KeyboardEvent): void;
  _findSuggetions(value?: string, nItemsResult?: number): string[];
  _filterStartWith(value: string, itemsResult?: number): string[];
  _filterContains(value: string, itemsResult?: number): string[];
  _handleFocus(): void;
  _handleBlur(): void;
  _handleItemMouseEnter(): void;
  _handleItemMouseLeave(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ui-autocomplete': Autocomplete;
  }
}

declare class AutocompleteAsync extends LitElement {
  placeholder: string;
  label: string;
  items: Option$1[];
  disabled: boolean;
  opened: boolean;
  async: boolean;
  maxSuggestions: number;
  onSearch: (value: string) => void;
  onSelect: (value: Option$1) => void;
  onChange: (value: string) => void;
  onClick: (value: string) => void;
  _interval: number;
  _timer: any;
  _bound: any;
  _inputEl: any;
  _suggestionEl: any;
  _highlightedEl: any;
  _blur: boolean;
  _mouseEnter: boolean;
  _search: () => void;
  render(): TemplateResult;
  /**
   * Input element getter
   */
  get contentElement(): any;
  private _tempValue?;
  /**
   * Value getter from input element.
   */
  get value(): any;
  /**
   * Value setter to input element.
   */
  set value(value: any);
  firstUpdated(): void;
  disconnectedCallback(): void;
  focus(options?: FocusOptions): void;
  updated(changed: PropertyValues): void;
  /**
   * Open suggestions.
   */
  open(): void;
  /**
   * Close suggestions.
   */
  close(): void;
  /**
   * Autocomplete input with `value`.
   * @param {String} value
   */
  autocomplete(value: Option$1): void;
  _highlightPrev(): void;
  _highlightNext(): void;
  _handleChange(value: string): void;
  _handleKeyDown(ev: KeyboardEvent): void;
  _handleKeyUp(ev: KeyboardEvent): void;
  _handleFocus(): void;
  _handleBlur(): void;
  _handleItemMouseEnter(): void;
  _handleItemMouseLeave(): void;
  _handleClick(value: string): void;
}
declare class Option$1 {
  description: string;
  value: string;
  constructor(value: string, description: string);
}
declare global {
  interface HTMLElementTagNameMap {
    'autocomplete-ui-async': AutocompleteAsync;
  }
}

declare class Option {
  value: string;
  description: string;
  constructor(value: string, description: string);
}
type OnSearchFn =
  | ((q: string) => Option[] | string[] | Promise<Option[] | string[]>)
  | undefined;
declare class LexmlAutocompleteUniversal extends LitElement {
  label: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  showOnEmpty: boolean;
  mode: 'sync' | 'async';
  set async(v: boolean);
  get async(): boolean;
  items: Array<string | Option>;
  onSearch: OnSearchFn;
  onSelect: (opt: Option) => void;
  onChange: (value: string) => void;
  onClick: (value: string) => void;
  minChars: number;
  maxSuggestions: number;
  opened: boolean;
  private _inputEl;
  private _suggestionEl;
  private _highlightedEl;
  private _bound;
  private _timer;
  private _interval;
  private _blur;
  private _tempValue?;
  get value(): string;
  set value(v: string);
  render(): TemplateResult;
  get contentElement(): any;
  private _syncListWidth;
  private _ro?;
  private _io?;
  firstUpdated(): void;
  disconnectedCallback(): void;
  updated(changed: PropertyValues): void;
  private _currentOptions;
  private _itemsToOptions;
  private _recalcList;
  private _setSuggestions;
  open(): void;
  close(): void;
  private _selectOption;
  private _handleKeyDown;
  private _handleKeyUp;
  private _debouncedSearch;
  private _handleFocus;
  private _handleBlur;
  private _handleChange;
  private _handleClick;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-autocomplete-universal': LexmlAutocompleteUniversal;
  }
}

declare const REGEX_ACCENTS: RegExp;

export {
  AlertasComponent,
  AutoFix,
  Autocomplete,
  AutocompleteAsync,
  Comissao,
  Data,
  Destino,
  DestinoComponent,
  LexmlAutocompleteUniversal,
  LexmlUiCommons,
  OpcoesImpressaoComponent,
  Option,
  REGEX_ACCENTS,
  TipoMensagem,
};
export type { Alerta, Mensagem, MensagemErro };
