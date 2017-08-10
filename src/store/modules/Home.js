import * as types from '../mutationtypes';
import Q from 'q';


const state = {

}

const getters = {

}

const actions = {
  getSaleParams({ commit, state }, params) {
    return Q.Promise((resolve, reject) => {
      commit(types.CHUSHIHUA, params);
      resolve()
    });
  },
}

const mutations = {
  [types.CHUSHIHUA](state, data) {
    state.items = Object.assign({}, data);
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
