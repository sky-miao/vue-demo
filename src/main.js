// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//vuex
import vuex from 'vuex'
Vue.use(vuex);

import store from './store'

import VueI18n from 'vue-i18n'
import { getCookie } from './untils/cookie'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG', 'en'),// 语言标识
  messages: {
    'zh': require('./locale/zh'),
    'en': require('./locale/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  i18n,
  components: { App },
  template: '<App/>'
})
