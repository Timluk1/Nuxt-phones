import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsFiltersStore = defineStore("productsFilters", () => {
    const brand = ref<string>("");
    const sortBy = ref<string>("price");

    const brandsOptions = [
        { name: "Apple", value: "apple" },
        { name: "Samsung", value: "samsung" },
        { name: "Xiaomi", value: "xiaomi" },
    ];

    const sortByOptions = [
        { name: "By price", value: "price" },
        { name: "By rating", value: "rating" },
    ];

    function setBrand(newBrand: string) {
        brand.value = newBrand;
    }

    function setSortBy(newSortBy: string) {
        sortBy.value = newSortBy;
    }

    function resetFilters() {
        brand.value = "";
        sortBy.value = "price";
    }

    return {
        brand,
        sortBy,
        brandsOptions,
        sortByOptions,
        setBrand,
        setSortBy,
        resetFilters,
    };
});
