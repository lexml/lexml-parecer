import { AnexoParecer } from './anexo.model.js';
import { NotaRodape } from './diversos.model.js';

export class ItemVoto {
  texto?: string;

  documento?: AnexoParecer;

  posicao?: number;

  notasRodape?: NotaRodape[];
}
