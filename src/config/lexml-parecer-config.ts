import { Comissao } from '@ui-commons';
import {
  Parlamentar,
  ProposicaoReferenciada,
} from 'src/models/diversos.modelo.js';

export interface LexmlParecerConfig {
  parlamentares: Parlamentar[];

  buscarMateriasFunction: (termo: string) => Promise<ProposicaoReferenciada[]>;

  comissoes: Comissao[];

  disableAnalise: boolean;
}
