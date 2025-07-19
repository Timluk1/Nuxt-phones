<script setup lang="ts"></script>

<template>
    <div v-bind="$attrs" class="container">
        <slot></slot>
    </div>
</template>

<style>
.container {
    max-width: var(--container-width);
    width: 100%;
    margin: 0 auto;
}
</style>
