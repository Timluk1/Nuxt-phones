<template>
    <header>
        <nav>
            <ul>
                <NuxtLink to="/">
                    Home
                </NuxtLink>

                <NuxtLink to="/login">
                    Login
                </NuxtLink>
            </ul>
        </nav>
    </header>

    <slot></slot>

    <footer>Footer</footer>
</template>