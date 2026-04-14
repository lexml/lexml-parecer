/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-use-before-define */
import { Destino, Revisao } from '@lexml/lexml-ui-commons';
import { AnexoParecer } from './anexo-parecer.model.js';

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

  revisoes: Revisao[] = [];

  notasRodape: NotaRodape[] = [];

  siglaCasaLegislativa: 'SF' | 'CD' | 'CN' = 'CN';

  tituloSecao2 = '';

  tituloSecao3 = '';
}

export type Metadados = {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
};

export class ProposicaoReferenciada {
  urn = '';
  sigla = '';
  numero = '';
  ano = '';
  ementa = '';
  identificacaoTexto = '';
}

export class Parlamentar {
  identificacao = '';
  nome = '';
  sexo: 'M' | 'F' = 'M';
  siglaPartido = '';
  siglaUF = '';
  siglaCasaLegislativa: 'SF' | 'CD' = 'CD';
  cargo = '';
}

export class OpcoesImpressao {
  imprimirBrasao = true;
  textoCabecalho = '';
  reduzirEspacoEntreLinhas = false;
  tamanhoFonte = 14;
}

export class AutoriaParecer {
  relator?: Parlamentar;
  presidente?: Parlamentar;
}

// ********************************************************************************************

class NotaRodape {
  id: string;
  numero: number;
  texto: string;

  constructor({
    id,
    numero,
    texto,
  }: {
    id: string;
    numero: number;
    texto: string;
  }) {
    this.id = id;
    this.numero = numero;
    this.texto = texto;
  }
}

const NOTA_RODAPE_INPUT_EVENT = 'nota-rodape:input';
const NOTA_RODAPE_CHANGE_EVENT = 'nota-rodape:change';
const NOTA_RODAPE_REMOVE_EVENT = 'nota-rodape:remove';

export {
  NotaRodape,
  NOTA_RODAPE_INPUT_EVENT,
  NOTA_RODAPE_CHANGE_EVENT,
  NOTA_RODAPE_REMOVE_EVENT,
};
