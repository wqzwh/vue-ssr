const makeAction = type => {
  return ({ commit }, ...args) => commit(type, ...args)
}

// global actions
export const setLginInfo = makeAction('SET_LOGIN_INFO')

