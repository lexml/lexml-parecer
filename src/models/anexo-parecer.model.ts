export enum MimeType {
  PDF = 'application/pdf',
  DOCX = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
}

export interface AnexoParecer {
  idArquivo: string;
  nomeArquivo: string;
  nomeDocumento: string;
  tipo?: string;
  mimeType: MimeType;
}
