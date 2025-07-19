<script setup lang="ts">
interface IAccordionProps {
    title: string;
    isOpen?: boolean;
}

const props = defineProps<IAccordionProps>();

const { value: open, toggle } = useToggle(props.isOpen ?? false);
</script>

<template>
    <div class="accordion" :aria-expanded="open">
        <button class="accordion-header" @click="toggle">
            <p class="title">{{ title }}</p>
            <img
                :class="{ open }"
                src="/icons/arrow.svg"
                alt="Arrow icon"
                class="arrow-icon"
            />
        </button>

        <div class="separator"></div>

        <div class="accordion-content" :class="{ open }" :hidden="!open">
            <div class="content-wrapper">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion {
    width: 100%;
    min-width: 280px;
}

.accordion-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 12px 0;
    cursor: pointer;
}

.title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.03em;
    text-align: left;
}

.arrow-icon {
    transition: transform 0.2s ease;
}

.arrow-icon.open {
    transform: rotate(180deg);
}

.accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: all 0.2s ease;
}

.accordion-content.open {
    margin-top: 16px;
    grid-template-rows: 1fr;
}

.content-wrapper {
    overflow: hidden;
    min-height: 0;
    margin-left: 24px;
}

.separator {
    height: 0.3px;
    background: var(--accordion-footer);
}
</style>
