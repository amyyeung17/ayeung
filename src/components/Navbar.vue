<script setup>
import {  ref, onMounted, watch, nextTick } from 'vue'
import { buttonStyle, containerStyle } from './reusable/style.js'
import { useResize } from './reusable/resize.js'
import { useScroll } from './reusable/scroll.js'
import NavOptions from './nav/NavOptions.vue'
import PopupMenu from './nav/PopupMenu.vue'

const { windowHeight, windowWidth } = useResize()

onMounted(() => {
  windowHeight.value = window.innerHeight
  windowWidth.value = window.innerWidth
})

const navbarStyle = buttonStyle + 'pt-3 pb-1 text-lg m-2 hover:underline'

</script>

<template>
  <div class="bg-primary z-10 w-full" id="nav"> 
    <div :class="containerStyle + 'items-center justify-end'"> 
      <p class="text-secondary text-xl sm:text-2xl font-medium relative top-4 md:top-1 px-3 w-full title"> Amy Yeung </p>
      <NavOptions v-if="windowWidth > 767" :nav-style="navbarStyle" />
    </div>  
  </div>
  <PopupMenu :window-width="windowWidth" :window-height="windowHeight" />
</template>


<style> 
button {
  outline: none !important;
}

@media only screen and (min-width: 0px) and (max-width: 639px) {
  .title {
    position: relative;
    top: 1.125rem;
  };
}

@media only screen and (min-width: 640px) and (max-width: 767px) {
  .title {
    position: relative;
    top: 1.25rem;
  };
}

</style>
