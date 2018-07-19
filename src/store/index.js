import Vue from 'vue'
import vuex from 'vuex'
// Change Logs
import createLogger from 'vuex/dist/logger'
// Introduce a store object
import dialogStore from './modules/dialog_store.js'
import markets from './modules/markets.js'

Vue.use(vuex)

// True in the development environment, false otherwise
const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  modules: {
    dialog: dialogStore,
    markets
  },
  // Displays status changes for vuex in a development environment
  plugins: debug ? [createLogger()] : []
})
