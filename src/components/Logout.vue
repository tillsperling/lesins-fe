<script lang="ts" setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { logout, isLoading } = useAuth0();

const handleLogout = async () => {
    await logout({
        logoutParams: {
            returnTo: window.location.origin,
        },
    });
};
</script>

<template>
    <Button :disabled="isLoading" class="w-full" rounded @click="handleLogout">
        {{ isLoading ? 'Loading...' : 'Log Out' }}
    </Button>
</template>
