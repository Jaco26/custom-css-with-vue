import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Other from '@/views/Other'

Vue.use(VueRouter);

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
