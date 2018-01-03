// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import getters from './getters'
import modules from './modules/index'
Vue.use(Vuex)
export function createStore() {
  return new Vuex.Store({
    actions,
    getters,
    modules,
    strict: false
  })
}
