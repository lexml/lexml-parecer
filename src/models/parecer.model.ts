import { Destino } from '@lexml/lexml-ui-commons';
import type { RevisaoTextoLivre } from '@lexml/lexml-ui-commons';
import type { AnexoParecer } from './anexo-parecer.model.js';
import { AutoriaParecer } from './autoria-parecer.model.js';
import { NotaRodape } from './nota-rodape.model.js';
import { OpcoesImpressao } from './opcoes-impressao.model.js';
import { ProposicaoReferenciada } from './proposicao-referenciada.model.js';

export type Metadados = Record<
  string,
  string | number | boolean | string[] | number[] | boolean[]
>;

export class Parecer {
  dataUltimaModificacao = new Date().toISOString();
  aplicacao = '';
  versaoAplicacao = '';
  metadados: Metadados = {};
  pendenciasPreenchimento: string[] = [];

  ano = new Date().getFullYear();
  ementa = '';
  materia = new ProposicaoReferenciada();
  epigrafe = '';

  relatorio = '';
  analise = '';
  voto = '';

  anexos: AnexoParecer[] = [];

  local = '';

  destino: Destino = new Destino();

  data?: string | null = new Date().toISOString().replace(/T.*/, ''); // formato “YYYY-MM-DD”

  autoria = new AutoriaParecer();

  opcoesImpressao = new OpcoesImpressao();

  revisoes: RevisaoTextoLivre[] = [];

  notasRodape: NotaRodape[] = [];

  siglaCasaLegislativa: 'SF' | 'CD' | 'CN' = 'CN';

  tituloSecao2 = '';

  tituloSecao3 = '';
}
