import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Confessions from '@/components/Confession/Confessions'
import CreateConfession from '@/components/Confession/CreateConfession'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Confession from '@/components/Confession/Confession'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/confessions',
      name: 'Confessions',
      component: Confessions
    },
    {
      path: '/confessions/new',
      name: 'CreateConfession',
      component: CreateConfession,
      beforeEnter: AuthGuard
    },
    {
      path: '/confessions/:id',
      name: 'Confession',
      props: true,
      component: Confession
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
