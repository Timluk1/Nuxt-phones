<script setup lang="ts">
const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
];

const icons = [
    { name: "Favorites", src: "/icons/favorites.svg", path: "/favorites" },
    { name: "Cart", src: "/icons/cart.svg", path: "/cart" },
    { name: "User", src: "/icons/user.svg", path: "/profile" },
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
                    <NuxtLink
                        v-for="link in navLinks"
                        :key="link.name"
                        :to="link.path"
                        class="nav-link"
                        :class="{ active: isActive(link.path) }"
                    >
                        {{ link.name }}
                    </NuxtLink>
                </nav>

                <div class="icons">
                    <NuxtLink
                        v-for="icon in icons"
                        :key="icon.name"
                        :to="icon.path"
                        class="nav-link"
                        :class="{ active: isActive(icon.path) }"
                    >
                        <img :src="icon.src" :alt="icon.name" />
                    </NuxtLink>
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

.nav-link {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: var(--text-color-third);
    opacity: 0.3;
    transition: opacity 0.3s ease;
}

.nav-link:hover {
    opacity: 1;
}

.nav-link.active {
    opacity: 1;
}

.separator {
    height: 0.3px;
    background: var(--accordion-footer);
}
</style>
