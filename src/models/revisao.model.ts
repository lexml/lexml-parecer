import { Revisao, RevisaoTextoLivre, Usuario } from '@ui-commons';

export class RevisaoRelatorio extends RevisaoTextoLivre {
  type = 'RevisaoRelatorio';
}

export class RevisaoAnalise extends RevisaoTextoLivre {
  type = 'RevisaoAnalise';
}

export class RevisaoEmenta extends RevisaoTextoLivre {
  type = 'RevisaoEmenta';
}

export class RevisaoTextoItemVoto extends RevisaoTextoLivre {
  type = 'RevisaoTextoItemVoto';
  posicao: number;
  constructor(
    usuario: Usuario,
    dataHora: string,
    descricao: string,
    posicao: number,
  ) {
    super(usuario, dataHora, descricao);
    this.posicao = posicao;
  }
}

export class RevisaoVoto extends Revisao {
  type = 'RevisaoVoto';
  itensTexto: RevisaoTextoItemVoto[];

  constructor(
    usuario: Usuario,
    dataHora: string,
    descricao: string,
    itensTexto: RevisaoTextoItemVoto[],
  ) {
    super(usuario, dataHora, descricao);
    this.itensTexto = itensTexto;
  }
}
