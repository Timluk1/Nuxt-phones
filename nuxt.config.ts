import { resolve } from "path";
import "reflect-metadata"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@sidebase/nuxt-auth"],
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    runtimeConfig: {
        authSecret: process.env.AUTH_SECRET,
    },
    alias: {
        "@": resolve(__dirname, "."),
    },
    pinia: {
        storesDirs: ["./app/stores/**"],
    },
    auth: {
        provider: {
            type: "authjs",
            trustHost: false,
            defaultProvider: "github",
            addDefaultCallbackUrl: true,
        },
    },
});
