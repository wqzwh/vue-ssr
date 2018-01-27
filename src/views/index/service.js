import Q from 'q';
import CONF from './conf';
import API from '@/public/utils/api';

const M = CONF['index'];

if (process.env.STATS === 'dev') M.MOCK ? require('./mock') : '';

export default {
  get(params = {}) {
    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GET'], params).then((data) => {
        resolve(data);
      });
    });
  },
  getBottom(params = {}) {
    return Q.Promise((resolve, reject) => {
      API.get(M['API']['GETBOTTOM'], params).then((data) => {
        resolve(data);
      });
    });
  }
}
