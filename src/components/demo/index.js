import Q from 'q';

import CONF from './conf';

import API from '../../public/utils/api';

const M = CONF['demo'];

M.MOCK ? require('./mock') : '';

export default {
  get(params = {}) {
    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], params).then((res) => {
        const data = {
          moduleName: M['NAME'],
          moduleIcon: M['ICON'],
          moduleData: res
        }
        resolve(data);
      });
    });

  }
}
