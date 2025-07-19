<script setup lang="ts">
const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
];

const icons = [
    { name: "Favorites", src: "/icons/favorites.svg", path: "/favorites" },
    { name: "Cart", src: "/icons/cart.svg", path: "/cart" },
    { name: "User", src: "/icons/user.svg", path: "/login" },
];

const router = useRoute();

const isActive = (path: string) => {
    return router.path === path;
};
</script>

<template>
    <div class="app-header">
        <Container>
            <header class="header">
                <NuxtLink to="/">
                    <img src="/icons/logo.svg" alt="Logo" />
                </NuxtLink>
                <nav class="nav-links">
                    <TextLink
                        v-for="link in navLinks"
                        :key="link.name"
                        :to="link.path"
                        :isActive="isActive(link.path)"
                    >
                        {{ link.name }}
                    </TextLink>
                </nav>

                <div class="icons">
                    <TextLink
                        v-for="icon in icons"
                        :key="icon.name"
                        :to="icon.path"
                        :isActive="isActive(icon.path)"
                    >
                        <img :src="icon.src" :alt="icon.name" />
                    </TextLink>
                </div>
            </header>
        </Container>
        <div class="separator"></div>
    </div>
</template>

<style scoped>
.app-header {
    position: sticky;
    top: 0;
    width: 100%;
    background-color: var(--background-primary);
    z-index: 10;
}

.header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 32px 0px;
}

.nav-links {
    display: flex;
    gap: 52px;
}

.icons {
    display: flex;
    gap: 31px;
}

.separator {
    height: 0.3px;
    background: var(--accordion-footer);
}
</style>
