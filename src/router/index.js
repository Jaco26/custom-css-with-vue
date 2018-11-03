import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Other from '@/views/Other'

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/other',
      name: 'other',
      component: Other,
    },
  ],
});
