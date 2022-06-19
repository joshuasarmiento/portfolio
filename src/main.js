import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import BackToTop from 'vue-backtotop'

createApp(App)
        .use(router)
        .use(BackToTop)
        .mount('#app');

const feather = require('feather-icons');
feather.replace();
