<script setup>
import { ref } from 'vue'
import { buttonBasic } from '../reusable/style.js'
import { useScroll } from '../reusable/scroll.js'
import NavOptions from './NavOptions.vue'

defineProps({
  windowHeight: {
    type: Number
  },
  windowWidth: {
    type: Number
  }
})
const { scrollHeight } = useScroll()
const display = ref(false)

const popupStyle = buttonBasic + ' text-primary text-3xl m-2 font-medium hover:underline '
const displayStyle = 'max-sm:text-2xl text-3xl border-none bg-transparent font-medium py-3 px-4 fixed top-0 nav-button'

</script>

<template>
  <button 
    v-if="scrollHeight > windowHeight || windowWidth < 767" 
    :class="`text-primary-100 hover:text-secondary z-10 ${displayStyle}`" 
    @click="display = !display"
  > 
    <span class="bi bi-list"></span> 
  </button>
  <div v-if="display" class="bg-secondary flex justify-center h-screen w-full max-w-100 fixed top-0 z-10"> 
    <button :class="`text-primary-500 hover:text-primary z-20 ${displayStyle}`" @click="display = !display"> <span class="bi bi-x-lg"></span> </button>
    <div class="flex flex-col justify-center h-full fixed top-0 z-12">
      <NavOptions :nav-style="popupStyle" @on-display-click="display = !display" />
    </div>
  </div>
</template>

<style> 
button {
  outline: none !important;
}

@media only screen and (min-width: 0px) and (max-width: 767px) {
  .nav-button {
    right: 1%;
    top: .1875rem;
  };
}

@media screen and (min-width: 768px) {
  .nav-button {
    right: 1.5%;
  }
}

</style>
