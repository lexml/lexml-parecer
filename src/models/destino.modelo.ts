/* eslint-disable no-shadow */
export enum Destino {
  PLENARIO = 'Plenario',
  COMISSAO = 'Comissao',
  PLENARIO_VIA_COMISSAO = 'Plenario via comissao',
}

export const DestinoLabel: Record<Destino, string> = {
  [Destino.PLENARIO]: 'Plenário',
  [Destino.COMISSAO]: 'Comissão',
  [Destino.PLENARIO_VIA_COMISSAO]: 'Plenário via Comissão',
};

export function getDestinoValue(destino: Destino): string {
  return DestinoLabel[destino];
}

export function getAllDestinosValues(): { value: Destino; label: string }[] {
  return Object.values(Destino).map(value => ({
    value,
    label: DestinoLabel[value],
  }));
}
