import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import team from '@/views/team'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/team',
      name: 'team',
      component: team
    }
  ]
})

