<template>
  <button @click="showModal">Agregar</button>
  <dialog ref="dialog" @close="visible = false">
    <h2>Agregar juego</h2>
    <form method="dialog" v-if="visible">
        <input type="file">
        <input type="text" placeholder="Nombre">
        <input type="number" placeholder="Precio">
        <input type="date">
      <button>OK</button>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement>()
const visible = ref(false)

const showModal = () => {
  dialog.value?.showModal()
  visible.value = true;
}

defineExpose({
  show: showModal
})
</script>
<style scoped>
dialog {
    margin: auto;
    width: 50vw;
    height: 50vh;
    border: 0;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 2rem;
}

dialog::backdrop {
    backdrop-filter: blur(4px);
}

button {
    font-family: 'Poppins';
    font-weight: 600;
    background-color: red;
    color: white;
    border: 0;
    padding: 10px 20px;
    border-radius: 8px;
}
</style>
