import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index'
import LoginPage from '@/components/Login'
import Goods from '@/components/Goods'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
