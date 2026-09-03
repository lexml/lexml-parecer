import { html, LitElement, TemplateResult } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '../../src/index.js';
import { AutoriaParecer } from '../../src/models/autoria-parecer.model.js';
import { OpcoesImpressao } from '../../src/models/opcoes-impressao.model.js';
import { Parecer } from '../../src/models/parecer.model.js';
import { ProposicaoReferenciada } from '../../src/models/proposicao-referenciada.model.js';
import { LexmlEtaParecer } from '../../src/components/parecer/lexml-eta-parecer.component.js';
import type { LexmlParecerConfig } from '../../src/config/lexml-parecer-config.js';
import type { LexmlEtaParecerParametrosEdicao } from '../../src/models/lexml-eta-parecer-parametro-edicao.model.js';
import { Destino } from '@lexml/lexml-ui-commons';
import type { Usuario } from '@lexml/lexml-ui-commons';
import {
  RevisaoRelatorio,
  RevisaoVoto,
} from '../../src/models/revisao.model.js';
import { MimeType } from '../../src/models/anexo-parecer.model.js';
import type { AnexoParecer } from '../../src/models/anexo-parecer.model.js';

type Comissao = NonNullable<Destino['comissao']>;

@customElement('demo-view')
export class DemoView extends LitElement {
  createRenderRoot(): LitElement {
    return this;
  }
  @query('lexml-eta-parecer')
  private _parecer?: LexmlEtaParecer;

  parecerConfig: Partial<LexmlParecerConfig>;

  constructor() {
    super();
    this.parecerConfig = {
      tiposAnexos: [
        { codigo: 'emenda', nome: 'Emenda' },
        { codigo: 'substitutivo', nome: 'Substitutivo' },
        { codigo: 'projeto.lei', nome: 'Projeto de Lei' },
        { codigo: 'requerimento', nome: 'Requerimento' },
      ],
      parlamentares: [
        {
          identificacao: 'SF001',
          nome: 'Rodrigo Pacheco',
          sexo: 'M',
          siglaPartido: 'PSD',
          siglaUF: 'MG',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF002',
          nome: 'Davi Alcolumbre',
          sexo: 'M',
          siglaPartido: 'UNIÃO',
          siglaUF: 'AP',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF003',
          nome: 'Jaques Wagner',
          sexo: 'M',
          siglaPartido: 'PT',
          siglaUF: 'BA',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF004',
          nome: 'Eliziane Gama',
          sexo: 'F',
          siglaPartido: 'PSD',
          siglaUF: 'MA',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senadora',
        },
        {
          identificacao: 'SF005',
          nome: 'Sérgio Moro',
          sexo: 'M',
          siglaPartido: 'UNIÃO',
          siglaUF: 'PR',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF006',
          nome: 'Eduardo Braga',
          sexo: 'M',
          siglaPartido: 'MDB',
          siglaUF: 'AM',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF007',
          nome: 'Tasso Jereissati',
          sexo: 'M',
          siglaPartido: 'PSDB',
          siglaUF: 'CE',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF008',
          nome: 'Omar Aziz',
          sexo: 'M',
          siglaPartido: 'PSD',
          siglaUF: 'AM',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF009',
          nome: 'Simone Tebet',
          sexo: 'F',
          siglaPartido: 'MDB',
          siglaUF: 'MS',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senadora',
        },
        {
          identificacao: 'SF010',
          nome: 'Randolfe Rodrigues',
          sexo: 'M',
          siglaPartido: 'REDE',
          siglaUF: 'AP',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },

        {
          identificacao: 'CD001',
          nome: 'Arthur Lira',
          sexo: 'M',
          siglaPartido: 'PP',
          siglaUF: 'AL',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
        {
          identificacao: 'CD002',
          nome: 'Gleisi Hoffmann',
          sexo: 'F',
          siglaPartido: 'PT',
          siglaUF: 'PR',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },
        {
          identificacao: 'CD003',
          nome: 'Kim Kataguiri',
          sexo: 'M',
          siglaPartido: 'UNIÃO',
          siglaUF: 'SP',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
        {
          identificacao: 'CD004',
          nome: 'Tabata Amaral',
          sexo: 'F',
          siglaPartido: 'PSB',
          siglaUF: 'SP',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },
        {
          identificacao: 'CD005',
          nome: 'Marina Silva',
          sexo: 'F',
          siglaPartido: 'REDE',
          siglaUF: 'AC',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },
        {
          identificacao: 'CD006',
          nome: 'Baleia Rossi',
          sexo: 'M',
          siglaPartido: 'MDB',
          siglaUF: 'SP',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
        {
          identificacao: 'CD007',
          nome: 'Marcelo Freixo',
          sexo: 'M',
          siglaPartido: 'PSB',
          siglaUF: 'RJ',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
        {
          identificacao: 'CD008',
          nome: 'Erika Kokay',
          sexo: 'F',
          siglaPartido: 'PT',
          siglaUF: 'DF',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },
        {
          identificacao: 'CD009',
          nome: 'Nikolas Ferreira',
          sexo: 'M',
          siglaPartido: 'PL',
          siglaUF: 'MG',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
        {
          identificacao: 'CD010',
          nome: 'Sâmia Bomfim',
          sexo: 'F',
          siglaPartido: 'PSOL',
          siglaUF: 'SP',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },

        {
          identificacao: 'SF011',
          nome: 'Humberto Costa',
          sexo: 'M',
          siglaPartido: 'PT',
          siglaUF: 'PE',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senador',
        },
        {
          identificacao: 'SF012',
          nome: 'Ana Amélia',
          sexo: 'F',
          siglaPartido: 'PP',
          siglaUF: 'RS',
          siglaCasaLegislativa: 'SF',
          cargo: 'Senadora',
        },
        {
          identificacao: 'CD011',
          nome: 'Lídice da Mata',
          sexo: 'F',
          siglaPartido: 'PSB',
          siglaUF: 'BA',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputada',
        },
        {
          identificacao: 'CD012',
          nome: 'Orlando Silva',
          sexo: 'M',
          siglaPartido: 'PCdoB',
          siglaUF: 'SP',
          siglaCasaLegislativa: 'CD',
          cargo: 'Deputado',
        },
      ],
    };
  }

  private getObjetoParecer = (): void => {
    const parecerEl = this._parecer;
    if (!parecerEl) {
      console.warn('lexml-eta-parecer não encontrado.');
      return;
    }
    const ObjetoParecer: Parecer = parecerEl.getParecer();
    console.log('--------------------- [PARECER] ---------------------');
    console.log(ObjetoParecer);
  };

  executar(): void {
    const parecerEl = this._parecer;
    if (!parecerEl) {
      console.warn('lexml-eta-parecer não encontrado.');
      return;
    }
    const params: LexmlEtaParecerParametrosEdicao = {};
    const parecer = new Parecer();

    // Metadados básicos
    parecer.aplicacao = 'lexeditweb';
    parecer.versaoAplicacao = '1.0.0';
    parecer.metadados = {
      ambiente: 'DEV',
      origem: 'Teste manual',
    } as any;
    const usuario: Usuario = {
      nome: 'usuario.teste',
      id: 'id-usuario',
      sigla: 'R',
    } as Usuario;
    const revisaoRelatorio = {
      type: 'RevisaoRelatorio',
      id: '',
      usuario,
      dataHora: '2025-11-13T19:43:31.400Z',
      descricao: 'Relatorio Alterado',
    } as RevisaoRelatorio;
    const revisaoVoto = new RevisaoVoto(
      usuario,
      '2025-11-13T19:43:31.400Z',
      'Voto alterado',
    ) as RevisaoVoto;
    parecer.revisoes = [revisaoRelatorio, revisaoVoto];
    const materia = new ProposicaoReferenciada();
    materia.urn = 'urn:lex:br:senado:projeto.lei;123;2025';
    materia.identificacaoTexto = 'PL 123/2025 (Senado Federal)';
    parecer.materia = materia;

    const destino = new Destino();
    destino.colegiadoApreciador = 'Comissão';
    destino.comissao = {
      siglaCasaLegislativa: 'SF',
      sigla: 'CAE',
      nome: 'Comissão de Assuntos Econômicos',
    } as Comissao;
    parecer.destino = destino;
    parecer.ano = new Date(2022, 0, 1).getFullYear();
    parecer.data = new Date(Date.UTC(2002, 0, 1)).toISOString().slice(0, 10);
    parecer.local = 'Brasília — DF';
    parecer.epigrafe = 'PARECER Nº 12, DE 2025 — CAE';
    parecer.ementa =
      'Altera a Lei nº 9.000/1995 para atualizar regras sobre incentivos fiscais ao setor tecnológico.';
    parecer.relatorio = `
      <p><ins usuario="usuario.teste" date="2025-11-13 16:32:00 " title="Revisão de ruan.oliveira em 13/11/2025 16:32" id-revisao="94b0de23-5c17-4272-a79b-aac56c070a1d">vvv</ins>Trata-se<nota-rodape class="nota-rodape" contenteditable="false" id-nota-rodape="nr1762440815918" texto="&amp;lt;p&amp;gt;Nota de rodape 1&amp;lt;/p&amp;gt;" numero="1">1</nota-rodape> de proposição que visa modernizar o marco regulatório de incentivos fiscais
      ao setor de tecnologia, com o objetivo de aumentar a competitividade e fomentar a inovação
      no país. Foram recebidas contribuições da sociedade civil e do setor produtivo.</p>
      <p>Em audiência pública realizada nesta Comissão, especialistas apresentaram dados sobre
      os impactos econômicos da medida, notadamente sobre emprego e arrecadação.</p>
    `.trim();
    parecer.analise = `
      <p>Do ponto de vista orçamentário, a proposição observa o art. 113 do ADCT,
      acompanhada de estimativa de impacto e compensação correspondente.</p>
      <p>Juridicamente, não se vislumbram vícios de constitucionalidade ou antinomias
      com a legislação em vigor. A técnica legislativa atende às exigências da LC 95/1998.</p>
    `.trim();

    parecer.voto = `
      <p>
        <ins usuario="usuario.teste" date="2025-11-13 16:32:00 " title="Revisão de ruan.oliveira em 13/11/2025 16:32" id-revisao="94b0de23-5c17-4272-a79b-aac56c070a1d">TESTE</ins> Diante do exposto, o voto é pela <strong>aprovação</strong> do Projeto de Lei nº 123, de 2025.
      </p>
      <p>
        <em>Conclusão:</em> Pela aprovação do Projeto de Lei nº 123, de 2025, na forma do texto original.
      </p>
    `.trim();

    parecer.anexos = [
      {
        idArquivo: 'ARQ_SUB_001',
        nomeArquivo: 'Substitutivo - PL 123/2025.pdf',
        tipo: 'substitutivo',
        mimeType: MimeType.PDF,
      } as AnexoParecer,
      {
        idArquivo: 'ARQ_EME_001',
        nomeArquivo: 'Emenda nº 1 - PL 123/2025.pdf',
        tipo: 'emenda',
        mimeType: MimeType.PDF,
      } as AnexoParecer,
    ];
    // Autoria (mantenho o default caso seu modelo crie a estrutura sozinho)
    const autoria = new AutoriaParecer() as any;
    autoria.relator = {
      identificacao: 'SF001',
      nome: 'Rodrigo Pacheco',
      sexo: 'M',
      siglaPartido: 'PSD',
      siglaUF: 'MG',
      siglaCasaLegislativa: 'SF',
      cargo: 'Senador',
    };
    autoria.presidente = {
      identificacao: 'SF001',
      nome: 'Rodrigo Pacheco',
      sexo: 'M',
      siglaPartido: 'PSD',
      siglaUF: 'MG',
      siglaCasaLegislativa: 'SF',
      cargo: 'Senador',
    };
    parecer.autoria = autoria;

    // Opções de impressão (caso seu template FO as utilize)
    const op = new OpcoesImpressao() as any;
    op.imprimirBrasao = true;
    op.textoCabecalho = 'Senado Federal — Comissão de Assuntos Econômicos';
    op.imprimirSumario = false;
    op.tamanhoFonte = 14;
    parecer.opcoesImpressao = op;

    // Pendências que o editor pode exibir ao usuário (opcional)
    parecer.pendenciasPreenchimento = [];

    // Finaliza
    params.parecer = parecer;
    console.log('params');
    console.log(params);
    parecerEl.inicializarEdicao(params);
  }

  render(): TemplateResult {
    return html`
      <style>
        .lexml-eta-main-header {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          flex-wrap: wrap;
        }
        .lexml-eta-main-header span {
          vertical-align: middle;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .lexml-eta-btn--demo {
          text-align: center;
          color: white;
          border-radius: 8px;
          background: red;
          width: 4rem;
          height: 1.5rem;
        }
        .nome-proposicao {
          font-weight: bold;
          background-color: #ccc;
          /* color: black; */
          padding: 5px 10px;
          border-radius: 2px;
          margin-bottom: 2px;
        }
      </style>
      <div class="lexml-eta-main-header">
        <div class="lexml-eta-main-header--title">
          <span>ETA - Parecer</span>
          <input
            type="button"
            class="lexml-eta-btn--demo"
            title="Aplicação exemplo"
            value="Demo"
          />
        </div>
        <div class="lexml-eta-main-header--actions">
          <input
            type="button"
            value="gerar Objeto Parecer (Console)"
            @click=${this.getObjetoParecer}
          />
          <input type="button" value="Ok" @click=${this.executar} />
        </div>
      </div>
      <div class="nome-proposicao">TESTE</div>
      <lexml-eta-parecer
        .lexmlParecerConfig=${this.parecerConfig}
      ></lexml-eta-parecer>
    `;
  }
}
