<script setup>
import { buttonStyle } from '../reusable/style.js'
const props = defineProps({
  currentOption: {
    type: String
  }
})

const emits = defineEmits(['on-options-click'])

const getClass = (choice) => (
  buttonStyle + ' text-xl ' + (props.currentOption === choice ? ' underline' : ' hover:underline')
)
</script>

<template>
  <div class="self-center flex justify-evenly sm:w-1/2 py-2 px-3 mb-4">
    <button :class="getClass('progress')" @click="emits('on-options-click', 'progress')"> Current </button>
    <button :class="getClass('complete')" @click="emits('on-options-click', 'complete')"> Personal </button>
  </div>
</template>

<style scoped> 
button {
  outline: none !important;
}

button:hover {
  outline: none !important;
}
</style>
