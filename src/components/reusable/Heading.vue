<script setup>
  defineProps({
    text: {
      type: String
    },
    extraStyle: {
      type: String,
      default: ''
    }
  })
</script>
<template> 
  <h2 class="text-secondary text-4xl font-medium px-3 my-4" :class="extraStyle"> {{text}} </h2>
</template>

