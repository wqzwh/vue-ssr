// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import Home from './modules/Home'
Vue.use(Vuex)
export function createStore() {
  return new Vuex.Store({
    actions,
    getters,
    modules:{
      Home
    },
  })
}
