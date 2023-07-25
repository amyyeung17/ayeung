<script setup>
import { containerStyle } from './style.js'
  defineProps({
    bgStyle: {
      type: String,
      default: 'bg-primary'
    },
    gridStyle: {
      type: String,
      default: 'grid-cols-1 md:grid-cols-2'
    },
    lcolStyle: {
      type: String,
      default: ''
    },
    rcolStyle: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div :class="containerStyle + bgStyle"> 
    <slot name="top"></slot>
    <div class=" max-sm:flex max-sm:flex-col max-sm:items-center sm:grid auto-rows-auto h-full" :class="gridStyle"> 
      <slot name="left"> </slot>
      <slot name="right"> </slot>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>
