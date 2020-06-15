import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/userside/Home.vue'
import Login from '../views/Login.vue'
import LabelMange from '../views/userside/labelManage.vue'
import Doom from '../views/doom.vue'
import ChartRoom from '../views/userside/chatroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/manage',
    name: 'LabelManage',
    component: LabelMange
  },
  {
    path: '/doom',
    name: 'Doom',
    component: Doom
  },
  {
    path: '/chartRoom',
    name: 'ChartRoom',
    component: ChartRoom
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/views/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
