import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/widget',
    name: 'LeafletWidget',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // this is a harder test to pass with lazy load so keep it this way to show it works
    component: () => import(/* webpackChunkName: "widget" */ '../views/LeafletWidget.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
