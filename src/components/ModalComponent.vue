<script setup lang="ts">
import gamesData from '@/data/gamesData'
import type { IGame } from '@/interfaces/IGame'
import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'

const dialog = ref<HTMLDialogElement>()
const games = ref(gamesData)

const image: Ref<string> = ref('')
const name: Ref<string> = ref('')
const price: Ref = ref(null)
const date: Ref<string> = ref('')
const theme: Ref<string> = ref('default')

const imageValidation = computed(() =>
  image.value.length > 0 && !URL.canParse(image.value) ? 'La URL debe ser válida.' : ''
)

const nameValidation = computed(() => {
  if ((name.value.length > 0 && name.value.length < 4) || name.value.length > 60) {
    return 'Error de longitud en el nombre (mínimo 4, máximo 60 caracteres).'
  }
  if (isNameDuplicate(name.value)) {
    return 'Este nombre ya existe en la lista'
  }

  return ''
})

const priceValidation = computed(() =>
  price.value < 0 || price.value > 10000 ? 'El precio debe ser entre 0 y 10000.' : ''
)

const isFormValid: ComputedRef<boolean> = computed(
  () =>
    !(
      imageValidation.value.length > 0 ||
      nameValidation.value.length > 0 ||
      priceValidation.value.length > 0
    )
)

// formateo de fecha máxima (Al día de hoy)
const maxDate = ref<string>('')
const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() + 1).toString().padStart(2, '0')
const day = today.getDate().toString().padStart(2, '0')
maxDate.value = `${year}-${month}-${day}`

// funciones para el modal
const showModal = () => {
  dialog.value?.showModal()
}

const closeModal = () => {
  dialog.value?.close()
}

defineExpose({
  show: showModal
})

const handleSubmit = () => {
  if (isFormValid.value) {
    const newGame: IGame = {
      id: gamesData.length + 1,
      name: name.value,
      image: image.value,
      price: price.value,
      theme: theme.value,
      release_date: new Date(date.value)
    }

    games.value.push(newGame)
    closeModal()
    alert('El juego ha sido agregado a la lista.')

    image.value = ''
    name.value = ''
    price.value = null
    ;(date.value = ''), (theme.value = 'default')
  }
}

const isNameDuplicate = (value: string): boolean => {
  return games.value.some((game: IGame) => game.name.toLowerCase() === value.toLowerCase())
}
</script>

<template>
  <button class="add" @click="showModal">Agregar Juego</button>
  <dialog ref="dialog">
    <h2>Agregar Juego</h2>
    <form @submit.prevent="handleSubmit">
      <div class="input_box">
        <input v-model.trim="image" type="url" placeholder="URL de imagen" name="image" required />
        <span v-if="imageValidation" class="error">{{ imageValidation }}</span>
      </div>

      <div class="input_box">
        <input v-model.trim="name" type="text" placeholder="Nombre" name="name" required />
        <span v-if="nameValidation" class="error">{{ nameValidation }}</span>
      </div>

      <div>
        <div class="small input_box">
          <input v-model="price" type="number" placeholder="Precio" name="price" required />
          <span v-if="priceValidation" class="error">{{ priceValidation }}</span>
        </div>

        <div class="small">
          <input v-model="date" type="date" min="2017-03-03" :max="maxDate" name="date" required />
        </div>
        <div class="small">
          <select v-model="theme" name="theme">
            <option value="default" selected>Tema por defecto</option>
            <option value="black">Negro</option>
            <option value="blue">Azul</option>
            <option value="purple">Morado</option>
            <option value="red">Rojo</option>
          </select>
        </div>
      </div>
      <div class="buttons">
        <button class="secondary" @click="closeModal">Cancelar</button>
        <button :disabled="!isFormValid" type="submit">Agregar</button>
      </div>
    </form>
  </dialog>
</template>

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

  @media (width < 1260px) {
    & {
      width: 70vw;
    }

    select {
      width: 200px;
    }
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

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
    color: #666;
  }
}

select {
  position: relative;
  padding: 10px 20px;
  width: 300px;
  font-family: 'Poppins';
  border-radius: 8px;
  border: 1px solid grey;
}

.input_box {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  & span {
    padding-left: 0.4rem;
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

.error {
  color: red;
  font-size: 0.8rem;
  display: block;
}

.small {
  display: flex;
  flex-direction: column;
  & span {
    width: 140px;
  }
}
</style>
