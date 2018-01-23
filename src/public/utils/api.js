import axios from 'axios'
import qs from 'qs'
import Q from 'q'
/**
 * 兼容 不支持promise 的低版本浏览器
 */
require('es6-promise').polyfill();
import C from '../conf'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.withCredentials = true

function ajax(url, type, options) {

  return Q.Promise((resolve, reject) => {
    axios({
        method: type,
        url: C.HOST + url,
        params: type === 'get' ? options : null,
        data: type !== 'get' ? qs.stringify(options) : null
      })
      .then((result) => {
        if (result && result.status === 401) {
          // location.href = '/views/401.html'
        }
        if (result && result.status === 200) {
          if (result.data.code === 200) {
            resolve(result.data.data);
          } else if (result.data.code === 401) {
            reject({
              nopms: true,
              msg: result.data.msg
            });
          } else {
            reject({
              error: true,
              msg: result.data.msg
            });
          }
        } else {
          reject({
            errno: result.errno,
            msg: result.msg
          });
        }
      })
      .catch(function(error) {
        console.log(error, url);
      });
  })
}

const config = {
  get(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'get', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  post(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'post', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  put(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'put', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  delete(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'delete', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  jsonp(url, options) {
    return Q.Promise((resolve, reject) => {
      ajax(url, 'jsonp', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  }
};

export default config;
