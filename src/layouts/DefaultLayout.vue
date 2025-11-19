<script lang="ts" setup>
import Drawer from 'primevue/drawer';
import { ref } from 'vue';

import Header from '@/components/Header.vue';
import Login from '@/components/Login.vue';
import Logout from '@/components/Logout.vue';

const visible = ref(false);

const toggleDrawer = () => (visible.value = !visible.value);
</script>

<template>
    <div class="grid grid-flow-col grid-cols-3 place-items-center p-4">
        <Drawer v-model:visible="visible" header="Drawer">
            <Login />
            <Logout />
        </Drawer>
        <Header @toggle-drawer="toggleDrawer" />
    </div>
    <div class="content">
        <slot />
    </div>
</template>
