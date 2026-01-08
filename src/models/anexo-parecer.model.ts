import { TipoDocumento } from '../types/tipo-documento.js';

export enum MimeType {
  PDF = 'application/pdf',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}

export class AnexoParecer {
  idArquivo = '';
  nomeArquivo = '';
  nomeDocumento = '';
  tipo?: TipoDocumento;
  mimeType: MimeType = MimeType.PDF;
}
