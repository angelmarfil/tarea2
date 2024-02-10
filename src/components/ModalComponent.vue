<template>
    <dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>

</template>
<script setup lang="ts">
    defineProps({
        visible: Boolean
    })

</script>
<style scoped>
    dialog {
        margin: 5rem auto;
        width: 50vw;
        height: 50vh;
    }
</style>