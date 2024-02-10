<template>
  <div class="card">
    <img :src="props.image" />
    <div class="text">
      <h3>{{ props.name }}</h3>
      <span class="date">{{ release_date }}</span>
      <span class="price">{{ price }}</span>
      <span class="console">Nintendo Switch</span>
    </div>
</div>
</template>
<script setup lang="ts">
import type { IGame } from '@/interfaces/IGame'
import { computed } from 'vue'
const props = defineProps<IGame>()

const release_date = computed(() => props.release_date.toLocaleDateString('en-GB'))

const price = computed(() => `$${props.price}`)
</script>
<style scoped>
.card {
  width: 300px;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  & img {
    width: 300px;
    height: 180px;
    object-fit: cover;
  }

  & .text {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin: 1rem;
  }

  & h3 {
    font-size: 1.1rem;
    font-weight: 700;
    text-wrap: nowrap;
    width: 95%;
    overflow: hidden;
}

  & .date {
    font-size: 0.8rem;
    color: gray;
  }

  & .price {
    color: rgb(72, 72, 72);
    font-weight: 600;
  }

  & .console {
    border-left: 4px red solid;
    padding-left: .5rem;
  }
}
</style>
