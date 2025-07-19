<script setup lang="ts" generic="T extends { value: string; name: string }">
interface ISelectProps {
    modelValue: string;
    items: T[];
}

const props = defineProps<ISelectProps>();
const emit = defineEmits(["update:modelValue"]);

const { value: open, toggle } = useToggle(false);

// меняем выбранное значение и закрываем селект
const changeSelectedValue = (value: string) => {
    toggle();
    emit("update:modelValue", value);
};

// вычисляем label для выбранного элемента по его уникальному значению
const selectedItem = computed(() => {
    return (
        props.items.find((item) => item.value === props.modelValue)?.name ||
        "Select an option"
    );
});
</script>

<template>
    <div
        class="select"
        @click.stop="toggle"
        :aria-expanded="open"
        role="combobox"
    >
        <div class="select-header">
            <p class="selected-value">{{ selectedItem }}</p>
            <img
                class="arrow-icon"
                :class="{ open }"
                src="/icons/arrow-light.svg"
                alt="Arrow"
            />
        </div>

        <div class="select-content" :hidden="!open">
            <p
                v-for="item of props.items"
                @click.stop="() => changeSelectedValue(item.value)"
                :key="item.value"
                :aria-selected="item.value === props.modelValue"
                role="option"
            >
                {{ item.name }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.select {
    position: relative;
    width: fit-content;
    min-width: 256px;
    padding: 11px 16px;
    border-radius: 8px;
    border: var(--border-primary);
    background: var(--select);
    cursor: pointer;
    user-select: none;
}

.select-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.select-placeholder {
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: -0.005em;
    color: var(--text-color-third);
}

.arrow-icon {
    transition: transform 0.2s ease;
}

.arrow-icon.open {
    transform: rotate(180deg);
}

.select-content {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    border-radius: 8px;
    background: var(--select-default);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 10;
    padding: 8px 0;
}

.select-content p {
    padding: 8px 16px;
    margin: 0;
    cursor: pointer;
}

.select-content p:hover {
    background-color: var(--select-hover);
}
</style>
