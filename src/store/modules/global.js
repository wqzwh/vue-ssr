import _ from 'lodash'
import * as types from '../mutation-types'

const state = {
  loginfo: {}
}

const mutations = {
  [types.SET_LOGIN_INFO](state, params) {
    state.loginfo = _.clone(params)
  }
}

export default {
  state,
  mutations
}
