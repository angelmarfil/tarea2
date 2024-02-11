<template>
  <div>
    <ul>
      <CardItem v-for="game in games" :game="game" :key="game.id"></CardItem>
    </ul>
  </div>
</template>
<script setup lang="ts">
import CardItem from '@/components/CardItem.vue'
import gamesData from '@/data/gamesData'
import { ref } from 'vue'

const games = ref(gamesData)
</script>
<style scoped>
ul {
  margin: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 2rem;
}
</style>
