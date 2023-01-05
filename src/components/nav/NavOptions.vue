<script setup>
import { useRouter } from "vue-router"

defineProps({
  navStyle: {
    type: String
  }
})
const router = useRouter()
const emits = defineEmits(['on-display-click'])

</script>

<template>
  <button
    v-for="(op, index) of ['About', 'Skills', 'Projects', 'Contact']" 
    :class="navStyle"
    @click="router.replace({name: 'home', hash: `#${op.toLowerCase()}`}); emits('on-display-click')"
    :key="index"
  >
    {{ op }}
  </button>
</template>

<style scoped> 
button {
  outline: none !important;
}
</style>