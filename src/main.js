import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import BootstrapVue3 from 'bootstrap-vue-3'

import './assets/main.css'

// createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')


