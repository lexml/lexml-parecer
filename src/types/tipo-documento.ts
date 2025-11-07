export enum TipoDocumento {
  SUBSTITUTIVO = 'SUBSTITUTIVO',
  EMENDA = 'EMENDA',
  OUTRO = 'OUTRO',
}

export const TipoDocumentoLabel: Record<TipoDocumento, string> = {
  [TipoDocumento.SUBSTITUTIVO]: 'Substitutivo',
  [TipoDocumento.EMENDA]: 'Emenda',
  [TipoDocumento.OUTRO]: 'Outro',
};
