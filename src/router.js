import { createRouter, createWebHistory  } from 'vue-router'
import MainPage from './components/MainPage';
import Top from './components/Top.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/top/:category', component: Top, name: 'top' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router