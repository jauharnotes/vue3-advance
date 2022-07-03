import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/routes/index.js';
import { store } from './stores/index';

createApp(App).use(router).use(store).mount('#app');
