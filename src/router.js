import { createRouter, createWebHistory  } from 'vue-router'
import MainPage from './components/MainPage';
import Top from './components/Top.vue';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/top',
    component: Top,
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router