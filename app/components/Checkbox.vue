<script setup lang="ts">
interface ICheckboxProps {
    label: string;
    modelValue?: boolean;
}

const props = defineProps<ICheckboxProps>();
const emit = defineEmits(["update:modelValue"]);

const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit("update:modelValue", target.checked);
};
</script>

<template>
    <label class="checkbox-label">
        <input
            class="checkbox-input"
            type="checkbox"
            :checked="props.modelValue"
            @change="handleChange"
        />
        <span class="checkbox-text">{{ props.label }}</span>
        <slot></slot>
    </label>
</template>

<style scoped>
.checkbox-label {
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;
    gap: 8px;
}

.checkbox-input {
    height: 16px;
    width: 16px;
    appearance: none;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.1s ease;
    display: grid;
    place-content: center;
}

.checkbox-input::before {
    content: "";
    width: 8px;
    height: 8px;
    transform: scale(0);
    background-color: white;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}

.checkbox-input:checked {
    background-color: var(--button-default);
    border-color: var(--button-default);
}

.checkbox-input:checked::before {
    transform: scale(1);
}

.checkbox-input:hover {
    background-color: rgb(236, 236, 236);
}

.checkbox-input:checked:hover {
    background-color: var(--button-default);
}

.checkbox-input:focus-visible {
    outline: 2px solid var(--button-default);
    outline-offset: 2px;
}

.checkbox-text {
    line-height: 1;
}
</style>
