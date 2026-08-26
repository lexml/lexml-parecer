import { Destino } from '@lexml/lexml-ui-commons';
import { getAnoAtual } from '../util/date-util.js';
import { ProposicaoReferenciada } from './proposicao-referenciada.model.js';

export class Materia {
  ano: number = getAnoAtual();

  materia: ProposicaoReferenciada = new ProposicaoReferenciada();

  destino: Destino = new Destino();

  ementa: string = '';
}
