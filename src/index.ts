import { registerIconLibrary } from '@awesome.me/webawesome/dist/webawesome.js';

const ICONS_LEXML_PARECER = '/assets/lexml-parcer/icons/';

registerIconLibrary('icons-parecer', {
  resolver: (name: string) => `${ICONS_LEXML_PARECER}${name}.svg`,
  mutator: (svg: SVGElement) => {
    if (!svg.getAttribute('fill')) svg.setAttribute('fill', 'currentColor');
    if (!svg.getAttribute('stroke')) svg.setAttribute('stroke', 'currentColor');
  },
});

import 'quill/dist/quill';
(window as any).Quill = Quill;

import '@awesome.me/webawesome/dist/components/tab-group/tab-group.js';
import '@awesome.me/webawesome/dist/components/tab/tab.js';
import '@awesome.me/webawesome/dist/components/tab-panel/tab-panel.js';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/radio-group/radio-group.js';
import '@awesome.me/webawesome/dist/components/textarea/textarea.js';
import '@awesome.me/webawesome/dist/components/radio/radio.js';
import '@awesome.me/webawesome/dist/components/select/select.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/option/option.js';
import '@awesome.me/webawesome/dist/components/badge/badge.js';
import '@awesome.me/webawesome/dist/components/card/card.js';

export { LexmlEtaParecer } from './components/parecer/lexml-eta-parecer.component.js';
export { LexmlParecerEmenta } from './components/ementa/parecer-ementa.component.js';
export { LexmlParecerRelatorio } from './components/relatorio/parecer-relatorio.component.js';
export { LexmlParecerAnalise } from './components/analise/parecer-analise.component.js';
export { LexmlParecerVoto } from './components/voto/parecer-voto.component.js';
export { LexmlParecerDataAutoriaImpressao } from './components/dataAuroriaImpressao/parecer-data-autoria-impressao.component.js';
export { LexmlParecerAvisos } from './components/avisos/parecer-avisos.component.js';
export { LexmlParecerAutoriaComponent } from './components/autoria/parecer-autoria.component.js';
export { LexmlParecerConfig } from './config/lexml-parecer-config.js';
export { Usuario, Comissao, Destino } from '@ui-commons';
export { Parecer, ProposicaoReferenciada } from './models/diversos.model.js';
