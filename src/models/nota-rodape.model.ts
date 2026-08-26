export class NotaRodape {
  id: string;
  numero: number;
  texto: string;

  constructor({
    id,
    numero,
    texto,
  }: {
    id: string;
    numero: number;
    texto: string;
  }) {
    this.id = id;
    this.numero = numero;
    this.texto = texto;
  }
}

export const NOTA_RODAPE_INPUT_EVENT = 'nota-rodape:input';
export const NOTA_RODAPE_CHANGE_EVENT = 'nota-rodape:change';
export const NOTA_RODAPE_REMOVE_EVENT = 'nota-rodape:remove';
