import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    alias: {
        "@": resolve(__dirname, "."),
    },
    pinia: {
        storesDirs: ['./app/stores/**'],
    },
});
