import Vue from 'vue'
import vuex from 'vuex'
// Change Logs
import createLogger from 'vuex/dist/logger'
// Introduce a store object
import dialogStore from './modules/dialog_store.js'

Vue.use(vuex)

// True in the development environment, false otherwise
const debug = process.env.NODE_ENV !== 'production'

export default new vuex.Store({
  modules: {
    dialog: dialogStore
  },
  // Displays status changes for vuex in a development environment
  plugins: debug ? [createLogger()] : []
})
