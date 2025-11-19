<script lang="ts" setup>
import { Motion } from 'motion-v';

import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<template>
    <DefaultLayout>
        <Card>
            <template #title>
                <Motion
                    :animate="{ x: 20, opacity: 1 }"
                    :initial="{ x: -20, opacity: 0 }"
                    :transition="{
                        duration: 1.2,
                        delay: 0.0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }"
                    as="div"
                    >Hello my Love!
                </Motion>
            </template>
            <template #subtitle>
                <Motion
                    :animate="{ x: 20, opacity: 1 }"
                    :initial="{ x: -20, opacity: 0 }"
                    :transition="{
                        duration: 1.2,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                    }"
                    as="div"
                    >Was wird geschnappelt?
                </Motion>
            </template>
            <template #content />
        </Card>
    </DefaultLayout>
</template>

<style scoped></style>
