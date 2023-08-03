import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import Page from './Page.vue';
import Error from './Error.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/portofolio',
  },
  {
    path: '/portofolio',
    component: Page,
  },
  {
    path: '/error',
    component: Error,
  },
  {
    path: '/:catchAll(.*)',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
