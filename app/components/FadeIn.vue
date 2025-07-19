<script setup lang="ts"></script>

<template>
    <div class="fade-in" :class="$attrs.class">
        <slot></slot>
    </div>
</template>

<style scoped>
.fade-in {
    opacity: 0;
    transform: translateY(10px);
    animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
