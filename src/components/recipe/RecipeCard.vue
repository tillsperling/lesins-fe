<script lang="ts" setup>
import type { Recipe } from '@/interfaces/Recipe.type.ts';

const { recipe } = defineProps<{
    recipe: Recipe;
}>();
</script>

<template>
    <Image :src="recipe.imageUrl" />
    <Card>
        <template #title>{{ recipe.name }}</template>
        <template #subtitle>{{ recipe.description }}</template>
        <template #footer>
            <Button label="Open" />
        </template>
    </Card>
</template>
