<script lang="ts" setup>
import Logo from '@/components/Logo.vue';

const emit = defineEmits<{
    toggleDrawer: [];
}>();
</script>

<template>
    <Button
        aria-label="Menu"
        class="justify-self-start rotate-90"
        icon="pi pi-pause"
        rounded
        variant="text"
        @click="emit('toggleDrawer')"
    />
    <Logo />
    <Button aria-label="Add" class="justify-self-end" icon="pi pi-plus" rounded variant="text" />
</template>

<style scoped></style>
