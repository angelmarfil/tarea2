<template>
    <div>
        <ul>
            <CardItem v-bind="game" v-for="game, index in gamesData" :key="index"></CardItem>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import CardItem from '@/components/CardItem.vue'
    import gamesData from '@/data/gamesData'
</script>
<style scoped>
    ul {
        margin: 2rem 2rem;
        display: flex;
        gap: 1rem;
    }
</style>