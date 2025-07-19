<script setup lang="ts">
const filters = useProductsFiltersStore();
const { data, pending } = await useFetch(
    () => `/api/phones?sortBy=${filters.sortBy}`,
);
</script>

<template>
    <FadeIn class="home">
        <ProductsSidebar />
        <main class="home-main">
            <ProductsHeader :countProducts="data ? data.length : 0" />
            <ProductsList :items="data ? data : []" :pending="pending" />
        </main>
    </FadeIn>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.home-main {
    width: 100%;
}
</style>
