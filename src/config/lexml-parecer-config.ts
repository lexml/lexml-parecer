import { Comissao } from '@ui-commons';
import {
  Parlamentar,
  ProposicaoReferenciada,
} from 'src/models/diversos.modelo.js';

export class LexmlParecerConfig {
  parlamentares: Parlamentar[] = [];

  materias: ProposicaoReferenciada[] = [];

  comissoes?: Comissao[] = [];
}
