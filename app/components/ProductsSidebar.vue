<script setup lang="ts">
const search = ref("");
const items = ref(["Apple", "Samsung", "Sony"]);

const filtredItems = computed(() => {
    return items.value.filter((item) =>
        item.toLowerCase().includes(search.value.toLowerCase()),
    );
});
</script>

<template>
    <aside aria-label="Product filters">
        <ul class="filters-list">
            <li>
                <Accordion title="Brand">
                    <SearchInput v-model="search" placeholder="Search brands" />
                    <ul
                        class="checkbox-list"
                        role="group"
                        aria-labelledby="brand-filters"
                    >
                        <li v-for="item of filtredItems" :key="item">
                            <Checkbox
                                name="brand"
                                :label="item"
                                :value="item"
                            />
                        </li>
                    </ul>
                </Accordion>
            </li>

            <li>
                <Accordion title="Battery capacity" />
            </li>
            <li>
                <Accordion title="Screen type" />
            </li>
            <li>
                <Accordion title="Screen diagonal" />
            </li>
            <li>
                <Accordion title="Protection class" />
            </li>
            <li>
                <Accordion title="Built-in memory" />
            </li>
        </ul>
    </aside>
</template>

<style scoped>
.checkbox-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;
}

.filters-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>
