/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-use-before-define */
import { Destino } from '@ui-commons';
import { Voto } from './voto.modelo.js';

export class Parecer {
  dataUltimaModificacao = new Date().toISOString();
  aplicacao = '';
  versaoAplicacao = '';
  metadados: Metadados = {};
  pendenciasPreenchimento: string[] = [];

  ano = new Date().getFullYear();
  ementa = '';
  colegiadoApreciador = new ColegiadoApreciador();
  materia = new ProposicaoReferenciada();
  epigrafe = '';

  relatorio = '';
  analise = '';
  voto: Voto = new Voto();

  local = ''; // Calculado a partir do destino (Colegiado Apreciador)

  destino: Destino = new Destino();

  data?: string | null = new Date().toISOString().replace(/T.*/, ''); // formato “YYYY-MM-DD”

  autoria = new AutoriaParecer();

  opcoesImpressao = new OpcoesImpressao();

  revisoes: Revisao[] = [];

  notasRodape: NotaRodape[] = [];
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

export class Usuario {
  nome = 'Anônimo';
  id: any;
  sigla?: string;

  constructor(nome?: string, id?: any, sigla?: string) {
    this.nome = nome || 'Anônimo';
    this.id = id;
    this.sigla = sigla;
  }
}

export class ColegiadoApreciador {
  siglaCasaLegislativa?: 'CN' | 'SF' | 'CD' = 'CN';
  tipoColegiado: 'Plenário' | 'Comissão' | 'Plenário via Comissão' = 'Plenário';
  siglaComissao?: string;
}

export class AutoriaParecer {
  relator?: Parlamentar;
  presidente?: Parlamentar;
}

// ********************************************************************************************

export abstract class Revisao {
  abstract type: string; // Necessário para identificação da classe no Java
  id: string;
  usuario: Usuario;
  dataHora: string;
  descricao?: string;

  constructor(usuario: Usuario, dataHora: string, descricao?: string) {
    this.id = ''; // generateUUID();
    this.usuario = usuario;
    this.dataHora = dataHora;
    this.descricao = descricao;
  }
}

export class RevisaoTextoLivre extends Revisao {
  type = 'RevisaoTextoLivre';
  textoAntes?: string;

  constructor(
    usuario: Usuario,
    dataHora: string,
    descricao: string,
    textoAntes: string,
  ) {
    super(usuario, dataHora, descricao);
    this.textoAntes = textoAntes;
  }
}

// PARECER
export class RevisaoRelatorio extends RevisaoTextoLivre {
  type = 'RevisaoRelatorio';
}

export class RevisaoAnalise extends RevisaoTextoLivre {
  type = 'RevisaoAnalise';
}

export class RevisaoVoto extends Revisao {
  type = 'RevisaoVoto';
}

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
