import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/color-changer',
    name: 'ColorChanger',
    component: () => import( '../views/colorChanger.vue')
  },
  {
    path: '/count-down',
    name: 'CountDown',
    component: () => import( '../views/countDown.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import( '../views/calculator.vue')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import( '../views/todo.vue')
  },
  {
    path: '/sticky-note',
    name: 'StickyNote',
    component: () => import( '../views/stickyNote.vue')
  },
  {
    path: '/calandar',
    name: 'Calandar',
    component: () => import( '../views/calandar.vue')
  },

  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
