import { getAnoAtual } from '../util/date-util.js';
import { Destino } from './Destino.js';
import { Option } from './Option.js';

export class Materia {
  ano: number = getAnoAtual();

  materia: string = '';

  destino: Destino = Destino.PLENARIO;

  comissao?: Option;

  ementa: string = '';
}
