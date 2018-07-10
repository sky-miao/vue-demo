import Vue from 'vue'
import Router from 'vue-router'
const index = () => import('@/pages/index')
const HelloWorld = () => import('@/components/HelloWorld')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
