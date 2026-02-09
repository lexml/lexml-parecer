import * as redux from 'redux';
import * as lit from 'lit';
import { LitElement, TemplateResult, PropertyValues } from 'lit';
import { SlSelect } from '@shoelace-style/shoelace';

interface Conteudo {
  texto: string;
}

interface ElementoAction {
  descricao?: string;
  tipo?: string;
  hotkey?: string;
  execute(
    atual: Referencia,
    conteudo?: string,
    novo?: Referencia,
    ...outros: any
  ): any;
}

declare enum TipoMensagem {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
  SUCCESS = 'SUCCESS',
}
interface Mensagem {
  tipo: TipoMensagem;
  descricao?: string;
  descricaoParaPDF?: string;
  detalhe?: any;
  fix?: any;
  nomeEvento?: string;
}

interface Alerta {
  id: string;
  tipo: TipoMensagem;
  mensagem: string;
  podeFechar: boolean;
  exibirComandoEmenda?: boolean;
}

declare enum ClassificacaoDocumento {
  NORMA = 'norma',
  PROJETO = 'projeto',
}

interface Classificacao {
  classificacao: string;
}
interface Metadado {
  urn?: string;
}
interface TextoArticulado {
  articulacao?: Articulacao;
}
interface ParteInicial {
  epigrafe?: Conteudo;
  ementa?: Dispositivo;
  preambulo?: Conteudo;
}

interface TipoDocumento {
  urn: string;
  descricao: string;
  genero: string;
}

declare type ProjetoNorma = Norma | Projeto;
interface Norma extends Classificacao, Metadado, ParteInicial, TextoArticulado {
  classificacao: ClassificacaoDocumento.NORMA;
  tipo?: TipoDocumento;
}
interface Projeto
  extends Classificacao,
    Metadado,
    ParteInicial,
    TextoArticulado {
  classificacao: ClassificacaoDocumento.PROJETO;
  tipo?: TipoDocumento;
}

interface Regras {
  getAcoesPossiveis(dispositivo: Dispositivo): ElementoAction[];
  getAcaoPossivelTab(dispositivo: Dispositivo): any;
  getAcaoPossivelShiftTab(dispositivo: Dispositivo): any;
}

interface Alteracoes extends Articulacao {
  base?: string;
}
interface BlocoAlteracao {
  alteracoes?: Alteracoes;
  hasAlteracao(): boolean;
}

interface Genero {
  tipoGenero: string;
  artigoDefinido: string;
  pronomePossessivoSingular: string;
  pronomePossessivoPlural: string;
  artigoDefinidoSingular: string;
  artigoDefinidoPlural: string;
  artigoIndefinidoSingular: string;
  artigoDefinidoPrecedidoPreposicaoASingular: string;
  artigoDefinidoPrecedidoPreposicaoAPlural: string;
  contracaoEmArtigoDefinidoSingular: string;
}

interface Hierarquia {
  pai?: Dispositivo;
  filhos: Dispositivo[];
  isDispositivoAlteracao?: boolean;
  addFilho(filho: Dispositivo, referencia?: Dispositivo): void;
  addFilhoOnPosition(filho: Dispositivo, posicao: number): void;
  isLastFilho(filho: Dispositivo): boolean;
  indexOf(filho: Dispositivo): number;
  removeFilho(filho: Dispositivo): void;
  renumeraFilhos(): void;
}

interface Numeracao {
  id?: string;
  numero?: string;
  rotulo?: string;
  createRotulo(dispositivo: Dispositivo): void;
  createNumeroFromRotulo(rotulo: string): void;
}

interface Situacao {
  situacao: TipoSituacao;
  getAcoesPermitidas(dispositivo: Dispositivo, acoes: any[]): any[];
}
interface TipoSituacao {
  descricaoSituacao: string;
  dispositivoOriginal?: Partial<Elemento>;
}

interface Tipo {
  tipo: string;
  name?: string;
  tagId?: string;
  descricao?: string;
  descricaoPlural?: string;
  tiposPermitidosPai?: string[];
  tiposPermitidosFilhos?: string[];
  tipoProvavelFilho?: string;
  INDICADOR_SEQUENCIA?: string[];
  INDICADOR_FIM_SEQUENCIA?: string[];
  INDICADOR_DESDOBRAMENTO?: string[];
}

interface Validacao {
  mensagens?: Mensagem[];
}

interface Dispositivo
  extends Tipo,
    Hierarquia,
    Numeracao,
    Conteudo,
    BlocoAlteracao,
    Genero,
    Regras,
    Situacao,
    Validacao {
  tipo: string;
  href?: string;
  id?: string;
  uuid?: number;
  uuid2?: string;
  cabecaAlteracao?: boolean;
  notaAlteracao?: string;
  motivosOperacaoNaoPermitida?: string[];
  bloqueado?: boolean;
  tituloDispositivo?: string;
}
interface Articulacao extends Dispositivo {
  projetoNorma?: ProjetoNorma;
  tipo: string;
  artigos: Artigo[];
  addArtigo(dispositivo: Dispositivo, referencia?: Dispositivo): void;
  addArtigoOnPosition(dispositivo: Dispositivo, posicao: number): void;
  renumeraArtigos(): void;
  removeArtigo(artigo: Artigo): void;
  indexOfArtigo(artigo: Artigo): number;
}
interface Artigo extends Dispositivo {
  tipo: string;
  caput?: Dispositivo;
}

interface RangeArtigos {
  numInicial: number;
  numFinal: number;
}
interface ConfiguracaoPaginacao {
  maxItensPorPagina?: number;
  rangeArtigos?: RangeArtigos[];
}

declare class Usuario {
  nome: string;
  id: any;
  sigla?: string;
  constructor(nome?: string, id?: any, sigla?: string);
}

declare abstract class Revisao {
  abstract type: string;
  id: string;
  usuario: Usuario;
  dataHora: string;
  descricao?: string;
  constructor(usuario: Usuario, dataHora: string, descricao?: string);
}

declare class Referencia {
  tipo?: string;
  uuid?: number;
  uuid2?: string;
  lexmlId?: string;
  conteudo?: Partial<Conteudo>;
  descricaoSituacao?: string;
  uuidAlteracao?: number;
  uuid2Alteracao?: string;
  existeNaNormaAlterada?: boolean;
}
declare class Elemento extends Referencia {
  nivel: number;
  tituloDispositivo?: string;
  numero?: string;
  rotulo: string;
  agrupador: boolean;
  editavel: boolean;
  mensagens?: Mensagem[];
  hierarquia?: {
    pai?: Referencia;
    posicao?: number;
    numero?: string;
  };
  sendoEditado: boolean;
  index: number;
  acoesPossiveis?: ElementoAction[];
  norma?: string;
  existeNaNormaAlterada?: boolean;
  abreAspas?: boolean;
  fechaAspas?: boolean;
  notaAlteracao?: string;
  dispositivoAlteracao?: boolean;
  tipoOmissis?: string;
  podeEditarNotaAlteracao?: boolean;
  manterNoMesmoGrupoDeAspas?: boolean;
  tiposAgrupadoresQuePodemSerInseridosAntes?: string[];
  tiposAgrupadoresQuePodemSerInseridosDepois?: string[];
  artigoDefinido?: string;
  elementoAnteriorNaSequenciaDeLeitura?: Referencia;
  revisao?: Revisao;
  ultimoFilhoDireto?: Referencia;
  bloqueado?: boolean;
}

declare class LexmlEtaConfig {
  urlConsultaParlamentares: string;
  urlAutocomplete: string;
  urlComissoes?: string;
  tamanhoMaximoAnexo: number;
  tamanhoMaximoImagem: number;
}

declare const ArticulacaoComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class ArticulacaoComponent extends ArticulacaoComponent_base {
  elementos: Elemento[];
  lexmlEtaConfig: LexmlEtaConfig;
  constructor();
  createRenderRoot(): LitElement;
  render(): TemplateResult;
}

declare class NotaRodape {
  id: any;
  numero: any;
  texto: any;
  constructor({ id, numero, texto }: { id: any; numero: any; texto: any });
}

declare class ColegiadoApreciador$1 {
  siglaCasaLegislativa?: 'CN' | 'SF' | 'CD';
  tipoColegiado: 'Plenário' | 'Comissão' | 'Plenário via Comissão';
  siglaComissao?: string;
}
declare class Epigrafe$1 {
  texto: string;
  complemento: string;
}
declare enum TipoAutoria$1 {
  NAO_IDENTIFICADO = 'N\u00E3o identificado',
  PARLAMENTAR = 'Parlamentar',
  COMISSAO = 'Comiss\u00E3o',
  CASA_LEGISLATIVA = 'Casa Legislativa',
}
declare class Autoria$1 {
  tipo: TipoAutoria$1;
  imprimirPartidoUF: boolean;
  quantidadeAssinaturasAdicionaisSenadores: number;
  quantidadeAssinaturasAdicionaisDeputados: number;
  parlamentares: Array<Parlamentar$1>;
  colegiado?: ColegiadoAutor$1;
}
declare class Parlamentar$1 {
  identificacao: string;
  nome: string;
  sexo: 'M' | 'F';
  siglaPartido: string;
  siglaUF: string;
  siglaCasaLegislativa: 'SF' | 'CD';
  cargo: string;
}
declare class ColegiadoAutor$1 {
  identificacao: string;
  nome: string;
  sigla: string;
}
declare class OpcoesImpressao$1 {
  imprimirBrasao: boolean;
  textoCabecalho: string;
  reduzirEspacoEntreLinhas: boolean;
  tamanhoFonte: number;
}
declare class Anexo$1 {
  nomeArquivo: string;
  base64: string;
}
declare type TipoSubstituicaoTermo = 'Expressão' | 'Palavra' | 'Número';
declare class SubstituicaoTermo {
  tipo: TipoSubstituicaoTermo;
  termo: string;
  novoTermo: string;
  flexaoGenero: boolean;
  flexaoNumero: boolean;
}

declare const EditorComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class EditorComponent extends EditorComponent_base {
  lexmlEtaConfig: LexmlEtaConfig;
  private ajudaModal;
  private atalhosModal;
  private sufixosModal;
  private btnAceitarTodasRevisoes;
  private btnRejeitarTodasRevisoes;
  private proposicaoDivididaDialog;
  private modo;
  private _quill?;
  private get quill();
  private eventosOnChange;
  private inscricoes;
  private timerOnChange?;
  private _idSwitchRevisao;
  private _idBadgeQuantidadeRevisao;
  anexos: Anexo$1[];
  constructor();
  atualizaAnexo: (anexo: Anexo$1[]) => void;
  labelAnexo: () => string;
  createRenderRoot(): LitElement;
  firstUpdated(): Promise<void>;
  stateChanged(state: any): void;
  disconnectedCallback(): void;
  exibirBotoesParaTratarTodas: boolean;
  render(): TemplateResult;
  private renderBotoesParaTratarTodasRevisoes;
  private showAjudaModal;
  private showAtalhosModal;
  private formatacaoAlterada;
  private onClickUndo;
  private onClickRedo;
  private artigoOndeCouber;
  private onSelectionChange;
  private ajustarLinkParaNorma;
  private onBold;
  private onItalic;
  private onScript;
  private onOperacaoInvalida;
  private isDesmembramento;
  private adicionarElemento;
  private editarNotaAlteracao;
  private renumerarElemento;
  private toggleExistencia;
  private adicionaAgrupador;
  private adicionarAgrupadorArtigo;
  private toggleExistenciaElemento;
  private removerElementoSemTexto;
  private removerElemento;
  private moverElemento;
  private transformarElemento;
  private elementoSelecionado;
  private undoRedoEstrutura;
  private configurarSeletorPaginacao;
  private onPaginaArticulacaoSelecionada;
  private carregarPaginaArticulacao;
  private atualizarSeletorPaginacao;
  private processarStateEvents;
  private processaRevisoesAceitas;
  private isAceitandoRevisoesDeExclusao;
  private existeReinclusaoDoElemento;
  private marcarLinha;
  private processarEscolhaMenu;
  private inserirNovoElementoNoQuill;
  private inserirNovosElementosNoQuill;
  private atualizarSituacao;
  private atualizarAtributos;
  private atualizarOmissis;
  private atualizarQuill;
  private elementoRemovidoEmRevisao;
  private removerLinhaQuill;
  private renumerarQuill;
  private atualizarMensagemQuill;
  private isMensagemSufixos;
  private montarMenuContexto;
  private criarElemento;
  private inicializar;
  exibirModalSufixos(): void;
  exibirDiferencas(elemento: Elemento): void;
  aceitarRevisao(elemento: Elemento): void;
  setCursorCurrentLine(): void;
  rejeitarRevisao(elemento: Elemento): void;
  aceitarTodasRevisoes(): void;
  rejeitarTodasRevisoes(): void;
  private agendarEmissaoEventoOnChange;
  private atualizarTextoElemento;
  private alertaGlobalRevisao;
  private alertaGlobalEmendaSemPreenchimento;
  private emitirEventoOnChange;
  private carregarArticulacao;
  private configEditor;
  private confirmar;
  private quillNaoInicializado;
  private getHtmlElement;
  private destroiQuill;
  private listenerRotulo;
  private listenerNotaAlteracao;
  private listenerToggleExistencia;
  private listenerMensagem;
  private listenerAceitarRevisao;
  private listenerRejeitarRevisao;
  private configListenersEta;
  private removeListenersEta;
  private onPasteTextoArticulado;
  private atualizarEstiloBotaoRevisao;
  private indicadorTextoModificado;
  private adicionaRemoveOpcaoDiffMenu;
  private indicadorMarcaRevisao;
  private atualizarStatusBotoesRevisao;
  private navegarEntreElementosAlterados;
  private checkedSwitchMarcaAlteracao;
  private disabledParagrafoElementoRemovido;
}

declare class ElementoComponent extends LitElement {
  elemento: Elemento;
  static styles: lit.CSSResult;
  render(): TemplateResult;
  private htmlAgrupador;
  private htmlDispositivo;
}

declare class AtalhosComponent extends LitElement {
  static styles: lit.CSSResult;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-eta-atalhos': AtalhosComponent;
  }
}

declare class Subscription {
  callback: any;
  private canceled?;
  constructor(callback: any, canceled?: boolean);
  isCanceled(): boolean;
  cancel(): void;
}
declare class Observable<T = void> {
  private subscriptions;
  constructor();
  subscribe(callback: any): Subscription;
  notify(data: T): void;
  clean(): void;
}

declare const EditorTextoRicoComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class EditorTextoRicoComponent extends EditorTextoRicoComponent_base {
  texto: string;
  anexos: Anexo$1[];
  notasRodape: NotaRodape[];
  registroEvento: string;
  lexmlEtaConfig: LexmlEtaConfig;
  modo: string;
  onChange: Observable<string>;
  private timerOnChange?;
  quill?: Quill;
  lastSelecion?: any;
  icons: any;
  private alterarLarguraColunaModal;
  private alterarLarguraTabelaModal;
  private alterarLarguraImagemModal;
  private switchRevisaoComponent;
  _textoAntesRevisao?: string;
  get textoAntesRevisao(): string | undefined;
  setTextoAntesRevisao(texto: string | undefined): void;
  private existeRevisaoByModo;
  showAlterarLarguraImagemModal(img: any, width: string): void;
  private showAlterarLarguraColunaModal;
  private hideAlterarLarguraColunaModal;
  private showAlterarLarguraTabelaModal;
  private hideAlterarLarguraTabelaModal;
  private agendarEmissaoEventoOnChange;
  update(changedProperties: PropertyValues): void;
  createRenderRoot(): LitElement;
  stateChanged(state: any): void;
  labelAnexo: () => string;
  render(): TemplateResult;
  constructor();
  private renderBotaoAnexo;
  private timerAlerta?;
  private onTableInTable;
  firstUpdated(): void;
  disconnectedCallback(): void;
  init: () => void;
  menuContextImagem: (ev: MouseEvent) => void;
  onClick: (ev: MouseEvent) => void;
  selectImage: (img: any) => void;
  imageHandler: () => void;
  tamanhoPermitido: (e: any) => boolean;
  alterarLarguraDaColuna: (valor: number) => void;
  alterarLarguraDaTabela: (valor: number) => void;
  alterarLarguraDaImagem: (img: any, valor: number) => void;
  private elTableManagerButton?;
  onSelectionChange: (range: any) => void;
  highLightBotaoGerenciarTabela: (format: any) => void;
  addBotoesExtra: () => void;
  configureTooltip: () => void;
  setTitle: (
    toolbarContainer: HTMLElement,
    seletor: string,
    title: string,
  ) => void;
  setContent: (texto: string, notasRodape?: NotaRodape[]) => void;
  configAbrindoTexto: (valor: boolean) => void;
  updateApenasTexto: () => void;
  updateTexto: () => void;
  alertaGlobalRevisao(): void;
  updateNotasRodape: () => void;
  ajustaHtml: (html?: string) => string;
  undo: () => any;
  redo: () => any;
  atualizaAnexo: (anexo: Anexo$1[]) => void;
  isEditorVazio: () => boolean;
  getTexto: () => string;
  private getNomeSwitch;
  private getNomeBadge;
  private aceitarRevisoes;
  private getQuantidadeDeRevisoes;
  private rejeitarRevisoes;
  private timerAtualizaStatusElementosRevisao?;
  private atualizaStatusElementosRevisao;
  private desabilitaBtn;
  private buildRevisoes;
  private removeRevisoes;
  private atualizaQuantidadeRevisao;
  editarNotaRodape(idNotaRodape: string): void;
  removerNotaRodape(idNotaRodape: string): void;
  reset(): void;
}

declare class AlterarLarguraTabelaColunaModalComponent extends LitElement {
  private slDialog;
  private slAlert;
  private valorLargura;
  private tipo;
  callback: any;
  show(width: string): void;
  hide(): void;
  private alterarLargura;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-alterar-largura-tabela-coluna-modal': AlterarLarguraTabelaColunaModalComponent;
  }
}

declare class AlterarLarguraImagemModalComponent extends LitElement {
  private slDialog;
  private slAlert;
  private valorLargura;
  private tipo;
  callback: any;
  private img;
  show(img: any, width: string): void;
  hide(): void;
  private alterarLargura;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-alterar-largura-imagem-modal': AlterarLarguraImagemModalComponent;
  }
}

declare class Comissao {
  siglaCasaLegislativa: 'SF' | 'CD' | 'CN';
  sigla: string;
  nome: string;
}

declare class Proposicao {
  dataUltimaModificacao: string;
  aplicacao: string;
  versaoAplicacao: string;
  metadados: Metadados;
  epigrafe: Epigrafe;
  pendenciasPreenchimento: string[];
  anexos: Anexo[];
  justificativa: string;
  justificativaAntesRevisao?: string;
  local: string;
  autoria: Autoria;
  opcoesImpressao: OpcoesImpressao;
  revisoes: Revisao[];
  colegiadoApreciador: ColegiadoApreciador;
  notasRodape: NotaRodape[];
  projetoNorma?: ProjetoNorma;
  urn: string;
  sigla: string;
  numero: string;
  ano: string;
  ementa: string;
}
declare type Metadados = {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
};
declare class RefProposicaoReduzida {
  urn: string;
  sigla: string;
  numero: string;
  ano: string;
  ementa: string;
}
declare class ColegiadoApreciador {
  siglaCasaLegislativa?: 'CN' | 'SF' | 'CD';
  tipoColegiado: 'Plenário' | 'Comissão' | 'Plenário via Comissão';
  siglaComissao?: string;
}
declare class Epigrafe {
  texto: string;
  complemento: string;
}
declare class Autoria {
  tipo: TipoAutoria;
  imprimirPartidoUF: boolean;
  quantidadeAssinaturasAdicionaisSenadores: number;
  quantidadeAssinaturasAdicionaisDeputados: number;
  parlamentares: Array<Parlamentar>;
  colegiado?: ColegiadoAutor;
}
declare enum TipoAutoria {
  NAO_IDENTIFICADO = 'N\u00E3o identificado',
  PARLAMENTAR = 'Parlamentar',
  COMISSAO = 'Comiss\u00E3o',
  CASA_LEGISLATIVA = 'Casa Legislativa',
}
declare class Parlamentar {
  identificacao: string;
  nome: string;
  sexo: 'M' | 'F';
  siglaPartido: string;
  siglaUF: string;
  siglaCasaLegislativa: 'SF' | 'CD';
  cargo: string;
}
declare class ColegiadoAutor {
  identificacao: string;
  nome: string;
  sigla: string;
}
declare class OpcoesImpressao {
  imprimirBrasao: boolean;
  textoCabecalho: string;
  reduzirEspacoEntreLinhas: boolean;
  tamanhoFonte: number;
}
declare class Anexo {
  nomeArquivo: string;
  base64: string;
}

declare class DestinoComponent extends LitElement {
  private _autocomplete;
  private _comissoesAutocomplete;
  private isMPV;
  private isPlenario;
  private tipoColegiadoPlenario;
  isMateriaOrcamentaria: boolean;
  private isErroComissaoSelecionada;
  private _proposicao;
  set proposicao(value: RefProposicaoReduzida);
  get proposicao(): RefProposicaoReduzida;
  private _comissoes;
  set comissoes(value: Comissao[]);
  get comissoes(): Comissao[];
  private _comissoesOptions;
  private ajustarValorAutocomplete;
  private _colegiadoApreciador;
  set colegiadoApreciador(value: ColegiadoApreciador$1 | undefined);
  get colegiadoApreciador(): ColegiadoApreciador$1;
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

interface DispositivoBloqueado {
  lexmlId: string;
  bloquearFilhos: boolean;
  motivoBloqueio?: string;
}
declare type TipoCasaLegislativa = 'SF' | 'CD' | 'CN';
/**
 * Parâmetros de inicialização de edição de documento
 */
declare class LexmlEtaParametrosEdicao {
  urn: string;
  sigla: string;
  numero: string;
  ano: string;
  proposicao?: Proposicao;
  isMateriaOrcamentaria: boolean;
  projetoNorma?: ProjetoNorma;
  dispositivosBloqueados?: (string | DispositivoBloqueado)[];
  usuario?: Usuario;
  autoriaPadrao?: {
    identificacao: string;
    siglaCasaLegislativa: 'SF' | 'CD';
  };
  opcoesImpressaoPadrao?: {
    imprimirBrasao: boolean;
    textoCabecalho: string;
    tamanhoFonte: number;
  };
  configuracaoPaginacao?: ConfiguracaoPaginacao;
  casaLegislativa?: TipoCasaLegislativa;
}
declare const LexmlEtaComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class LexmlEtaComponent extends LexmlEtaComponent_base {
  existeObserverEmenda: boolean;
  totalAlertas: number;
  exibirAjuda: boolean;
  parlamentares: Parlamentar$1[];
  comissoes: Comissao[];
  lexmlEmendaConfig: LexmlEtaConfig;
  private urn;
  private isMateriaOrcamentaria;
  private projetoNorma;
  private casaLegislativa;
  private parlamentaresCarregados;
  private comissoesCarregadas;
  private emendarTextoSubstitutivo;
  private updateState;
  private notasRodape;
  autoria: Autoria$1;
  _lexmlEta?: LexmlEtaProposicaoComponent;
  _lexmlJustificativa: any;
  _lexmlDestino?: DestinoComponent;
  _lexmlAutoria: any;
  _lexmlData: any;
  _lexmlOpcoesImpressao: any;
  _tabsEsquerda: any;
  _tabsDireita: any;
  private slSplitPanel;
  getParlamentares(): Promise<Parlamentar$1[]>;
  getComissoes(siglaCasaLegislativa: string): Promise<Comissao[]>;
  atualizaListaComissoes(): void;
  private montarLocalFromColegiadoApreciador;
  private montarProposicaoPorUrn;
  getProposicao(): any;
  getEpigrafe(projetoNorma: any): Epigrafe$1;
  private getPendenciasPreenchimentoEmenda;
  private getRevisoes;
  inicializarEdicao(params: LexmlEtaParametrosEdicao): Promise<void>;
  private inicializaCasaLegislativa;
  private inicializaProposicao;
  getEmentaFromProjetoNorma(projetoNorma: any): string;
  stateChanged(state: any): void;
  private emitiEventoOnRevisao;
  private emitirEventoFatalError;
  private desativarMarcaRevisao;
  setUsuario(usuario?: Usuario): void;
  private setProposicao;
  private resetaProposicao;
  private montarAutoriaPadrao;
  private montarOpcoesImpressaoPadrao;
  constructor();
  createRenderRoot(): LitElement;
  private MOBILE_WIDTH;
  private splitPanelPosition;
  private sizeMode;
  private updateLayoutSplitPanel;
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleResize: () => void;
  protected firstUpdated(): void;
  private pesquisarAlturaParentElement;
  private ajustarAltura;
  private onChange;
  buildAlertaJustificativa(): void;
  disparaAlerta(): void;
  getJustificativa(): string;
  limparAlertas(): void;
  showAlertaEmendaTextoLivre(): void;
  mostrarDialogDisclaimerRevisao(): void;
  private updateView;
  render(): TemplateResult;
  tabIsVisible(tab: string): boolean;
  onChangeNotasRodape(): void;
  renderNotasRodape(): TemplateResult;
  focusOnTab(tabName: string): void;
  localizarNotaRodape(idNotaRodape: any): void;
  selecionarNotaRodape(idNotaRodape: any): void;
  removerPulsarNotaRodape(idNotaRodape: any): void;
  editarNotaRodape(event: any): void;
  removerNotaRodape(event: any): void;
  getEditorTextoRicoFromElement(element: any): any;
  getTabFromElement(element: any): any;
  getRestricoesConhecidas(): string[];
}

declare const LexmlEtaProposicaoComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class LexmlEtaProposicaoComponent extends LexmlEtaProposicaoComponent_base {
  lexmlEtaConfig: LexmlEtaConfig;
  private editorComponent;
  private urn;
  private projetoNorma?;
  private dispositivosEmenda;
  private revisoes;
  createRenderRoot(): LitElement;
  inicializarEdicao(urn: string, params?: LexmlEtaParametrosEdicao): void;
  setDispositivosERevisoesEmenda(revisoes?: Revisao[]): void;
  getProjetoAtualizado(): any;
  getAnexos(): Anexo$1[];
  atualizaAnexos(anexos: Anexo$1[]): void;
  private loadProjetoNorma;
  private _timerLoadEmenda;
  private loadEmenda;
  render(): TemplateResult;
}

declare class AutoriaComponent extends LitElement {
  static styles: lit.CSSResult[];
  private _btnNovoParlamentar;
  private _inputCargos;
  private _autocompletes;
  private _nomesAutocomplete;
  private _podeIncluirParlamentar;
  private _parlamentaresAutocomplete;
  set parlamentares(value: Parlamentar$1[]);
  get parlamentares(): Parlamentar$1[];
  private _autoriaOriginal?;
  private _autoria;
  set autoria(value: Autoria$1 | undefined);
  get autoria(): Autoria$1 | undefined;
  getAutoriaAtualizada(): Autoria$1;
  render(): TemplateResult;
  private _exibirTemplateTipoAutoria;
  private _getTipoAutoriaTemplate;
  private _getParlamentaresTemplate;
  private _getParlamentarAutocompleteTemplate;
  private _getAssinaturasAdicionaisTemplate;
  updated(): void;
  private _isAllAutoresOk;
  private _incluirNovoParlamentar;
  private _moverParlamentar;
  private _excluirParlamentar;
  private _timerValidacao;
  protected _isProcessandoValidacao: boolean;
  private _validarNomeParlamentar;
  private timerEmitirEventoOnChange;
  private _atualizarParlamentar;
  private _atualizarCargo;
  private _atualizarQtdAssinaturasAdicionaisSenadores;
  private _atualizarQtdAssinaturasAdicionaisDeputados;
  private _atualizarExibirPartidoUF;
  private _isProcessandoMovimentacao;
  private _lastIndexAutoCompleted;
  private _handleKeyUp;
  private _focarAutocompleteOuCargo;
  private _handleClickAutoComplete;
  private agendarEmissaoEventoOnChange;
  private emitirEventoOnChange;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-autoria': AutoriaComponent;
  }
}

declare class LexmlAutocomplete extends LitElement {
  items: string[];
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
    'lexml-autocomplete': LexmlAutocomplete;
  }
}

declare class DataComponent extends LitElement {
  static styles: lit.CSSResult;
  inputData: HTMLInputElement;
  optionNaoInformarData: any;
  data: string;
  updated(): void;
  render(): TemplateResult;
  private getCurrentDate;
  private resetDate;
  private setDate;
  private timerOnChange;
  private agendarEmissaoEventoOnChange;
  private emitirEventoOnChange;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-data': DataComponent;
  }
}

declare const AlertasComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class AlertasComponent extends AlertasComponent_base {
  static styles: lit.CSSResult;
  alertas: Alerta[];
  stateChanged(state: any): void;
  getAlertIcon(tipoAlerta: TipoMensagem): TemplateResult;
  limparAlertas(): void;
  removeAlertaById(id: string): void;
  updated(changedProperties: PropertyValues): void;
  render(): TemplateResult;
}

declare const AjudaComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class AjudaComponent extends AjudaComponent_base {
  static styles: lit.CSSResult;
  private elementoSelecionado?;
  private acoesMenu;
  stateChanged(state: any): void;
  private processarStateEvents;
  private atualizarAjuda;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ajuda': AjudaComponent;
  }
}

declare class AjudaModalComponent extends LitElement {
  private slDialog;
  show(): void;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-ajuda-modal': AjudaModalComponent;
  }
}

declare class SufixosModalComponent extends LitElement {
  private step;
  private slDialog;
  static styles: lit.CSSResult;
  show(): void;
  private handleSwitchChange;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-sufixos-modal': SufixosModalComponent;
  }
}

declare class AtalhosModalComponent extends LitElement {
  private slDialog;
  show(): void;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-atalhos-modal': AtalhosModalComponent;
  }
}

declare class OpcoesImpressaoComponent extends LitElement {
  tamanhoFonte: SlSelect;
  private _opcoesImpressao;
  set opcoesImpressao(value: OpcoesImpressao$1);
  get opcoesImpressao(): OpcoesImpressao$1;
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
    'lexml-opcoes-impressao': OpcoesImpressaoComponent;
  }
}

declare const SwitchRevisaoComponent_base: (new (...args: any[]) => {
  _storeUnsubscribe: redux.Unsubscribe;
  connectedCallback(): void;
  disconnectedCallback(): void;
  stateChanged(
    _state: redux.EmptyObject & {
      appReducer: any;
      elementoReducer: any;
    },
  ): void;
  readonly isConnected: boolean;
}) &
  typeof LitElement;
declare class SwitchRevisaoComponent extends SwitchRevisaoComponent_base {
  quantidadeRevisao: number;
  nomeSwitch: string;
  nomeBadgeQuantidadeRevisao: string;
  checkedRevisao: boolean;
  modo: string;
  onChange: Observable<string>;
  update(changedProperties: PropertyValues): void;
  createRenderRoot(): LitElement;
  stateChanged(state: any): void;
  private processarStateEvents;
  render(): TemplateResult;
  constructor();
  private atualizaQuantidadeRevisao;
  ativarDesativarMarcaDeRevisao(consideraQuantidade?: boolean): void;
  private checkedSwitchMarcaAlteracao;
}

declare class SubstituicaoTermoComponent extends LitElement {
  static styles: lit.CSSResult;
  elTipoSubstituicaoTermo: HTMLInputElement;
  elTermoASerSubstituido: HTMLInputElement;
  elNovoTermo: HTMLInputElement;
  elAlertaTermoASerSubstituido: HTMLSpanElement;
  elAlertaNovoTermo: HTMLSpanElement;
  elFlexaoGenero: HTMLInputElement;
  elFlexaoNumero: HTMLInputElement;
  private timerEmitirEventoOnChange;
  private onDadosAlterados;
  private agendarEmissaoEventoOnChange;
  private emitirEventoOnChange;
  getSubstituicaoTermo(): SubstituicaoTermo;
  setSubstituicaoTermo(substituicaoTermo: SubstituicaoTermo): void;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'lexml-substituicao-termo': SubstituicaoTermoComponent;
  }
}

declare class ProposicaoDivididaDialog extends LitElement {
  private slDialog;
  show(): void;
  static styles: lit.CSSResult;
  render(): TemplateResult;
}
declare global {
  interface HTMLElementTagNameMap {
    'proposicao-dividida-modal': ProposicaoDivididaDialog;
  }
}

export {
  AjudaComponent,
  AjudaModalComponent,
  AlertasComponent,
  AlterarLarguraImagemModalComponent,
  AlterarLarguraTabelaColunaModalComponent,
  ArticulacaoComponent,
  AtalhosModalComponent,
  AutoriaComponent,
  DataComponent,
  DestinoComponent,
  EditorComponent,
  EditorTextoRicoComponent,
  ElementoComponent,
  AtalhosComponent as HelpComponent,
  LexmlAutocomplete,
  LexmlEtaComponent,
  LexmlEtaConfig,
  LexmlEtaParametrosEdicao,
  LexmlEtaProposicaoComponent,
  OpcoesImpressaoComponent,
  ProposicaoDivididaDialog,
  SubstituicaoTermoComponent,
  SufixosModalComponent,
  SwitchRevisaoComponent,
  Usuario,
};
