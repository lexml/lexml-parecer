import { Usuario } from '@ui-commons';
import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { NotaRodape } from '../../models/diversos.model.js';
import { RevisaoEmenta } from '../../models/revisao.model.js';

@customElement('lexml-parecer-ementa')
export class LexmlParecerEmenta extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }

  @property({ type: Number }) alturaEditor = 600;

  @query('lexml-ui-editor-texto-rico') private _ed!: HTMLElement & {
    getTexto: () => string;
    setTexto?: (html: string) => void;
    setNotasRodape?: (notas: NotaRodape[]) => void;
    setContent?: (html: string, notas?: NotaRodape[]) => void;
    getNotasRodape?: () => NotaRodape[];
  };

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

  public getNotasRodape(): NotaRodape[] {
    return this._ed?.getNotasRodape?.() ?? [];
  }

  public setNotasRodape(notas: NotaRodape[] = []): void {
    if (!this._ed) return;
    if (typeof this._ed.setNotasRodape === 'function') {
      this._ed.setNotasRodape(notas);
    } else if (typeof this._ed.setContent === 'function') {
      this._ed.setContent(this.getTexto(), notas);
    }
  }

  public setNotaRodapeInicio(n: number): void {
    (this._ed as any)?.setNotaRodapeInicio?.(n);
  }

  public getQuantidadeNotasRodape(): number {
    return (this._ed as any)?.getQuantidadeNotasRodape?.() ?? 0;
  }

  public setUsuarioRevisao(usuario: Usuario) {
    (this._ed as any)?.setUsuarioRevisao(usuario);
  }

  public setEmRevisao(value: boolean) {
    (this._ed as any)?.updateRevisionStatus?.(!!value);
  }

  public aceitarTodasRevisoes() {
    (this._ed as any)?.aceitarRevisoes?.();
  }

  public rejeitarTodasRevisoes() {
    (this._ed as any)?.rejeitarRevisoes?.();
  }

  public getQuantidadeRevisoes(): number {
    return (this._ed as any)?.getQuantidadeDeRevisoes?.() ?? 0;
  }

  public isEmRevisao(): boolean {
    return !!(this._ed as any)?.quill?.revisao?.emRevisao;
  }
  public getRevisoes(): RevisaoEmenta[] {
    const base = (this._ed as any)?.getRevisoes?.() ?? [];
    return base.map(
      (r: any) =>
        new RevisaoEmenta(
          new Usuario(r.usuario?.nome, r.usuario?.id, r.usuario?.sigla),
          r.dataHora,
          'Ementa alterada',
        ),
    );
  }

  render(): TemplateResult {
    return html`<lexml-ui-editor-texto-rico
      .height=${this.alturaEditor}
      orientacaoNotaRodaPe="abaixo"
      .toolbar=${'italic'}
    ></lexml-ui-editor-texto-rico>`;
  }
}
