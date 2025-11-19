<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect, isLoading } = useAuth0();

const handleLogin = async () => {
    await loginWithRedirect();
};
</script>

<template>
    <Button :disabled="isLoading" class="w-full" rounded @click="handleLogin">
        {{ isLoading ? 'Loading...' : 'Log In' }}
    </Button>
</template>
