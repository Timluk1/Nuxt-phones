<script setup lang="ts">
interface ILinkProps {
    to: string;
    isActive: boolean;
}

const props = defineProps<ILinkProps>();
</script>

<template>
    <NuxtLink :to="props.to" class="link" :class="{ active: props.isActive }">
        <slot></slot>
    </NuxtLink>
</template>

<style scoped>
.link {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-color-third);
    opacity: 0.3;
    transition: opacity 0.3s ease;
}

.link:hover {
    opacity: 1;
}

.link.active {
    opacity: 1;
}
</style>
