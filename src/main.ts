import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import 'primeicons/primeicons.css';
import '@/styles/main.css';
import App from '@/App.vue';
import { preset } from '@/plugin/primevuePreset.ts';
import router from '@/router';

const app = createApp(App);

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
