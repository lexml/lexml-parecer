import { Comissao } from '@ui-commons';
import {
  Parlamentar,
  ProposicaoReferenciada,
} from 'src/models/diversos.model.js';

export interface LexmlParecerConfig {
  parlamentares: Parlamentar[];

  buscarMateriasFunction: (termo: string) => Promise<ProposicaoReferenciada[]>;

  comissoes: Comissao[];
}
