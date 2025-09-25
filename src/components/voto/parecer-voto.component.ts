import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ItemVoto } from '../../models/item-voto.modelo.js';
import { Voto } from '../../models/voto.modelo.js';
import { Documento } from '../../models/documento.modelo.js';

@customElement('lexml-parecer-voto')
export class LexmlParecerVoto extends LitElement {
  @state() private itens: ItemVoto[] = [];

  static styles = css`
    :host {
      display: block;
    }
    .toolbar {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    button {
      border: 1px solid #d0d7de;
      background: #fff;
      padding: 0.5rem 0.75rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    button:hover {
      background: #f6f8fa;
    }
    details {
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 0.5rem 0.75rem;
      margin-bottom: 0.75rem;
      background: #fff;
    }
    summary {
      list-style: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    .caret {
      transition: transform 0.16s ease;
    }
    details[open] .caret {
      transform: rotate(90deg);
    }
    .meta {
      color: #6b7280;
      font-size: 0.9em;
    }
    wa-input,
    wa-select,
    wa-textarea,
    input[type='text'],
    select,
    textarea {
      width: 100%;
      box-sizing: border-box;
    }
    textarea {
      min-height: 100px;
      resize: vertical;
    }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.85em;
      padding: 0.2rem 0.5rem;
      border: 1px solid #e5e7eb;
      border-radius: 999px;
      background: #f9fafb;
    }
    .item-actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
    .file-actions {
      display: inline-flex;
      gap: 0.5rem;
    }
    .muted {
      color: #9ca3af;
    }
    sl-input,
    sl-select,
    sl-textarea {
      width: 100%;
    }
    sl-details::part(base) {
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      padding: 0rem 0.75rem;
      margin-bottom: 0.75rem;
      background: #fff;
    }
    sl-details::part(summary) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  `;

  public getVoto(): Voto {
    return { itensVoto: [...this.itens] };
  }

  public setVoto(voto: Voto) {
    this.cleanupObjectUrls();
    this.itens = (voto?.itensVoto ?? []).map((it, i) => ({
      ...it,
      posicao: i + 1,
    }));
  }

  protected render(): TemplateResult {
    return html`
      <div class="toolbar">
        <wa-button size="small" @click=${this.addDocumento}
          >Importar documento</wa-button
        >
        <wa-button size="small" variant="brand" @click=${this.addTexto}
          >Adicionar bloco de texto</wa-button
        >
      </div>
      ${this.itens.length === 0
        ? html`<div class="muted">Nenhum voto adicionado ainda.</div>`
        : this.itens.map((item, idx) => this.renderItem(item, idx))}
    `;
  }

  private renderItem(item: ItemVoto, idx: number): TemplateResult {
    const header = item.documento
      ? `Documento: ${item.documento.arquivo?.name ?? item.documento.nome ?? 'sem nome'}`
      : 'Bloco de texto';

    return html`
      <wa-details open>
        <div slot="summary">
          <span class="chip">Voto #${item.posicao}</span>
          <span>— ${header}</span>
        </div>
        ${item.documento
          ? this.renderDocumento(item, idx)
          : this.renderTexto(item, idx)}
        <div class="item-actions">
          <wa-button size="small" @click=${() => this.move(idx, -1)}
            >↑</wa-button
          >
          <wa-button size="small" @click=${() => this.move(idx, 1)}
            >↓</wa-button
          >
          <wa-button
            size="small"
            variant="neutral"
            @click=${() => this.removeItem(idx)}
            >Remover</wa-button
          >
        </div>
      </wa-details>
    `;
  }

  private renderTexto(item: ItemVoto, idx: number): TemplateResult {
    return html`
      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div class="wa-span-grid wa-cluster wa-gap-xs">
          <label class="muted">Texto:</label>
        </div>
        <div class="wa-span-grid">
          <wa-textarea
            .value=${item.texto ?? ''}
            placeholder="Digite o texto do voto..."
            @wa-input=${(e: CustomEvent) =>
              this.updateTexto(idx, (e.target as any).value)}
            @input=${(e: Event) =>
              this.updateTexto(idx, (e.target as HTMLTextAreaElement).value)}
          ></wa-textarea>
        </div>
      </div>
    `;
  }

  private renderDocumento(item: ItemVoto, idx: number): TemplateResult {
    const doc = item.documento!;
    return html`
      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div><label>Tipo:</label></div>
        <div>
          <wa-select
            placeholder="Selecione o tipo"
            .value=${doc.tipo ?? ''}
            @sl-change=${(e: CustomEvent) =>
              this.updateDocField(idx, 'tipo', (e.target as any).value)}
          >
            <wa-option value="" label="Selecione…">Selecione…</wa-option>
            <wa-option value="PDF" label="PDF">PDF</wa-option>
            <wa-option value="DOCX" label="DOCX">DOCX</wa-option>
            <wa-option value="IMG" label="Imagem">Imagem</wa-option>
            <wa-option value="OUTRO" label="Outro">Outro</wa-option>
          </wa-select>
        </div>
      </div>

      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div><label>Nome:</label></div>
        <div>
          <wa-input
            type="text"
            .value=${doc.nome ?? ''}
            placeholder="Nome do documento"
            @wa-input=${(e: CustomEvent) =>
              this.updateDocField(idx, 'nome', (e.target as any).value)}
            @input=${(e: Event) =>
              this.updateDocField(
                idx,
                'nome',
                (e.target as HTMLInputElement).value,
              )}
          ></wa-input>
        </div>
      </div>

      <div class="wa-grid" style="--min-column-size: 16rem;">
        <div><label>Arquivo:</label></div>
        <div>
          <input
            type="file"
            @change=${(e: Event) => this.onFilePicked(idx, e as InputEvent)}
          />
        </div>
      </div>

      <div
        class="wa-grid"
        style="--min-column-size: 16rem; margin-top: 0.5rem;"
      >
        <div class="wa-span-grid wa-cluster wa-gap-xs file-actions">
          ${doc.url
            ? html`<wa-button href=${doc.url} target="_blank" size="small"
                  >Visualizar</wa-button
                >
                <wa-button
                  href=${doc.url}
                  download=${doc.nome || 'documento'}
                  size="small"
                  variant="brand"
                >
                  Download
                </wa-button>`
            : html`<span class="muted">Sem arquivo</span>`}
        </div>
      </div>
    `;
  }

  private addDocumento = () => {
    this.itens = [
      ...this.itens,
      {
        documento: { tipo: '', nome: '', arquivo: null, url: null },
        posicao: this.itens.length + 1,
      },
    ];
    this.emitChange();
  };

  private addTexto = () => {
    this.itens = [...this.itens, { texto: '', posicao: this.itens.length + 1 }];
    this.emitChange();
  };

  private removeItem(idx: number) {
    const removed = this.itens[idx];
    if (removed?.documento?.url) URL.revokeObjectURL(removed.documento.url);
    this.itens = this.itens
      .filter((_, i) => i !== idx)
      .map((it, i) => ({ ...it, posicao: i + 1 }));
    this.emitChange();
  }

  private move(idx: number, delta: number) {
    const to = idx + delta;
    if (to < 0 || to >= this.itens.length) return;
    const arr = [...this.itens];
    const [item] = arr.splice(idx, 1);
    arr.splice(to, 0, item);
    this.itens = arr.map((it, i) => ({ ...it, posicao: i + 1 }));
    this.emitChange();
  }

  private updateTexto(idx: number, value: string) {
    const arr = [...this.itens];
    arr[idx] = { ...arr[idx], texto: value };
    this.itens = arr;
    this.emitChange();
  }

  private updateDocField(idx: number, field: keyof Documento, value: string) {
    const arr = [...this.itens];
    const atual = arr[idx];
    const doc = { ...(atual.documento ?? {}), [field]: value } as Documento;
    arr[idx] = { ...atual, documento: doc };
    this.itens = arr;
    this.emitChange();
  }

  private onFilePicked(idx: number, e: InputEvent) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    const arr = [...this.itens];
    const atual = arr[idx];
    const docAntigo = atual.documento;

    if (docAntigo?.url) URL.revokeObjectURL(docAntigo.url);

    let url: string | null = null;
    if (file) {
      try {
        url = URL.createObjectURL(file);
      } catch {
        url = null;
      }
    }

    const novoDoc: Documento = { ...(docAntigo ?? {}), arquivo: file, url };
    arr[idx] = { ...atual, documento: novoDoc };
    this.itens = arr;
    this.emitChange();
  }

  private download(idx: number) {
    const doc = this.itens[idx].documento;
    if (!doc?.url) return;
    const a = document.createElement('a');
    a.href = doc.url;
    a.download = doc.nome || 'documento';
    a.click();
  }

  private emitChange() {
    const detail: Voto = { itensVoto: this.itens.map(it => ({ ...it })) };
    this.dispatchEvent(
      new CustomEvent<Voto>('voto-change', {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private cleanupObjectUrls() {
    for (const it of this.itens) {
      const url = it.documento?.url;
      if (url) URL.revokeObjectURL(url);
    }
  }

  disconnectedCallback(): void {
    this.cleanupObjectUrls();
    super.disconnectedCallback?.();
  }
}
