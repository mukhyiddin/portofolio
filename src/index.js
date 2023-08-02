import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Ganti 'Portofolio' dengan nama file komponen utama Anda

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/portofolio/',
      component: App,
    },
  ],
});

export default router;