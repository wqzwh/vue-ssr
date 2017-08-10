import {DEMO} from '../conf.js';

const MODULECONF = {
  'demo': {
    NAME: 'demo',
    ICON: '',
    MOCK: DEMO.INDEX_URL_MOCK,
    API: {
      GET: DEMO.INDEX_URL,
    }
  },
};

export default MODULECONF;
