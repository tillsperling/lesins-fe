import { createAuth0 } from '@auth0/auth0-vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import '@fontsource/libre-caslon-text';
import 'primeicons/primeicons.css';

import '@/styles/main.css';
import App from '@/App.vue';
import { preset } from '@/plugin/primevuePreset.ts';
import router from '@/router/router.ts';

const app = createApp(App);

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH0_DOMAIN,
        clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.origin,
        },
    })
);
app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: preset,
        options: {
            darkModeSelector: 'class',
        },
    },
});

app.mount('#app');
