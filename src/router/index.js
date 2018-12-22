import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ChildRouter from '@/components/ChildRouter'
import login from '@/page/login'
import home from '@/page/home'
import vx from '@/page/vx'
import custom from '@/page/custom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/vx',
      name: 'vx',
      component: vx,
      children:[
        {path:'/vx/ChildRouter',component:ChildRouter}
      ]
    },
    {
      path: '/custom',
      name: 'custom',
      component: custom
    },
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
