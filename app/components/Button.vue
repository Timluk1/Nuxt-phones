<script setup lang="ts">
interface IButtonProps {
    variant?: "default" | "outline" | "text";
    size?: "small" | "medium" | "large";
}

const props = withDefaults(defineProps<IButtonProps>(), {
    variant: "default",
    size: "medium",
});
</script>

<template>
    <button class="button" :class="[props.variant, props.size]">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    background-color: var(--button-default);
    width: 100%;
    border-radius: 8px;
    color: var(--text-color-primary);
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: var(--button-hover);
}

.small {
    padding: 12px 56px;
}

.medium {
    padding: 12px 64px;
}
</style>
