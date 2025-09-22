import { Comissao } from '@ui-commons';
import {
  Parlamentar,
  ProposicaoReferenciada,
} from 'src/models/diversos.modelo.js';

export class LexmlParecerConfig {
  parlamentares: Parlamentar[] = [];

  buscarMateriasFunction?: (termo: string) => Promise<ProposicaoReferenciada[]>;

  comissoes?: Comissao[] = [];
}
