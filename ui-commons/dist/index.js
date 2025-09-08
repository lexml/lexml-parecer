import '@awesome.me/webawesome/dist/components/input/input.js';
import { css, LitElement, html } from 'lit';
import { state, customElement, property, query } from 'lit/decorators.js';
import '@awesome.me/webawesome/dist/components/radio/radio.js';
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/callout/callout.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

// Tipo string para salvar o nome em vez do índice
var TipoMensagem;
(function (TipoMensagem) {
    TipoMensagem["INFO"] = "INFO";
    TipoMensagem["WARNING"] = "WARNING";
    TipoMensagem["ERROR"] = "ERROR";
    TipoMensagem["CRITICAL"] = "CRITICAL";
    TipoMensagem["SUCCESS"] = "SUCCESS";
})(TipoMensagem || (TipoMensagem = {}));
var AutoFix;
(function (AutoFix) {
    AutoFix["INFORMAR_NORMA"] = "\u00C9 necess\u00E1rio informar a norma a ser alterada";
    AutoFix["OMISSIS_ANTES"] = "\u00C9 necess\u00E1rio uma linha pontilhada antes deste dispositivo";
    AutoFix["OMISSIS_SEQUENCIAIS"] = "N\u00E3o pode haver mais de uma linha pontilhada sequencialmente";
    AutoFix["RENUMERAR_DISPOSITIVO"] = "Numere o dispositivo";
})(AutoFix || (AutoFix = {}));

let LexmlUiCommons = class LexmlUiCommons extends LitElement {
    constructor() {
        super(...arguments);
        // ******************************************* Itens para o Teste do Autocomplete
        this._nomesParlamentares = [
            'Davi Alcolumbre',
            'Rodrigo Pacheco',
            'Jaques Wagner',
            'Randolfe Rodrigues',
            'Eliziane Gama',
            'Sérgio Moro',
            'Eduardo Braga',
            'Tasso Jereissati',
            'Omar Aziz',
            'Simone Tebet',
        ];
        this._nomeSelecionado = '';
        this._onAutocomplete = (e) => {
            this._nomeSelecionado = e.detail.value; // item escolhido da lista
        };
        this._onInput = (e) => {
            this._nomeSelecionado = e.target.value ?? '';
        };
        // ******************************************* Fim dos Itens para o Autocomplete
        // ******************************************* Itens para o Teste do Alert
        this._tipoIdx = 0;
        // Recebe o total via seletorHost (o lexml-ui-alertas seta isso)
        this.totalAlertas = 0;
        // Demo local de alertas (substitui Redux neste teste)
        this.alertasDemo = [
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
        this.tiposCiclo = [
            TipoMensagem.INFO,
            TipoMensagem.WARNING,
            TipoMensagem.ERROR,
            TipoMensagem.CRITICAL,
            TipoMensagem.SUCCESS,
        ];
        this.labelTipo = {
            [TipoMensagem.INFO]: 'INFO',
            [TipoMensagem.WARNING]: 'WARNING',
            [TipoMensagem.ERROR]: 'ERROR',
            [TipoMensagem.CRITICAL]: 'CRITICAL',
            [TipoMensagem.SUCCESS]: 'SUCCESS',
        };
        this.adicionarAlertaDemo = () => {
            const tipo = this.tiposCiclo[this._tipoIdx];
            this._tipoIdx = (this._tipoIdx + 1) % this.tiposCiclo.length;
            const agora = new Date().toLocaleTimeString();
            const novo = {
                id: this.gerarId(),
                tipo,
                mensagem: `[${this.labelTipo[tipo]}] Alerta criado As disparidades são ainda maiores quando se avalia as diferentes regiões do Brasil: no Norte, a média de investimento anual é de R$ 66,52 por habitante e, no Nordeste, de R$ 87,21 — muito abaixo dos R$ 171,49 registrados para o Sudeste. Os dados são do Sistema Nacional de Informações em Saneamento Básico (Sinisa – 2023) Fonte: Agência Senado ${agora}.`,
                podeFechar: true,
            };
            this.alertasDemo = [novo, ...this.alertasDemo];
        };
        this.removerAlertaDemo = (id) => {
            this.alertasDemo = this.alertasDemo.filter(a => a.id !== id);
        };
        this.limparAlertasDemo = () => {
            this.alertasDemo = [];
        };
        // ******************************************* Fim dos Itens para o Teste do Alert
        // ******************************************* Itens para o Teste do Destino
        this.comissoesTeste = [
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCDD',
                nome: 'Comissão de Comunicação e Direito Digital',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CSP',
                nome: 'Comissão de Segurança Pública',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CDD',
                nome: 'Comissão de Defesa da Democracia',
            },
            { siglaCasaLegislativa: 'SF', sigla: 'CEsp', nome: 'Comissão de Esporte' },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CTFC',
                nome: 'Comissão de Transparência, Governança, Fiscalização e Controle e Defesa do Consumidor',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CRA',
                nome: 'Comissão de Agricultura e Reforma Agrária',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CDR',
                nome: 'Comissão de Desenvolvimento Regional e Turismo',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCT',
                nome: 'Comissão de Ciência, Tecnologia, Inovação e Informática',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CMA',
                nome: 'Comissão de Meio Ambiente',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CI',
                nome: 'Comissão de Serviços de Infraestrutura',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CRE',
                nome: 'Comissão de Relações Exteriores e Defesa Nacional',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CE',
                nome: 'Comissão de Educação e Cultura',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CAS',
                nome: 'Comissão de Assuntos Sociais',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CCJ',
                nome: 'Comissão de Constituição, Justiça e Cidadania',
            },
            {
                siglaCasaLegislativa: 'SF',
                sigla: 'CAE',
                nome: 'Comissão de Assuntos Econômicos',
            },
        ];
    }
    gerarId() {
        return 'a' + Math.random().toString(36).slice(2, 8);
    }
    // ******************************************* Fim dos Itens para o Teste do Destino
    render() {
        return html `
      <h2>Start Projeto LEXML UI COMMONS</h2>
      <h2>Teste wa-input</h2>
      <wa-input label="Texto" placeholder="Digite um texto"></wa-input>
      <br />
      <h2>Teste AutoCompletComponent</h2>
      <lexml-ui-autocomplete
        label="Parlamentar"
        .items=${this._nomesParlamentares}
        .value=${this._nomeSelecionado}
        @autocomplete=${this._onAutocomplete}
        @input=${this._onInput}
      ></lexml-ui-autocomplete>
      <br />
      <h2>Teste DestinoComponent</h2>
      <lexml-ui-destino .comissoes=${this.comissoesTeste}></lexml-ui-destino>
      <br />
      <h2>Teste DataComponent</h2>
      <lexml-ui-data></lexml-ui-data>
      <br />
      <h2>Teste OpcoesImpressaoComponent</h2>
      <lexml-ui-opcoes-impressao></lexml-ui-opcoes-impressao>
      <h2>Teste AlertasComponent</h2>
      <br />
      <div class="linha">
        <h2 style="margin: 0">Teste AlertasComponent</h2>
        <div id="contadorAvisos">
          <wa-badge attention="none">${this.totalAlertas}</wa-badge>
        </div>
        <button @click=${this.adicionarAlertaDemo}>Adicionar alerta</button>
        <button @click=${this.limparAlertasDemo}>Limpar alertas</button>
      </div>

      <div class="caixa">
        <lexml-ui-alertas
          .alertas=${this.alertasDemo}
          .removeAlert=${(id) => this.removerAlertaDemo(id)}
          .clearAlerts=${() => this.limparAlertasDemo()}
          .seletorHost=${'lexml-ui-commons'}
          .seletorBadge=${'#contadorAvisos wa-badge'}
          @alertas:alterados=${(e) => {
            this.totalAlertas = e.detail.total;
        }}
        ></lexml-ui-alertas>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    `;
    }
};
LexmlUiCommons.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--lexml-ui-commons-text-color, #000);
    }
    .linha {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .caixa {
      background: #f2f2f2;
      padding: 12px;
      width: 1000px;
      border-radius: 8px;
    }
  `;
__decorate([
    state()
], LexmlUiCommons.prototype, "_nomesParlamentares", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "_nomeSelecionado", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "_tipoIdx", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "totalAlertas", void 0);
__decorate([
    state()
], LexmlUiCommons.prototype, "alertasDemo", void 0);
LexmlUiCommons = __decorate([
    customElement('lexml-ui-commons')
], LexmlUiCommons);

let AutocompleteAsync = class AutocompleteAsync extends LitElement {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.label = '';
        this.items = [];
        this.disabled = false;
        this.opened = false;
        this.async = true;
        this.maxSuggestions = 10;
        this.onSearch = (value) => console.log('Texto da pesquisa', value);
        this.onSelect = (value) => console.log('Item selecionado:', value);
        this.onChange = (value) => console.log('Mudança texto:', value);
        this.onClick = (value) => console.log('Click:', value);
        this._interval = 1000;
        this._bound = {};
        this._blur = false;
        this._mouseEnter = false;
        this._search = () => {
            const { value } = this.contentElement;
            if (this.async) {
                clearTimeout(this._timer);
                if (value.length >= 5 || !this.async) {
                    this._timer = setTimeout(() => {
                        this.onSearch(value);
                    }, this.async ? this._interval : 0);
                }
            }
            else {
                this.onSearch(value);
            }
        };
    }
    render() {
        return html `
      <style>
        .suggest-container {
          position: relative;
        }

        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid grey;
          background: white;
        }
        li {
          padding: 4px;
          cursor: pointer;
        }
        li.active {
          background: whitesmoke;
        }
        [hidden] {
          display: none;
        }

        .lexml-autocomplete-input {
          width: 100%;
        }
        wa-input {
          font-size: 14px;
        }
        @media (max-width: 576px) {
          .lexml-autocomplete-label {
            width: calc(100% - 2px);
            display: block;
          }
          .lexml-autocomplete-input {
            width: calc(100% - 2px);
          }
        }
      </style>
      <slot id="dropdown-input">
        <wa-input
          id="defaultInput"
          class="lexml-autocomplete-input"
          type="text"
          label=${this.label}
          placeholder=${this.placeholder}
          .value=${this.value?.description || ''}
          @change=${(e) => this._handleChange(e.target.value)}
          @click=${(e) => this._handleClick(e.target.value)}
          ?disabled=${this.disabled}
        ></wa-input>
      </slot>
      <div class="suggest-container">
        <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
        >
          ${this.items.map((item) => html `<li @click=${() => this.autocomplete(item)}>
                ${item.description}
              </li>`)}
        </ul>
      </div>
    `;
    }
    /**
     * Input element getter
     */
    get contentElement() {
        if (this._inputEl)
            return this._inputEl; // Cache
        if (!this.hasUpdated)
            return undefined; // No shadow root, no element to use
        const slotElement = this.shadowRoot.getElementById('dropdown-input');
        const slotInputList = slotElement.assignedElements();
        this._inputEl = slotInputList.length
            ? slotInputList[0]
            : this.shadowRoot.getElementById('defaultInput');
        return this._inputEl;
    }
    /**
     * Value getter from input element.
     */
    get value() {
        return this.contentElement && this.contentElement.value;
    }
    /**
     * Value setter to input element.
     */
    set value(value) {
        if (!this.contentElement) {
            this._tempValue = value;
            return;
        }
        this.contentElement.value = value;
    }
    firstUpdated() {
        this._suggestionEl = this.shadowRoot.getElementById('suggestions');
        this._suggestionEl.style = 'max-height: 250px; overflow: scroll';
        this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        this._bound.onKeyDown = this._handleKeyDown.bind(this);
        this._bound.onKeyUp = this._handleKeyUp.bind(this);
        this._bound.onFocus = this._handleFocus.bind(this);
        this._bound.onBlur = this._handleBlur.bind(this);
        this._bound.onChange = this._handleChange.bind(this);
        this._bound.onClick = this._handleClick.bind(this);
        this.contentElement.addEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.addEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.addEventListener('focus', this._bound.onFocus);
        this.contentElement.addEventListener('blur', this._bound.onBlur);
        this.contentElement.addEventListener('wa-input', this._bound.onChange);
        this.contentElement.addEventListener('click', this._bound.onClick);
        if (this._tempValue !== undefined) {
            this.contentElement.value = this._tempValue;
        }
    }
    disconnectedCallback() {
        if (!this.contentElement)
            return; // no events to remove
        this.contentElement.removeEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.removeEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.removeEventListener('focus', this._bound.onFocus);
        this.contentElement.removeEventListener('blur', this._bound.onBlur);
        this.contentElement.removeEventListener('sl-input', this._bound.onChange);
        this.contentElement.removeEventListener('click', this._bound.onClick);
    }
    focus(options) {
        if (this.contentElement) {
            this.contentElement.focus(options);
        }
    }
    updated(changed) {
        if (changed.has('items')) {
            this.items.length > 1 ||
                (this.items.length === 1 && this.items[0] !== this.contentElement.value)
                ? this.open()
                : this.close();
        }
        if (changed.has('opened') &&
            this.opened &&
            this._suggestionEl.childElementCount) {
            // Highlight the first when there are suggestions
            // eslint-disable-next-line prefer-destructuring
            this._highlightedEl = this._suggestionEl.children[0];
            this._highlightedEl.classList.add('active');
        }
    }
    /**
     * Open suggestions.
     */
    open() {
        if (this._suggestionEl.style.width === '0px') {
            this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        }
        if (this.items.length) {
            this.opened = true;
        }
    }
    /**
     * Close suggestions.
     */
    close() {
        this.opened = false;
        this._highlightedEl = null;
    }
    /**
     * Autocomplete input with `value`.
     * @param {String} value
     */
    autocomplete(value) {
        this.contentElement.value = value;
        this.onSelect(value);
        this.close();
    }
    _highlightPrev() {
        if (!this._highlightedEl || !this._highlightedEl.previousElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.previousElementSibling;
        this._highlightedEl.classList.add('active');
    }
    _highlightNext() {
        if (!this._highlightedEl || !this._highlightedEl.nextElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.nextElementSibling;
        this._highlightedEl.classList.add('active');
    }
    // eslint-disable-next-line class-methods-use-this
    _handleChange(value) {
        this.onChange(value);
    }
    _handleKeyDown(ev) {
        // Prevent up and down from behaving as home and end on some browsers
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    _handleKeyUp(ev) {
        switch (ev.key) {
            case 'ArrowUp':
                if (this._highlightedEl?.previousElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightPrev();
                }
                break;
            case 'ArrowDown':
                if (this._highlightedEl?.nextElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightNext();
                }
                break;
            case 'Enter':
                // eslint-disable-next-line no-unused-expressions
                this._highlightedEl && this._highlightedEl.click();
                this.contentElement.blur();
                break;
            default:
                this._search();
        }
    }
    _handleFocus() {
        this._blur = false;
        // eslint-disable-next-line no-unused-expressions
        this.items.length > 1 && this.open();
    }
    _handleBlur() {
        this._blur = true;
        // eslint-disable-next-line no-unused-expressions
        setTimeout(() => this.close(), 200);
        //this.items = [];
    }
    // Handle mouse change focus to suggestions
    _handleItemMouseEnter() {
        this._mouseEnter = true;
    }
    _handleItemMouseLeave() {
        this._mouseEnter = false;
        // eslint-disable-next-line no-unused-expressions
        this._blur && setTimeout(() => this.close(), 500); // Give user some slack before closing
    }
    _handleClick(value) {
        this.onClick(value);
    }
};
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "placeholder", void 0);
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "label", void 0);
__decorate([
    property({ type: Array, reflect: true })
], AutocompleteAsync.prototype, "items", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "opened", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AutocompleteAsync.prototype, "async", void 0);
__decorate([
    property({ type: Number })
], AutocompleteAsync.prototype, "maxSuggestions", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onSearch", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onSelect", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onChange", void 0);
__decorate([
    property({ type: Function })
], AutocompleteAsync.prototype, "onClick", void 0);
__decorate([
    property({ type: String })
], AutocompleteAsync.prototype, "value", null);
AutocompleteAsync = __decorate([
    customElement('autocomplete-ui-async')
], AutocompleteAsync);
class Option {
    constructor(value, description) {
        this.description = description;
        this.value = value;
    }
}

class ColegiadoApreciador {
    constructor() {
        this.siglaCasaLegislativa = 'CN';
        this.tipoColegiado = 'Plenário';
    }
}

class RefProposicaoEmendada {
    constructor() {
        this.urn = '';
        this.sigla = '';
        this.numero = '';
        this.ano = '';
        this.ementa = '';
        this.identificacaoTexto = '';
        this.emendarTextoSubstitutivo = false;
    }
}

const autoriaCss = css `
  .lexml-autoria {
    display: block;
    font-size: var(--sl-font-size-small);
    font-family: var(--sl-font-sans);
    max-width: 700px;
  }

  .lexml-autocomplete {
    width: 100%;
  }

  .grid-autoria {
    display: grid;
    grid-template-columns: 3fr 2fr 250px;
  }

  .autoria-grid {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    padding: 0 0 4px 0;
    flex-wrap: wrap;
  }

  .autoria-grid--col1 {
    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .autoria-grid--col2 {
    flex: none;
    order: 1;
    flex-grow: 1;
  }

  .autoria-grid--col3 {
    flex: none;
    order: 2;
    flex-grow: 1;
  }

  [class^='autoria-grid--'] {
    margin: 0px 2px;
  }

  .autoria-grid:first-child {
    padding: 0 0 2px 0;
  }

  .autoria-header {
    width: 180px;
    padding: 0px 2px;
  }

  .autoria-buttons {
    width: 124px;
    text-align: right;
  }

  .autoria-input {
    width: 100%;
    margin: 0px;
  }

  .autoria-button {
    background-color: white;
    border: 1px solid #555;
    border-radius: 2px;
    padding: 2px 4px;
    cursor: pointer;
  }

  .autoria-label {
    display: none;
  }

  .autoria-icon {
    background-color: #555;
  }

  .icon-up {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z'/></svg>");
  }

  .icon-down {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>");
  }

  .icon-delete {
    display: block;
    width: 24px;
    height: 24px;
    -webkit-mask-position-y: 1px;
    -webkit-mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
    mask-image: url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' class='autoria-iccm' viewBox='0 0 16 16'><path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'/><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'/></svg>");
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .assinaturas-adicionais {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    vertical-align: center;
    gap: 10px;
  }

  .assinaturas-adicionais div {
    padding-top: 5px;
  }

  .assinaturas-adicionais .autoria-input {
    display: block;
    max-width: 400px;
  }

  @media (max-width: 576px) {
    .autoria-grid {
      flex-direction: column;
    }

    .autoria-labels {
      display: none;
    }
    .autoria-label {
      display: block;
    }

    .autoria-buttons {
      width: calc(100% - 3px);
    }

    .autoria-input {
      width: calc(100% - 2px);
    }

    [class^='autoria-grid--'] {
      width: 100%;
      padding: 2px 0;
    }
  }
`;

let DestinoComponent = class DestinoComponent extends LitElement {
    set proposicao(value) {
        this._proposicao = value;
        this.isMPV = false;
        if (this._proposicao.sigla === 'MPV') {
            this.isMPV = true;
            this._colegiadoApreciador.tipoColegiado = 'Comissão';
            if (this.isMateriaOrcamentaria) {
                this._colegiadoApreciador.siglaComissao = 'CMO';
                this._autocomplete.value = `${this._colegiadoApreciador.siglaComissao} - COMISSÃO MISTA DE PLANOS, ORÇAMENTOS PÚBLICOS E FISCALIZAÇÃO`;
            }
            else {
                this._colegiadoApreciador.siglaComissao = `CMMPV ${this._proposicao.numero}/${this._proposicao.ano}`;
                this._autocomplete.value = `${this._colegiadoApreciador.siglaComissao} - COMISSÃO MISTA DA MEDIDA PROVISÓRIA N° ${this._proposicao.numero}, DE ${this._proposicao.ano}`;
            }
        }
        this.requestUpdate();
    }
    constructor() {
        super();
        this._comissoesAutocomplete = [];
        this.isMPV = false;
        this.isPlenario = false;
        this.tipoColegiadoPlenario = false;
        this.isMateriaOrcamentaria = false;
        this.isErroComissaoSelecionada = false;
        this.criticalType = 'CRITICAL';
        this._comissoes = [];
        this._comissoesOptions = [];
        this._colegiadoApreciador = new ColegiadoApreciador();
        this._colegiadoApreciador.tipoColegiado = 'Plenário';
        this.tipoColegiadoPlenario = true;
    }
    get proposicao() {
        return this._proposicao;
    }
    set comissoes(value) {
        this.isPlenario = false;
        if (!this._comissoes || this._comissoes.length === 0) {
            this._comissoes = value ? value : [];
            this._comissoesOptions = this.comissoes.map(comissao => new Option(comissao.sigla, `${comissao.sigla} - ${comissao.nome}`));
            this.ajustarValorAutocomplete();
            this.requestUpdate();
        }
        if (typeof value === 'undefined') {
            this.isPlenario = true;
        }
    }
    get comissoes() {
        return this._comissoes;
    }
    ajustarValorAutocomplete() {
        if (this._colegiadoApreciador?.siglaComissao) {
            const option = this._comissoesOptions.find(op => op.value === this._colegiadoApreciador.siglaComissao) || new Option('', '');
            this._selecionarComissao(option);
            this._autocomplete.value =
                option.description || this._colegiadoApreciador.siglaComissao;
        }
    }
    set colegiadoApreciador(value) {
        this._colegiadoApreciador = value ? value : new ColegiadoApreciador();
        this.tipoColegiadoPlenario =
            this._colegiadoApreciador.tipoColegiado === 'Plenário';
        if (this.tipoColegiadoPlenario) {
            this.ajustarTipoColegiadoPlenario();
        }
        else if (this._colegiadoApreciador.siglaComissao) {
            this.ajustarValorAutocomplete();
        }
        else {
            this._autocomplete.value = '';
        }
        if (!this.tipoColegiadoPlenario &&
            !this._colegiadoApreciador.siglaComissao) {
            this.criarAlertaErroComissao();
        }
        this.requestUpdate();
    }
    get colegiadoApreciador() {
        return this._colegiadoApreciador;
    }
    render() {
        return html `
      <style>
        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 1em;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          flex-wrap: wrap;
          padding: 20px 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          max-width: 655px;
        }

        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
        }

        .mensagem {
          font-size: 0.8em;
          font-weight: normal;
          text-align: left;
          border: 1px solid;
          padding: 4px 10px;
          margin: 10px 0;
          display: inline-block;
          border-radius: 2px;
          font-family: var(--wa-font-sans);
        }

        .mensagem--danger {
          color: #721c24;
          background-color: #f8d7da;
          border-color: #f5c6cb;
        }
        wa-radio {
          font-size: 14px;
        }
      </style>
      <fieldset class="lexml-destino">
        <legend>Destino</legend>
        <div>
          <wa-radio-group
            id="tipoColegiado"
            .value=${this._colegiadoApreciador?.tipoColegiado}
          >
            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Plenário')}
              @wa-change=${(evt) => evt.target?.checked && this.updateTipoColegiado('Plenário')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Plenário'}
              value="Plenário"
              ?disabled=${this.isMPV || this.isPlenario}
              >Plenário</wa-radio
            >
            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Comissão')}
              @wa-change=${(evt) => evt.target?.checked && this.updateTipoColegiado('Comissão')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Comissão'}
              value="Comissão"
              ?disabled=${this.isMPV || this.isPlenario}
              >Comissão</wa-radio
            >

            <wa-radio
              name="tipoColegiado"
              @click=${() => this.updateTipoColegiado('Plenário via Comissão')}
              @wa-change=${(evt) => evt.target?.checked &&
            this.updateTipoColegiado('Plenário via Comissão')}
              ?checked=${this._colegiadoApreciador?.tipoColegiado ===
            'Plenário via Comissão'}
              value="Plenário via Comissão"
              ?disabled=${this.isMPV || this.isPlenario}
              >Plenário via Comissão</wa-radio
            >
          </wa-radio-group>
        </div>
        <div style="width:100%;margin-top:10px">
          <autocomplete-ui-async
            id="auto-complete-async"
            label="Comissão"
            .async=${false}
            ?readonly=${this.isMPV || this.isPlenario}
            placeholder="ex: Comissão"
            .items=${this._comissoesAutocomplete}
            .onSearch=${(value) => this._filtroComissao(value)}
            .onSelect=${(value) => this._selecionarComissao(value)}
            .onChange=${() => true}
            .onClick=${() => this._exibirComissoes()}
            @blur=${this._blurAutoComplete}
            ?disabled=${this.isMPV ||
            this.isPlenario ||
            this.tipoColegiadoPlenario ||
            !this.comissoes?.length}
          ></autocomplete-ui-async>
          ${this.isErroComissaoSelecionada
            ? html `
                <div class="mensagem mensagem--danger">
                  A comissão de destino deve ser selecionada.
                </div>
              `
            : ''}
        </div>
      </fieldset>
    `;
    }
    _exibirComissoes() {
        this._autocomplete.value = '';
        this._comissoesAutocomplete = [];
    }
    criarAlertaErroComissao() {
        this.isErroComissaoSelecionada = true;
        const alerta = {
            id: 'alerta-global-comissao-nao-selecionada',
            tipo: this.criticalType,
            mensagem: 'A comissão de destino deve ser selecionada.',
            podeFechar: false,
        };
        if (this.addAlert) {
            this.addAlert(alerta);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:add', {
                bubbles: true,
                composed: true,
                detail: alerta,
            }));
        }
    }
    removerAlertaErroComissao() {
        this.isErroComissaoSelecionada = false;
        const id = 'alerta-global-comissao-nao-selecionada';
        if (this.removeAlert) {
            this.removeAlert(id);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:remove', {
                bubbles: true,
                composed: true,
                detail: { id },
            }));
        }
    }
    updateTipoColegiado(value) {
        if (!this.isMPV && !this.isPlenario) {
            this._colegiadoApreciador.tipoColegiado = value;
            this.tipoColegiadoPlenario =
                this._colegiadoApreciador.tipoColegiado === 'Plenário';
            if (this.tipoColegiadoPlenario)
                this.ajustarTipoColegiadoPlenario();
            this.requestUpdate();
        }
    }
    _selecionarComissao(item) {
        if (!item?.value)
            return;
        // Garante o objeto
        if (!this._colegiadoApreciador) {
            this._colegiadoApreciador = new ColegiadoApreciador();
        }
        const comissaoSelecionada = this._comissoes.find(op => op.sigla === item.value);
        if (!comissaoSelecionada)
            return;
        this._colegiadoApreciador.siglaCasaLegislativa =
            comissaoSelecionada.siglaCasaLegislativa;
        this._colegiadoApreciador.siglaComissao = comissaoSelecionada.sigla;
        this.removerAlertaErroComissao();
    }
    _filtroComissao(query) {
        const regex = new RegExp(query, 'i');
        this._comissoesAutocomplete = this._comissoesOptions.filter(comissao => comissao.description.match(regex));
    }
    _blurAutoComplete() {
        if (!this.comissoes?.length)
            return;
        setTimeout(() => {
            const comissao = this._autocomplete.value ?? '';
            const comissaoSelecionada = this._comissoesOptions.find(comissaoOp => comissao === comissaoOp.description);
            if (!comissaoSelecionada) {
                this._colegiadoApreciador.siglaComissao = '';
                this.criarAlertaErroComissao();
                this._autocomplete.value = '';
            }
        }, 200);
    }
    emitirEventoOnChange(origemEvento) {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento,
            },
        }));
    }
    ajustarTipoColegiadoPlenario() {
        this._autocomplete.value = '';
        this._colegiadoApreciador.siglaComissao = '';
        this.removerAlertaErroComissao();
    }
};
DestinoComponent.styles = [autoriaCss];
__decorate([
    query('#auto-complete-async')
], DestinoComponent.prototype, "_autocomplete", void 0);
__decorate([
    state()
], DestinoComponent.prototype, "_comissoesAutocomplete", void 0);
__decorate([
    state()
], DestinoComponent.prototype, "isErroComissaoSelecionada", void 0);
__decorate([
    property({ attribute: false })
], DestinoComponent.prototype, "addAlert", void 0);
__decorate([
    property({ attribute: false })
], DestinoComponent.prototype, "removeAlert", void 0);
__decorate([
    property({ type: String })
], DestinoComponent.prototype, "criticalType", void 0);
__decorate([
    property({ type: RefProposicaoEmendada })
], DestinoComponent.prototype, "proposicao", null);
__decorate([
    property({ type: Array, state: true })
], DestinoComponent.prototype, "comissoes", null);
__decorate([
    property({ type: Object, state: true })
], DestinoComponent.prototype, "colegiadoApreciador", null);
DestinoComponent = __decorate([
    customElement('lexml-ui-destino')
], DestinoComponent);

class Comissao {
    constructor() {
        this.siglaCasaLegislativa = 'CN';
        this.sigla = '';
        this.nome = '';
    }
}

let Data = class Data extends LitElement {
    constructor() {
        super(...arguments);
        this.data = new Date().toISOString().slice(0, 10);
        this.timerOnChange = 0;
    }
    firstUpdated() {
        setTimeout(() => {
            const internalLabel = this.inputData.shadowRoot?.querySelector('label');
            if (internalLabel) {
                internalLabel.addEventListener('click', () => {
                    this.selecionarRadioData();
                });
            }
            else {
                console.error('FALHA: A label interna do wa-input.');
            }
        }, 100);
    }
    selecionarRadioData() {
        const radio = this.shadowRoot?.querySelector('#radio-data-option');
        if (radio && !radio.checked) {
            radio.checked = true;
            this.setDate();
        }
    }
    updated() {
        this.inputData.value =
            this.data ||
                this.inputData.value ||
                new Date().toISOString().replace(/T.+$/, '');
        if (!this.data && !this.optionNaoInformarData.checked) {
            this.optionNaoInformarData.checked = true;
        }
    }
    render() {
        return html `
      <style>
        :host {
          font-size: 14px;
          --wa-font-size-medium: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }
        fieldset.lexml-data {
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          padding: 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          max-width: 655px;
          margin: 0;
        }
        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 6px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 8px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
          margin-left: 8px;
        }

        wa-radio-group {
          margin-left: 10px;
        }
        wa-radio {
          font-size: 14px;
        }
        wa-input {
          max-width: 190px;
        }
        .label-on-left {
          display: grid;
          grid-template-columns: 32px 1fr;

          wa-input {
            grid-column: 1 / -1;
            grid-row-end: span 2;
            display: grid;
            grid-template-columns: subgrid;
            gap: 0 var(--wa-space-l);
            margin-right: 20px;
            font-size: 14px;
          }
          ::part(input) {
            margin-top: -10px;
          }
          ::part(label) {
            text-align: right;
          }

          ::part(hint) {
            grid-column: 2;
          }
        }
        .fiel-click-radio {
          margin-top: -10px;
        }
        .label-on-left wa-input::part(label) {
          cursor: pointer;
        }
        @media (max-width: 480px) {
        }
      </style>
      <fieldset class="lexml-data">
        <legend>Data</legend>
        <wa-radio-group
          id="data-component"
          orientation="horizontal"
          size="medium"
          .value=${this.data ? '2' : '1'}
        >
          <wa-radio
            id="radio-data-option"
            name="data"
            value="2"
            @click=${this.setDate}
          >
            <div class="label-on-left">
              <wa-input
                id="input-data"
                label="Data"
                type="date"
                ?disabled=${!this.data}
                @input=${this.setDate}
              >
              </wa-input>
            </div>
          </wa-radio>
          <wa-radio name="data" id="no-date" value="1" @click=${this.resetDate}>
            Não informar
          </wa-radio>
        </wa-radio-group>
      </fieldset>
    `;
    }
    resetDate() {
        const original = this.data;
        this.data = '';
        if (original !== this.data) {
            this.agendarEmissaoEventoOnChange();
        }
    }
    setDate() {
        if (this.inputData) {
            const original = this.data;
            this.data = this.inputData.value;
            if (original !== this.data) {
                this.agendarEmissaoEventoOnChange();
            }
        }
    }
    agendarEmissaoEventoOnChange() {
        clearTimeout(this.timerOnChange);
        this.timerOnChange = window.setTimeout(() => this.emitirEventoOnChange(), 1000);
    }
    emitirEventoOnChange() {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento: 'data',
            },
        }));
    }
};
__decorate([
    query('#input-data')
], Data.prototype, "inputData", void 0);
__decorate([
    query('#data-component')
], Data.prototype, "group", void 0);
__decorate([
    query('#no-date')
], Data.prototype, "optionNaoInformarData", void 0);
__decorate([
    property({ type: String })
], Data.prototype, "data", void 0);
Data = __decorate([
    customElement('lexml-ui-data')
], Data);

class OpcoesImpressao {
    constructor() {
        this.imprimirBrasao = true;
        this.textoCabecalho = '';
        this.reduzirEspacoEntreLinhas = false;
        this.tamanhoFonte = 14;
    }
}

let OpcoesImpressaoComponent = class OpcoesImpressaoComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.timerEmitirEventoOnChange = 0;
    }
    set opcoesImpressao(value) {
        this._opcoesImpressao = value ? value : new OpcoesImpressao();
        this.requestUpdate();
    }
    get opcoesImpressao() {
        return this._opcoesImpressao;
    }
    firstUpdated() {
        this.tamanhoFonte.addEventListener('sl-change', (ev) => this._atualizarTamanhoFonte(ev));
    }
    render() {
        return html `
      <style>
        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          flex-wrap: wrap;
          padding: 20px 20px;
          border: solid var(--wa-panel-border-width) var(--wa-color-gray-90);
          border-radius: var(--wa-border-radius-s);
          max-width: 655px;
          margin: 1em 0 2em 0;
        }

        legend {
          background-color: var(--wa-color-gray-90);
          font-weight: bold;
          border-radius: 5px;
          border: 1px solid var(--wa-color-gray-85);
          padding: 2px 5px;
          box-shadow: var(--wa-shadow-s);
          color: #333;
        }

        @media (max-width: 480px) {
        }
        wa-select {
          max-width: 400px;
        }
        label {
          line-height: var(--wa-toggle-size);
          font-size: var(--wa-font-size-xs);
          display: flex;
          align-items: center;
          gap: 5px;
        }
      </style>

      <fieldset class="lexml-opcoes-impressao">
        <legend>Opções de impressão</legend>
        <div>
          <label class="lbl-imprimir-brasao" for="chk-imprimir-brasao">
            <input
              type="checkbox"
              id="chk-imprimir-brasao"
              ?checked=${this._opcoesImpressao?.imprimirBrasao}
              @input=${(ev) => this._atualizarImprimirBrasao(ev)}
            />
            Imprimir brasão
          </label>
        </div>
        <wa-input
          type="text"
          id="input-cabecalho"
          name="textoCabecalho"
          label="Texto do cabeçalho"
          value=${this._opcoesImpressao?.textoCabecalho}
          @input=${(ev) => this._atualizarTextoCabecalho(ev)}
          size="small"
        ></wa-input>
        <div>
          <wa-select
            id="select-tamanho-fonte"
            label="Tamanho da letra"
            size="small"
            value=${this._opcoesImpressao?.tamanhoFonte}
          >
            <wa-option value="14">14</wa-option>
            <wa-option value="16">16</wa-option>
            <wa-option value="18">18</wa-option>
          </wa-select>
        </div>
        <div>
          <label class="lbl-reduzir-espaco" for="chk-reduzir-espaco">
            <input
              type="checkbox"
              id="chk-reduzir-espaco"
              ?checked=${this._opcoesImpressao?.reduzirEspacoEntreLinhas}
              @input=${(ev) => this._atualizarReduzirEspacoEntreLinhas(ev)}
            />
            Reduzir espaço entre linhas
          </label>
        </div>
      </fieldset>
    `;
    }
    _atualizarTextoCabecalho(ev) {
        this._opcoesImpressao.textoCabecalho = ev.target.value;
        this.requestUpdate();
    }
    _atualizarImprimirBrasao(ev) {
        this._opcoesImpressao.imprimirBrasao = ev.target.checked;
        this.requestUpdate();
    }
    _atualizarTamanhoFonte(ev) {
        const valorFonte = parseInt(ev.currentTarget.value);
        this._opcoesImpressao.tamanhoFonte = valorFonte;
        this.requestUpdate();
    }
    _atualizarReduzirEspacoEntreLinhas(ev) {
        this._opcoesImpressao.reduzirEspacoEntreLinhas = ev.target.checked;
        this.requestUpdate();
    }
    agendarEmissaoEventoOnChange(origemEvento) {
        clearInterval(this.timerEmitirEventoOnChange);
        this.timerEmitirEventoOnChange = window.setTimeout(() => this.emitirEventoOnChange(origemEvento), 50);
    }
    emitirEventoOnChange(origemEvento) {
        this.dispatchEvent(new CustomEvent('onchange', {
            bubbles: true,
            composed: true,
            detail: {
                origemEvento,
            },
        }));
    }
};
__decorate([
    query('#select-tamanho-fonte')
], OpcoesImpressaoComponent.prototype, "tamanhoFonte", void 0);
__decorate([
    property({ type: Object, state: true })
], OpcoesImpressaoComponent.prototype, "opcoesImpressao", null);
OpcoesImpressaoComponent = __decorate([
    customElement('lexml-ui-opcoes-impressao')
], OpcoesImpressaoComponent);

const mapTipoMensagem = {
    [TipoMensagem.INFO]: { icon: 'info-circle', variant: 'brand' },
    [TipoMensagem.WARNING]: { icon: 'triangle-exclamation', variant: 'warning' },
    [TipoMensagem.ERROR]: { icon: 'circle-exclamation', variant: 'danger' },
    [TipoMensagem.CRITICAL]: { icon: 'circle-exclamation', variant: 'danger' },
    [TipoMensagem.SUCCESS]: { icon: 'check', variant: 'success' },
};
let AlertasComponent = class AlertasComponent extends LitElement {
    constructor() {
        /*
        static styles = css`
          wa-callout {
            box-shadow: var(--wa-shadow-l);
            margin: 20px;
          }
          .field__alert {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .alert__close-button {
            cursor: pointer;
          }
          wa-button::part(base) {
            background-color: transparent;
          }
          .icon__close {
            color: var(--wa-color-neutral-50) !important;
          }
          .icon__close:hover {
            color: var(--wa-color-brand-60) !important;
          }
        `;
        */
        super(...arguments);
        this.alertas = [];
        this.seletorHost = 'lexml-emenda';
        this.seletorBadge = '#contadorAvisos wa-badge';
        this._lastCount = 0;
    }
    stateChanged(state) {
        this.alertas = state.elementoReducer.ui?.alertas || [];
    }
    getAlertIcon(tipoAlerta) {
        return html `<wa-icon
      slot="icon"
      name="${mapTipoMensagem[tipoAlerta].icon}"
    ></wa-icon>`;
    }
    limparAlertas() {
        if (this.clearAlerts) {
            this.clearAlerts();
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:clear', {
                bubbles: true,
                composed: true,
            }));
        }
    }
    removeAlertaById(id) {
        if (this.removeAlert) {
            this.removeAlert(id);
        }
        else {
            this.dispatchEvent(new CustomEvent('alert:remove', {
                bubbles: true,
                composed: true,
                detail: { id },
            }));
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('alertas')) {
            this.alertas?.forEach(alerta => {
                this.shadowRoot
                    ?.getElementById(alerta.id)
                    ?.addEventListener('click', (event) => {
                    event.stopImmediatePropagation();
                    this.removeAlertaById(event.target.id);
                });
            });
            const host = this.seletorHost
                ? document.querySelector(this.seletorHost)
                : null;
            if (host) {
                host.totalAlertas = this.alertas.length;
            }
            const oldValue = changedProperties.get('alertas')?.length || 0;
            const newValue = this.alertas.length;
            if (host && newValue > oldValue) {
                const badge = this.seletorBadge
                    ? document.querySelector(this.seletorBadge)
                    : null;
                if (badge) {
                    badge.setAttribute('attention', 'none');
                    void badge.offsetWidth;
                    badge.setAttribute('attention', 'pulse');
                }
            }
            this.dispatchEvent(new CustomEvent('alertas:alterados', {
                bubbles: true,
                composed: true,
                detail: { total: newValue, aumentou: newValue > oldValue },
            }));
        }
    }
    render() {
        return html `
      ${this.alertas.map(alerta => html ` ${alerta.podeFechar
            ? html `
                <wa-callout
                  variant="${mapTipoMensagem[alerta.tipo].variant}"
                  open
                >
                  ${this.getAlertIcon(alerta.tipo)}
                  <div class="field__alert">
                    ${alerta.mensagem}
                    <wa-button
                      appearance="plain"
                      size="small"
                      class="alert__close-button"
                      id="${alerta.id}"
                      aria-label="fechar"
                      @click=${() => this.removeAlertaById(alerta.id)}
                    >
                      <wa-icon class="icon__close" name="xmark" label="Fechar">
                      </wa-icon>
                    </wa-button>
                  </div>
                </wa-callout>
              `
            : html `<wa-callout
                variant="${mapTipoMensagem[alerta.tipo].variant}"
                open
              >
                ${this.getAlertIcon(alerta.tipo)}${alerta.mensagem}
              </wa-callout> `}`)}
    `;
    }
};
AlertasComponent.styles = css `
    wa-callout {
      background: var(--wa-color-neutral-0, #fff);
      border: 1px solid var(--wa-color-neutral-300, #e2e8f0);
      border-radius: 0.25rem;
      box-shadow: var(--wa-shadow-l);
      padding: 12px 16px;
      position: relative;
      --wa-callout-background: transparent;
      font-size: var(--wa-font-size-xs);
    }

    wa-callout[variant='brand'] {
      border-top: 3px solid var(--wa-color-brand-50);
    }
    wa-callout[variant='success'] {
      border-top: 3px solid var(--wa-color-success-50);
    }
    wa-callout[variant='warning'] {
      border-top: 3px solid var(--wa-color-warning-50);
    }
    wa-callout[variant='danger'] {
      border-top: 3px solid var(--wa-color-danger-50);
    }
    wa-callout[variant='neutral'] {
      border-top: 3px solid var(--wa-color-neutral-50);
    }

    wa-callout[variant='brand'] wa-icon {
      color: var(--wa-color-brand-50);
    }
    wa-callout[variant='success'] wa-icon {
      color: var(--wa-color-success-50);
    }
    wa-callout[variant='warning'] wa-icon {
      color: var(--wa-color-warning-50);
    }
    wa-callout[variant='danger'] wa-icon {
      color: var(--wa-color-danger-50);
    }
    wa-callout[variant='neutral'] wa-icon {
      color: var(--wa-color-neutral-50);
    }
    .field__alert {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    wa-callout {
      margin: 0;
    }
    wa-callout + wa-callout {
      margin-top: 8px;
    }
    .alert__close-button {
      cursor: pointer;
    }
    wa-button::part(base) {
      background-color: transparent;
    }
    .icon__close {
      color: var(--wa-color-neutral-50) !important;
    }
    .icon__close:hover {
      color: var(--wa-color-brand-60) !important;
    }
  `;
__decorate([
    property({ type: Array })
], AlertasComponent.prototype, "alertas", void 0);
__decorate([
    property({ attribute: false })
], AlertasComponent.prototype, "removeAlert", void 0);
__decorate([
    property({ attribute: false })
], AlertasComponent.prototype, "clearAlerts", void 0);
__decorate([
    property({ type: String })
], AlertasComponent.prototype, "seletorHost", void 0);
__decorate([
    property({ type: String })
], AlertasComponent.prototype, "seletorBadge", void 0);
AlertasComponent = __decorate([
    customElement('lexml-ui-alertas')
], AlertasComponent);

const REGEX_ACCENTS = /[\u0300-\u036f]/g;

let Autocomplete = class Autocomplete extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.label = '';
        this.opened = false;
        this.maxSuggestions = 10;
        this._suggestions = [];
        this._bound = {};
        this._blur = false;
        this._mouseEnter = false;
    }
    render() {
        return html `
      <style>
        .suggest-container {
          position: relative;
        }

        ul {
          position: absolute;
          display: block;
          list-style-type: none;
          margin: 0;
          padding: 0;
          z-index: 10000;
          border: 1px solid grey;
          background: white;
        }
        li {
          padding: 4px;
          cursor: pointer;
        }
        li.active {
          background: whitesmoke;
        }
        [hidden] {
          display: none;
        }

        .lexml-autocomplete-input {
          width: 100%;
        }

        @media (max-width: 576px) {
          .lexml-autocomplete-label {
            width: calc(100% - 2px);
            display: block;
          }
          .lexml-autocomplete-input {
            width: calc(100% - 2px);
          }
        }
      </style>
      <slot id="dropdown-input">
        <wa-input
          id="defaultInput"
          class="lexml-autocomplete-input"
          label=${this.label}
          type="text"
          placeholder=""
          size="small"
          .value=${this.value || ''}
        >
        </wa-input>
      </slot>
      <div class="suggest-container">
        <ul
          id="suggestions"
          ?hidden=${!this.opened}
          @mouseenter=${this._handleItemMouseEnter}
          @mouseleave=${this._handleItemMouseLeave}
          @mousedown=${(e) => e.preventDefault()}
        >
          ${this._suggestions.map((item) => html `<li @click=${() => this._selectFromMouse(item)}>
                ${item}
              </li>`)}
        </ul>
      </div>
    `;
    }
    /**
     * Input element getter
     */
    get contentElement() {
        if (this._inputEl)
            return this._inputEl; // Cache
        if (!this.hasUpdated)
            return undefined; // No shadow root, no element to use
        const slotElement = this.shadowRoot.getElementById('dropdown-input');
        const slotInputList = slotElement.assignedElements();
        this._inputEl = slotInputList.length
            ? slotInputList[0]
            : this.shadowRoot.getElementById('defaultInput');
        return this._inputEl;
    }
    /**
     * Value getter from input element.
     */
    get value() {
        return this.contentElement && this.contentElement.value;
    }
    /**
     * Value setter to input element.
     */
    set value(value) {
        if (!this.contentElement) {
            this._tempValue = value;
            return;
        }
        this.contentElement.value = value;
    }
    firstUpdated() {
        this._suggestionEl = this.shadowRoot.getElementById('suggestions');
        this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        this._bound.onKeyDown = this._handleKeyDown.bind(this);
        this._bound.onKeyUp = this._handleKeyUp.bind(this);
        this._bound.onFocus = this._handleFocus.bind(this);
        this._bound.onBlur = this._handleBlur.bind(this);
        this.contentElement.addEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.addEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.addEventListener('focus', this._bound.onFocus);
        this.contentElement.addEventListener('blur', this._bound.onBlur);
        if (this._tempValue !== undefined) {
            this.contentElement.value = this._tempValue;
        }
    }
    disconnectedCallback() {
        if (!this.contentElement)
            return; // no events to remove
        this.contentElement.removeEventListener('keydown', this._bound.onKeyDown);
        this.contentElement.removeEventListener('keyup', this._bound.onKeyUp);
        this.contentElement.removeEventListener('focus', this._bound.onFocus);
        this.contentElement.removeEventListener('blur', this._bound.onBlur);
    }
    focus(options) {
        if (this.contentElement) {
            this.contentElement.focus(options);
        }
    }
    updated(changed) {
        if (changed.has('opened') &&
            this.opened &&
            this._suggestionEl.childElementCount) {
            // Highlight the first when there are suggestions
            // eslint-disable-next-line prefer-destructuring
            this._highlightedEl = this._suggestionEl.children[0];
            this._highlightedEl.classList.add('active');
        }
    }
    /**
     * Open suggestions.
     */
    open() {
        if (this._suggestionEl.style.width === '0px') {
            this._suggestionEl.style.width = `${this.contentElement.getBoundingClientRect().width}px`;
        }
        if (this._suggestions.length) {
            this.opened = true;
        }
    }
    /**
     * Close suggestions.
     */
    close() {
        this.opened = false;
        this._highlightedEl = null;
    }
    /**
     * Suggest autocomplete items.
     * @param {Array<String>} suggestions
     */
    suggest(suggestions) {
        this._suggestions = suggestions || [];
        // eslint-disable-next-line no-unused-expressions
        this._suggestions.length > 1 ||
            (this._suggestions.length === 1 &&
                this._suggestions[0] !== this.contentElement.value)
            ? this.open()
            : this.close();
        this.requestUpdate();
    }
    /**
     * Autocomplete input with `value`.
     * @param {String} value
     */
    autocomplete(value) {
        this.contentElement.value = value;
        this.close();
        this.dispatchEvent(new CustomEvent('autocomplete', {
            detail: { value },
            composed: true,
            bubbles: true,
        }));
    }
    _selectFromMouse(item) {
        this.autocomplete(item);
        this.contentElement?.focus?.();
    }
    _highlightPrev() {
        if (!this._highlightedEl || !this._highlightedEl.previousElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.previousElementSibling;
        this._highlightedEl.classList.add('active');
    }
    _highlightNext() {
        if (!this._highlightedEl || !this._highlightedEl.nextElementSibling)
            return;
        this._highlightedEl.classList.remove('active');
        this._highlightedEl = this._highlightedEl.nextElementSibling;
        this._highlightedEl.classList.add('active');
    }
    // eslint-disable-next-line class-methods-use-this
    _handleKeyDown(ev) {
        // Prevent up and down from behaving as home and end on some browsers
        if (ev.key === 'ArrowUp' || ev.key === 'ArrowDown') {
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
    _handleKeyUp(ev) {
        switch (ev.key) {
            case 'ArrowUp':
                if (this._highlightedEl?.previousElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightPrev();
                }
                break;
            case 'ArrowDown':
                if (this._highlightedEl?.nextElementSibling) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    this._highlightNext();
                }
                break;
            case 'Enter':
                // Select
                // eslint-disable-next-line no-unused-expressions
                this._highlightedEl && this._highlightedEl.click();
                break;
            default:
                // TODO debounce
                if (this.items.length) {
                    const { value } = this.contentElement;
                    const normalizedValue = value
                        .normalize('NFD')
                        .replace(REGEX_ACCENTS, '');
                    this.suggest(this._findSuggetions(normalizedValue));
                }
        }
    }
    _findSuggetions(value, nItemsResult = this.maxSuggestions) {
        if (!value) {
            return [];
        }
        let suggestions = this._filterStartWith(value, nItemsResult);
        if (suggestions.length < this.maxSuggestions) {
            suggestions = [
                ...suggestions,
                ...this._filterContains(value, this.maxSuggestions - suggestions.length).filter(item => !suggestions.includes(item)),
            ];
        }
        return suggestions;
    }
    _filterStartWith(value, itemsResult = this.maxSuggestions) {
        const regexStartWith = new RegExp('^' + value, 'gi');
        return ((value &&
            this.items
                .filter(item => item
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .match(regexStartWith))
                .slice(0, itemsResult)) ||
            []);
    }
    _filterContains(value, itemsResult = this.maxSuggestions) {
        const regexContains = new RegExp(value, 'gi');
        return ((value &&
            this.items
                .filter(item => item
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .match(regexContains))
                .slice(0, itemsResult)) ||
            []);
    }
    _handleFocus() {
        this._blur = false;
        // eslint-disable-next-line no-unused-expressions
        this._suggestions.length > 1 && this.open();
    }
    _handleBlur() {
        this._blur = true;
        // eslint-disable-next-line no-unused-expressions
        // !this._mouseEnter && this.close();
        setTimeout(() => this.close(), 200);
        this._suggestions = [];
    }
    // Handle mouse change focus to suggestions
    _handleItemMouseEnter() {
        this._mouseEnter = true;
    }
    _handleItemMouseLeave() {
        this._mouseEnter = false;
        // eslint-disable-next-line no-unused-expressions
        this._blur && setTimeout(() => this.close(), 500); // Give user some slack before closing
    }
};
__decorate([
    property({ type: Array })
], Autocomplete.prototype, "items", void 0);
__decorate([
    property({ type: String })
], Autocomplete.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Autocomplete.prototype, "opened", void 0);
__decorate([
    property({ type: Number })
], Autocomplete.prototype, "maxSuggestions", void 0);
__decorate([
    property({ type: String })
], Autocomplete.prototype, "value", null);
Autocomplete = __decorate([
    customElement('lexml-ui-autocomplete')
], Autocomplete);

export { AlertasComponent, AutoFix, Autocomplete, Comissao, Data, DestinoComponent, LexmlUiCommons, OpcoesImpressaoComponent, REGEX_ACCENTS, TipoMensagem };
//# sourceMappingURL=index.js.map
