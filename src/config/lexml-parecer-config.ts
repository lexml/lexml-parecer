import type { AnexoParecer } from '../models/anexo-parecer.model.js';
import type { Parlamentar } from '../models/parlamentar.model.js';
import type { TipoAnexoParecer } from '../types/tipo-anexo-parecer.js';

export type UploadAnexoCallback = (file: File) => string | Promise<string>;
export type DeleteAnexoCallback = (anexo: AnexoParecer) => void | Promise<void>;

export interface ObterAnexoBlobResult {
  blob: Blob;
  contentType: string | null;
}

export type ObterAnexoBlobCallback = (
  anexo: AnexoParecer,
) => ObterAnexoBlobResult | Promise<ObterAnexoBlobResult>;

export type VisualizarAnexoCallback = (
  anexo: AnexoParecer,
) => void | Promise<void>;

export interface LexmlParecerConfig {
  parlamentares: Parlamentar[];
  tiposAnexos?: TipoAnexoParecer[];
  onUploadAnexo?: UploadAnexoCallback;
  onDeleteAnexo?: DeleteAnexoCallback;
  onObterAnexoBlob?: ObterAnexoBlobCallback;
  onVisualizarAnexo?: VisualizarAnexoCallback;
}
