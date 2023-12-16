// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import UploadImages from '@/components/UploadImages.vue';
import VrExperience from '@/components/VrExperience.vue';
import MixedReality from '@/components/MixedReality.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/upload', component: UploadImages },
    { path: '/aframe', component: VrExperience },
    { path: '/mixed', component: MixedReality },
  ],
});

export default router;

