import { expect } from '@open-wc/testing';
import * as parecerApi from '@lexml/lexml-parecer';
import { Parecer, Usuario } from '@lexml/lexml-parecer';
import type {
  LexmlEtaParecer,
  LexmlEtaParecerParametrosEdicao,
  LexmlParecerConfig,
  Parlamentar,
} from '@lexml/lexml-parecer';

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
    expect(params.parecer?.relatorio).to.equal('Texto inicial');
    expect(editor.getParecer).to.be.a('function');
    expect(parecer.relatorio).to.equal('');
    expect(usuario.nome).to.equal('Usuário');
  });
});
