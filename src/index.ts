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
export { Parecer } from './models/parecer.model.js';
export { Usuario } from '@lexml/lexml-ui-commons';

export type {
  LexmlParecerConfig,
  ObterAnexoBlobResult,
} from './config/lexml-parecer-config.js';

export type { LexmlEtaParecerParametrosEdicao } from './models/lexml-eta-parecer-parametro-edicao.model.js';

export type { Parlamentar } from './models/parlamentar.model.js';
export type { AnexoParecer } from './models/anexo-parecer.model.js';
