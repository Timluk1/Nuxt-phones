import { ref } from "vue";

export function useToggle(defaultValue: boolean) {
    const value = ref(defaultValue);

    const toggle = () => {
        value.value = !value.value;
    };

    return { value, toggle };
}
