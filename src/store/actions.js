const makeAction = type => {
  return ({ commit }, ...args) => commit(type, ...args)
}

// global actions
export const setLginInfo = makeAction('SET_LOGIN_INFO')
// 入口组件首次出发的action
export const getData = makeAction('GET_DATA')
