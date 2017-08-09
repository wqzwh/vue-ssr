// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import Q from 'q';
import * as types from './mutationtypes';
Vue.use(Vuex)
export function createStore() {
    return new Vuex.Store({
        state: {
            items: {}
        },
        actions: {
            getSaleParams({ commit, state }, params) {
                return Q.Promise((resolve, reject) => {
                    commit(types.CHUSHIHUA, params);
                    resolve()
                });
            },
        },
        mutations: {
            [types.CHUSHIHUA](state, data) {
                state.items = Object.assign({}, data);
            },
        }
    })
}