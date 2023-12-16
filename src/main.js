import { createApp } from 'vue'
import router from './router';
import 'aframe'; // Import A-Frame library
import './style.css'
import VueParticles from 'vue3-particles'

import App from './App.vue'

// Register A-Frame components as custom elements
const app = createApp(App);
app.config.isCustomElement = (tag) => tag.startsWith('a-');
// router
app.use(router);
// fx
app.use(VueParticles);
// app
app.mount('#app');
