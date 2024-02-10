<template>
    <header>
        <nav>
            <RouterLink to="/">Inicio</RouterLink>
            <RouterLink to="/">Juegos</RouterLink>
            <RouterLink to="/">Nintendo Switch</RouterLink>
            <RouterLink to="/">Noticias y eventos</RouterLink>
            <RouterLink to="/about">Acerca de</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router'  
</script>
<style scoped>
    header {
        position: sticky;
        top: 0;
        height: 64px;
        background-color: rgb(230, 0, 18);

        & nav {
            list-style: none;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;  
        }

        & a {
            text-decoration: none;
            color: white;
            font-family: 'Press Start 2P';
            font-size: .8rem;
        }

    }
</style>