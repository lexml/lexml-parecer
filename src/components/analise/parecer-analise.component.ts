import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { NotaRodape } from 'src/models/diversos.modelo.js';

@customElement('lexml-parecer-analise')
export class LexmlParecerAnalise extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @query('lexml-ui-editor-texto-rico') private _ed!: HTMLElement & {
    getTexto: () => string;
    setTexto?: (html: string) => void;
    setNotasRodape?: (notas: NotaRodape[]) => void;
    setContent?: (html: string, notas?: NotaRodape[]) => void;
    getNotasRodape?: () => NotaRodape[];
  };

  public getNotasRodape(): NotaRodape[] {
    return this._ed?.getNotasRodape?.() ?? [];
  }

  public getTexto(): string {
    return this._ed?.getTexto?.() ?? '';
  }

  public setTexto(html: string = ''): void {
    if (!this._ed) return;
    if (typeof this._ed.setTexto === 'function') {
      this._ed.setTexto(html);
    } else if (typeof this._ed.setContent === 'function') {
      this._ed.setContent(html, []);
    }
  }

  public setNotasRodape(notas: NotaRodape[] = []): void {
    if (!this._ed) return;
    if (typeof this._ed.setNotasRodape === 'function') {
      this._ed.setNotasRodape(notas);
    } else if (typeof this._ed.setContent === 'function') {
      this._ed.setContent(this.getTexto(), notas);
    }
  }

  render(): TemplateResult {
    return html`<lexml-ui-editor-texto-rico
      height="600"
      orientacaoNotaRodaPe="abaixo"
    ></lexml-ui-editor-texto-rico>`;
  }
}
