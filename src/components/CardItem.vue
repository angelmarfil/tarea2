<template>
  <div class="card" :class="game.theme">
    <img :src="game.image" />
    <div class="text">
      <h3>{{ game.name }}</h3>
      <span class="date">{{ release_date }}</span>
      <span class="price">{{ price }}</span>
      <span class="console">Nintendo Switch</span>
    </div>
</div>
</template>
<script setup lang="ts">
import type { IGame } from '@/interfaces/IGame'
import { computed } from 'vue'
const props = defineProps<{game: IGame}>()

const release_date = computed(() => props.game.release_date.toLocaleDateString('en-GB'))

const price = computed(() => `$${props.game.price}`)
</script>
<style scoped>
.card {
  --width: 250px;
  --background: white;
  --name: black;
  --price: rgb(72, 72, 72);
  --date: gray;
  --console: red;
  width: var(--width);
  height: 380px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

   &.blue {
    background-color: lightblue;
   } 

   &.black {
    --background: black;
    --name: white;
    --date: white;
    --price: white;
    --console: white;
    background-color: var(--background);
    color: var(--name);
    & .date {
      color: var(--date);
    }

    & .price {
      color: var(--price);
    }

    & .console {
      color: var(--console);
    }

   }

   &.blue {
    --background: lightblue;
    --name: black;
    --date: black;
    --price: black;
    --console: black;
    background-color: var(--background);
    color: var(--name);
    & .date {
      color: var(--date);
    }

    & .price {
      color: var(--price);
    }

    & .console {
      color: var(--console);
    }

   }

   &.purple {
    --background: purple;
    --name: white;
    --date: white;
    --price: yellow;
    --console: yellow;
    background-color: var(--background);
    color: var(--name);
    & .date {
      color: var(--date);
    }

    & .price {
      color: var(--price);
    }

    & .console {
      color: var(--console);
    }

   }

   &.red {
    --background: darkred;
    --name: white;
    --date: white;
    --price: white;
    --console: white;
    background-color: var(--background);
    color: var(--name);
    & .date {
      color: var(--date);
    }

    & .price {
      color: var(--price);
    }

    & .console {
      color: var(--console);
    }

   }

  & img {
    width: var(--width);
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
    color: var(--name);
}

  & .date {
    font-size: 0.8rem;
    color: var(--date);
  }

  & .price {
    color: var(--price);
    font-weight: 600;
  }

  & .console {
    border-left: 4px var(--console) solid;
    padding-left: .5rem;
  }
}
</style>
