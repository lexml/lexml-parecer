import { TipoDocumento } from '../types/tipo-documento.js';

export class Anexo {
  nomeArquivo = '';
  base64 = '';
}

export class AnexoParecer extends Anexo {
  tipo?: TipoDocumento;
}
