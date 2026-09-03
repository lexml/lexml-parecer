export interface TipoAnexoParecer {
  codigo: string;
  nome: string;
}

export const TIPO_ANEXO_OUTRO: Readonly<TipoAnexoParecer> = Object.freeze({
  codigo: 'outro',
  nome: 'Outro',
});

export function normalizarTiposAnexos(
  tipos?: readonly TipoAnexoParecer[] | null,
): TipoAnexoParecer[] {
  const tiposNormalizados: TipoAnexoParecer[] = [];
  const codigosAdicionados = new Set<string>();

  for (const tipo of Array.isArray(tipos) ? tipos : []) {
    if (
      !tipo ||
      typeof tipo.codigo !== 'string' ||
      typeof tipo.nome !== 'string'
    ) {
      continue;
    }

    const codigo = tipo.codigo.trim();
    const nome = tipo.nome.trim();

    if (
      !codigo ||
      !nome ||
      codigo === TIPO_ANEXO_OUTRO.codigo ||
      codigosAdicionados.has(codigo)
    ) {
      continue;
    }

    tiposNormalizados.push({ codigo, nome });
    codigosAdicionados.add(codigo);
  }

  tiposNormalizados.push({ ...TIPO_ANEXO_OUTRO });
  return tiposNormalizados;
}
