import _ from 'lodash'
import * as types from '../mutation-types'

const state = {
  loginfo: {},
  data: {}
}

const mutations = {
  [types.SET_LOGIN_INFO](state, params) {
    state.loginfo = _.clone(params)
  },
  [types.GET_DATA](state, params) {
    state.data = _.clone(params.data)
  }
}

export default {
  state,
  mutations
}
