<script setup lang="ts">
import Header from "@/app/components/Header.vue";
import Container from "@/app/components/Container.vue";
</script>

<template>
    <Header />
    <Container class="container">
        <slot></slot>
    </Container>
</template>

<style scoped>
.container {
    margin-top: 20px;
}
</style>
