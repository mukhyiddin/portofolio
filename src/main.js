import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import Page from './views/Page.vue'
import Error from './Error.vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

const routes = [
  {
    path: '/',
    redirect: '/resume/',
  },
  {
    path: '/resume/',
    component: Page,
  },
  {
    path: '/resume/:catchAll(.*)',
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: '/resume/'
});

createApp(App).use(router).mount('#app');
