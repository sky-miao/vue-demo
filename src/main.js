// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

const messages = {
  zh: {
    message: {
      hello: '好好学习，天天向上！'
    }
  },
  en: {
    message: {
      hello: 'good good study, day day up!'
    }
  }
}

const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
