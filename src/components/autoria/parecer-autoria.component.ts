import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { REGEX_ACCENTS } from '@ui-commons';

import { Parlamentar, AutoriaParecer } from '../../models/diversos.modelo.js';

@customElement('lexml-parecer-autoria')
export class LexmlParecerAutoriaComponent extends LitElement {
  private _parlamentaresOpc: Parlamentar[] = [];

  @state() private _nomesAutocomplete: string[] = [];

  @property({ type: Array })
  set parlamentares(value: Parlamentar[]) {
    const old = this._parlamentaresOpc;
    this._parlamentaresOpc = value ?? [];
    this._nomesAutocomplete = this._parlamentaresOpc.map(p => p.nome);
    this.requestUpdate('parlamentares', old);
  }

  get parlamentares(): Parlamentar[] {
    return this._parlamentaresOpc;
  }

  private _autoriaParecerOriginal?: AutoriaParecer;

  private _autoriaParecer: AutoriaParecer = {};

  @property({ type: Object })
  set autoria(value: AutoriaParecer | undefined) {
    const old = this._autoriaParecerOriginal;
    this._autoriaParecerOriginal = value;

    const rel = value?.relator ? { ...value.relator } : undefined;
    const pres = value?.presidente ? { ...value.presidente } : undefined;
    this._autoriaParecer = { relator: rel, presidente: pres };

    this.requestUpdate('autoria', old);
  }

  get autoria(): AutoriaParecer | undefined {
    return this._autoriaParecerOriginal;
  }

  public getAutoriaAtualizada(): AutoriaParecer {
    const { relator, presidente } = this._autoriaParecer;
    const r = relator?.identificacao ? { ...relator } : undefined;
    const p = presidente?.identificacao ? { ...presidente } : undefined;
    return { relator: r, presidente: p };
  }

  private _onAutocomplete(
    campo: 'relator' | 'presidente',
    e: CustomEvent<{ value: string }>,
  ) {
    const selecionado = this._parlamentaresOpc.find(
      p => p.nome === e.detail.value,
    );
    this._autoriaParecer[campo] = selecionado ? { ...selecionado } : undefined;
    this._emitOnChange(`atualizar:${campo}`);
    this.requestUpdate();
  }

  private _validarNomeCampo(ev: Event, campo: 'relator' | 'presidente') {
    const isBlur = ev.type === 'blur';
    const inputEl = ev.target as
      | HTMLInputElement
      | (HTMLElement & { value?: string });
    const nomeAtual = (inputEl as any).value ?? '';

    if (!nomeAtual) {
      this._autoriaParecer[campo] = undefined;
      if (isBlur) (inputEl as any).value = '';
      this._emitOnChange(`limpar:${campo}`);
      this.requestUpdate();
      return;
    }

    const regex = new RegExp(
      `^${nomeAtual.normalize('NFD').replace(REGEX_ACCENTS, '')}$`,
      'i',
    );

    const parlamentar = this._parlamentaresOpc.find(p =>
      p.nome
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .match(regex),
    );

    if (parlamentar?.identificacao) {
      this._autoriaParecer[campo] = { ...parlamentar };
      this._emitOnChange(`atualizar:${campo}`);
    } else if (isBlur) {
      // No blur e não validou → limpa o campo
      this._autoriaParecer[campo] = undefined;
      (inputEl as any).value = '';
      this._emitOnChange(`limpar:${campo}`);
    }
    this.requestUpdate();
  }

  private _emitOnChange(origemEvento: string) {
    this.dispatchEvent(
      new CustomEvent('onchange', {
        bubbles: true,
        composed: true,
        detail: { origemEvento },
      }),
    );
  }

  render(): TemplateResult {
    return html`
      <style>
        fieldset {
          font-size: 14px;
          font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background-color: var(--wa-color-gray-95);
          box-shadow: var(--wa-shadow-m);
          padding: 20px;
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
        }
      </style>
      <fieldset>
        <legend>Autoria</legend>
        <lexml-ui-autocomplete
          label="Relator"
          .items=${this._nomesAutocomplete}
          .value=${this._autoriaParecer.relator?.nome ?? ''}
          @autocomplete=${(e: CustomEvent<{ value: string }>) =>
            this._onAutocomplete('relator', e)}
          @input=${(e: Event) => this._validarNomeCampo(e, 'relator')}
          @focusout=${(e: Event) => this._validarNomeCampo(e, 'relator')}
        ></lexml-ui-autocomplete>

        <lexml-ui-autocomplete
          label="Presidente"
          .items=${this._nomesAutocomplete}
          .value=${this._autoriaParecer.presidente?.nome ?? ''}
          @autocomplete=${(e: CustomEvent<{ value: string }>) =>
            this._onAutocomplete('presidente', e)}
          @input=${(e: Event) => this._validarNomeCampo(e, 'presidente')}
          @focusout=${(e: Event) => this._validarNomeCampo(e, 'presidente')}
        ></lexml-ui-autocomplete>
      </fieldset>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lexml-parecer-autoria': LexmlParecerAutoriaComponent;
  }
}
