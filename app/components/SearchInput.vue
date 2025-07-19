<script setup lang="ts">
interface ISearchInputProps {
    placeholder?: string;
    modelValue?: string;
}

interface IEmit {
    (e: "update:modelValue", value: string): void;
}

const props = withDefaults(defineProps<ISearchInputProps>(), {
    placeholder: "Search...",
    modelValue: "",
});

const emit = defineEmits<IEmit>();

const model = computed({
    set: (newValue: string) => {
        emit("update:modelValue", newValue);
    },
    get: () => {
        return props.modelValue;
    },
});
</script>

<template>
    <div class="input-wrapper">
        <img class="icon" src="/icons/search.svg" alt="Search icon" />
        <input
            class="input"
            type="text"
            v-model="model"
            :placeholder="props.placeholder"
        />
    </div>
</template>

<style scoped>
.input-wrapper {
    display: flex;
    border-radius: 8px;
    padding: 8px 16px;
    background: var(--input-background);
    border: var(--border-default);
    transition: border 0.2s ease;
}

.input {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--input-text);
}

.input-wrapper:focus-within {
    border: var(--border-primary);
}

.input::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--input-text);
}

.icon {
    margin-right: 12px;
}
</style>
