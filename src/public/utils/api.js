import axios from 'axios'
import Q from 'q'

function ajax(url, type, options) {
    return Q.Promise((resolve, reject) => {
        axios({
            method : type,
            url : url,
            // responseType:'stream',
            data : options
        })
        .then((result) => {
            if (result && result.status === 401) {
                location.href = '/views/401.html'
            }
            if (result && result.status === 200) {
                resolve(result.data);
            } else {
                reject({
                    errno: result.errno,
                    msg: result.msg
                });
            }
        })
        .catch(function(error) {
            console.log(error,url);
        });
    })
}

const config = {
    get(url, options) {
        const _self = this;
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
        const _self = this;
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
        const _self = this;
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
        const _self = this;
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
        const _self = this;
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
