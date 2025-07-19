<script setup lang="ts">
import type { IPhone } from "~/types/phones.types";

interface IProductsListProps {
    items: IPhone[];
    pending: boolean;
}

const props = defineProps<IProductsListProps>();
</script>

<template>
    <ul class="phone-list">
        <li v-for="phone in props.items" :key="phone.id">
            <ProductCard :phone="phone" />
        </li>
    </ul>
</template>

<style scoped>
.phone-list {
    width: 100%;
    margin-top: 24px;
    display: grid;
    gap: 33px;
    grid-template-columns: repeat(auto-fill, 250px);
    margin: 0 auto;
}
</style>
