import { AnexoParecer } from './anexo.modelo.js';
import { NotaRodape } from './diversos.modelo.js';

export class ItemVoto {
  texto?: string;

  documento?: AnexoParecer;

  posicao?: number;

  notasRodape?: NotaRodape[];
}
