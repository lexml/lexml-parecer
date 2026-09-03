import { expect, fixture } from '@open-wc/testing';
import * as parecerApi from '@lexml/lexml-parecer';
import { Parecer, Usuario } from '@lexml/lexml-parecer';
import type {
  AnexoParecer,
  LexmlEtaParecer,
  LexmlEtaParecerParametrosEdicao,
  LexmlParecerConfig,
  Parlamentar,
  TipoAnexoParecer,
} from '@lexml/lexml-parecer';
import { normalizarTiposAnexos } from '../src/types/tipo-anexo-parecer.js';

function limparAlertas(): void {
  document.getElementById('wa-callout-stack')?.parentElement?.remove();
}

describe('API pública do lexml-parecer', () => {
  it('registra o elemento principal e todos os componentes renderizados', () => {
    const elementosObrigatorios = [
      'lexml-eta-parecer',
      'lexml-parecer-ementa',
      'lexml-parecer-relatorio',
      'lexml-parecer-analise',
      'lexml-parecer-voto',
      'lexml-parecer-data-autoria-impressao',
      'lexml-parecer-autoria',
      'lexml-parecer-avisos',
      'lexml-ui-alertas',
      'lexml-autocomplete-universal',
      'lexml-ui-data',
      'lexml-ui-opcoes-impressao',
      'lexml-ui-editor-texto-rico',
      'lexml-ui-switch-revisao',
      'panel-nota-rodape',
      'lexml-ui-alterar-largura-tabela-coluna-modal',
      'lexml-ui-alterar-largura-imagem-modal',
    ];

    for (const tagName of elementosObrigatorios) {
      expect(
        customElements.get(tagName),
        `${tagName} não foi registrado`,
      ).to.be.a('function');
    }
  });

  it('expõe somente os três valores necessários em runtime', () => {
    expect(Object.keys(parecerApi).sort()).to.deep.equal([
      'LexmlEtaParecer',
      'Parecer',
      'Usuario',
    ]);
  });

  it('mantém somente os valores e contratos necessários ao consumidor', () => {
    const parlamentar: Parlamentar = {
      identificacao: '123',
      nome: 'Parlamentar',
      sexo: 'M',
      siglaPartido: 'ABC',
      siglaUF: 'DF',
      siglaCasaLegislativa: 'SF',
      cargo: 'Senador',
    };

    const config: Partial<LexmlParecerConfig> = {
      parlamentares: [parlamentar],
      tiposAnexos: [{ codigo: 'projeto.lei', nome: 'Projeto de Lei' }],
      onDeleteAnexo: async () => undefined,
    };
    const params: LexmlEtaParecerParametrosEdicao = {
      parecer: { relatorio: 'Texto inicial' },
    };
    const editor = document.createElement(
      'lexml-eta-parecer',
    ) as unknown as LexmlEtaParecer;
    const parecer = new Parecer();
    const usuario = new Usuario('Usuário', 'usuario', 'U');

    expect(config.parlamentares).to.deep.equal([parlamentar]);
    expect(config.tiposAnexos?.[0].codigo).to.equal('projeto.lei');
    expect(params.parecer?.relatorio).to.equal('Texto inicial');
    expect(editor.getParecer).to.be.a('function');
    expect(parecer.relatorio).to.equal('');
    expect(usuario.nome).to.equal('Usuário');
  });
});

describe('tipos de anexos de parecer', () => {
  beforeEach(limparAlertas);
  afterEach(limparAlertas);

  it('usa somente Outro quando a configuração não é informada', () => {
    expect(normalizarTiposAnexos()).to.deep.equal([
      { codigo: 'outro', nome: 'Outro' },
    ]);
  });

  it('preserva a ordem, remove duplicidades e mantém Outro no final', () => {
    const tipos: TipoAnexoParecer[] = [
      { codigo: 'emenda', nome: 'Emenda' },
      { codigo: 'outro', nome: 'Nome recebido do host' },
      { codigo: 'emenda', nome: 'Emenda duplicada' },
      { codigo: 'projeto.lei', nome: 'Projeto de Lei' },
    ];

    expect(normalizarTiposAnexos(tipos)).to.deep.equal([
      { codigo: 'emenda', nome: 'Emenda' },
      { codigo: 'projeto.lei', nome: 'Projeto de Lei' },
      { codigo: 'outro', nome: 'Outro' },
    ]);
    expect(tipos[1]).to.deep.equal({
      codigo: 'outro',
      nome: 'Nome recebido do host',
    });
  });

  it('exibe o nome configurado e mantém o código no parecer', async () => {
    const anexo = {
      idArquivo: 'arquivo-1',
      nomeArquivo: 'projeto.pdf',
      nomeDocumento: 'Projeto anexado',
      tipo: 'projeto.lei',
      mimeType: 'application/pdf',
      _uid: 'anexo-1',
    } as unknown as AnexoParecer;
    const voto = document.createElement('lexml-parecer-voto') as any;
    voto.tiposAnexos = normalizarTiposAnexos([
      { codigo: 'projeto.lei', nome: 'Projeto de Lei' },
    ]);
    voto.anexos = [anexo];

    const card = await fixture<HTMLElement>(voto.renderAnexo(anexo, 0));
    const tipoSelecionado = card.querySelector('wa-select wa-option[selected]');

    expect(tipoSelecionado?.textContent?.trim()).to.equal('Projeto de Lei');
    expect(voto.getAnexos()[0].tipo).to.equal('projeto.lei');
  });

  it('substitui tipo desconhecido por outro e alerta o usuário', () => {
    const editor = document.createElement(
      'lexml-eta-parecer',
    ) as unknown as LexmlEtaParecer;
    editor.lexmlParecerConfig = {
      tiposAnexos: [{ codigo: 'emenda', nome: 'Emenda' }],
    };
    (editor as any).willUpdate(
      new Map<string, unknown>([['lexmlParecerConfig', undefined]]),
    );

    const anexo = {
      idArquivo: 'arquivo-2',
      nomeArquivo: 'arquivo.pdf',
      nomeDocumento: 'Nome do Anexo',
      tipo: 'tipo.desconhecido',
      mimeType: 'application/pdf',
    } as unknown as AnexoParecer;

    const parecer = (editor as any)._normalizarParecer({ anexos: [anexo] });

    expect(parecer.anexos[0].tipo).to.equal('outro');
    expect(
      document
        .getElementById('wa-callout-stack')
        ?.querySelector('wa-callout')
        ?.textContent?.trim(),
    ).to.equal(
      'Não foi identificado o tipo "tipo.desconhecido" do anexo "Nome do Anexo". O tipo foi alterado para "Outros".',
    );
  });
});
