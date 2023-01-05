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
    <div class="grid h-full" :class="gridStyle"> 
      <div class="flex flex-col" :class="lcolStyle"> 
        <slot name="left"> </slot>
      </div>
      <div class="flex flex-col" :class="rcolStyle">
        <slot name="right"> </slot>
      </div>
    </div>
    <slot name="bottom"></slot>
  </div>
</template>
