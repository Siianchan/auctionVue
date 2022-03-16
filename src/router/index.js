import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/Index'
import LoginPage from '@/components/Login'
import Goods from '@/components/Goods'
import Publish from '@/components/Publish'
import Person from '@/components/Person'
import myOrder from '@/components/myOrder'
import updatePwd from '@/components/updatePwd'
import myAuction from '@/components/myAuction'
import userManage from '@/components/userManage'
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
    },
    {
      path: '/Publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/updatePwd',
      name: 'updatePwd',
      component: updatePwd
    },
    {
      path: '/myAuction',
      name: 'myAuction',
      component: myAuction
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: userManage
    }

  ]
})
