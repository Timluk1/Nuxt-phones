<script setup lang="ts">
import { useProductsFiltersStore } from '~/stores/productsFilters';

interface IProductsHeaderProps {
    countProducts: number;
}

const props = defineProps<IProductsHeaderProps>();

const filters = useProductsFiltersStore();

</script>

<template>
    <div class="products-header">
        <p class="count">
            Selected Products:
            <span>
                {{ props.countProducts }}
            </span>
        </p>
        <Select :items="filters.sortByOptions" v-model="filters.sortBy" />
    </div>
</template>

<style scoped>
.products-header {
    padding: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.count {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: var(--text-color-secondary);
}

.count span {
    font-weight: 500;
    font-size: 20px;
    line-height: 16px;
    letter-spacing: 0.03em;
    color: var(--text-color-third);
}
</style>
