import * as types from '../mutation-types'
import { marketsList } from '../../service'

const state = {
  marketsDate: []
}
// getters
// Gets the properties coming out from under this module
const getters = {
  marketsList: state => state.marketsDate
}

// actions
const actions = {
  getMarketsList ({ commit, state }, params) {
    marketsList(params)
      .then(doc => {
        if (doc.success) {
          let marketsDate = doc.data
          commit(types.MARKETSDATE, marketsDate)
        }
      })
  }
}

// mutations
// state modification
const mutations = {
  [types.MARKETSDATE] (state, marketsDate) {
    state.marketsDate = marketsDate
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
