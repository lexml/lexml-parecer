import { Parlamentar } from 'src/models/diversos.model.js';
import { AnexoParecer } from 'src/models/anexo-parecer.model.js';

export type VisualizarAnexoCallback = (
  anexo: AnexoParecer,
) => void | Promise<void>;

export interface LexmlParecerConfig {
  parlamentares: Parlamentar[];
  urlAnexo: string;
  onVisualizarAnexo?: VisualizarAnexoCallback;
}
