import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: HomeView
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/RegistroView.vue')
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: () => import(/* webpackChunkName: "Carrito" */ '../views/CarritoView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
