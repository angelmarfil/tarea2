<template>
  <button class="add" @click="showModal">Agregar Juego</button>
  <dialog ref="dialog">
    <h2>Agregar Juego</h2>
    <form method="dialog">
      <input type="url" placeholder="URL de imagen" required />
      <input type="text" placeholder="Nombre" minlength="4" maxlength="60" required />
      <div>
        <input type="number" placeholder="Precio" min="0" max="10000" required />
        <input type="date" min="2017-03-03" required />
      </div>
      <div class="buttons">
        <button class="secondary" @click="closeModal">Cancelar</button>
        <button>Agregar</button>
      </div>
    </form>
  </dialog>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<HTMLDialogElement>()

const showModal = () => {
  dialog.value?.showModal()
}

const closeModal = () => {
  dialog.value?.close()
}

defineExpose({
  show: showModal
})
</script>
<style scoped>
dialog {
  margin: auto;
  width: 50vw;
  height: 70vh;
  border: 0;
  box-shadow:
    rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 2rem;
  overflow: hidden;
  &::backdrop {
    backdrop-filter: blur(4px);
  }
}

.add {
    margin: auto 2rem;
}

form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & div:has(input) {
    display: flex;
    column-gap: 0.5rem;
  }
}

.buttons {
  display: flex;
  column-gap: 0.5rem;
  align-self: flex-end;
}

button {
  font-family: 'Poppins';
  font-weight: 600;
  background-color: red;
  color: white;
  border: 0;
  padding: 10px 20px;
  border-radius: 8px;
  &.secondary {
    background-color: grey;
  }
}

input {
  font-family: 'Poppins';
  appearance: none;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 8px;
}

input[type='number'] {
  width: 100px;
}

input[type='date'] {
  width: 160px;
}
</style>
