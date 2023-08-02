import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import Err from './err.vue';
// import router from './index'; // Impor router yang telah Anda buat

import { createRouter, createWebHistory } from 'vue-router'; // Impor dari vue-router langsung

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/portofolio',
      component: App // Gunakan dynamic import untuk komponen App.vue
    },
    {
      path: '/err', // Path untuk NotFound, menangkap seluruh path yang tidak cocok dengan rute-rute lainnya
      component: Err, // Gunakan dynamic import untuk komponen App.vue
    },
  ],
});

createApp(App).use(router).mount('#app');