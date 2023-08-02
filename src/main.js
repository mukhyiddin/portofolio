import './style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './index'; // Impor router yang telah Anda buat

createApp(App).use(router).mount('#app');
