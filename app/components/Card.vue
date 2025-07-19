<script setup lang="ts"></script>

<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    padding: 32px;
    width: 100%;
    max-width: 400px;
}
</style>
