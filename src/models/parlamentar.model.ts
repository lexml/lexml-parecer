export interface Parlamentar {
  identificacao: string;
  nome: string;
  sexo: 'M' | 'F';
  siglaPartido: string;
  siglaUF: string;
  siglaCasaLegislativa: 'SF' | 'CD';
  cargo: string;
}
