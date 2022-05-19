import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Opiniones from '@/views/Opiniones';
import Administracion from '@/views/Administracion';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
    alias: ["/home"],
  },
  {
    path: '/opiniones',
    name: "Opiniones",
    component: Opiniones,
    alias: ["/opinion"],
  },
  {
    path: '/administracion',
    name: "Administracion",
    component: Administracion,
    alias: ["/administrar"],
  },
  {
    path: '*',
    name: "NotFound",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
