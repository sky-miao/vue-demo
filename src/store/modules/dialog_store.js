// import * as types from '../mutation-types'

// state
const state = {
  show: false
}

// Gets the properties coming out from under this module
const getters = {
  // This state right here corresponds to this state up here
  not_show (state) {
    return !state.show
  }
}

const actions = {
  // The context here has the same object and method as the $store we're using
  switch_dialog (context) {
    // You can also trigger other mutations here
    context.commit('switch_dialog')
  }
}
// state modification
const mutations = {
  // This state right here corresponds to this state up here
  switch_dialog (state) {
    // The state here corresponds to this state up here and you can do something else here to change the state
    state.show = state.show ? !true : true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
