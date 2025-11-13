import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '@/views/LoginView.vue';
import StartView from '@/views/StartView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: StartView,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
        },
    ],
});

export default router;
