import { getAnoAtual } from '../util/date-util.js';
import { Destino } from './destino.modelo.js';
import { Option } from './option.modelo.js';

export class Materia {
  ano: number = getAnoAtual();

  materia: string = '';

  destino: Destino = Destino.PLENARIO;

  comissao?: Option;

  ementa: string = '';
}
