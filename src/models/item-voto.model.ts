//import { AnexoParecer } from './anexo-parecer.model.js';
import type { NotaRodape } from './nota-rodape.model.js';

export class ItemVoto {
  texto?: string;

  //documento?: AnexoParecer;

  posicao?: number;

  notasRodape?: NotaRodape[];
}
