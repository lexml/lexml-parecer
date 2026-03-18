import { Parlamentar } from 'src/models/diversos.model.js';
import { AnexoParecer } from 'src/models/anexo-parecer.model.js';

export type UploadAnexoCallback = (file: File) => string | Promise<string>;
export type DeleteAnexoCallback = (anexo: AnexoParecer) => void | Promise<void>;
export type ObterAnexoBlobCallback = (
  anexo: AnexoParecer,
) =>
  | { blob: Blob; contentType: string | null }
  | Promise<{ blob: Blob; contentType: string | null }>;
export type VisualizarAnexoCallback = (
  anexo: AnexoParecer,
) => void | Promise<void>;

export interface LexmlParecerConfig {
  parlamentares: Parlamentar[];
  onUploadAnexo?: UploadAnexoCallback;
  onDeleteAnexo?: DeleteAnexoCallback;
  onObterAnexoBlob?: ObterAnexoBlobCallback;
  onVisualizarAnexo?: VisualizarAnexoCallback;
}
