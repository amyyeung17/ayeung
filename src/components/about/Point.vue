<script setup>
const info = [
  {text: 'University of Pennsylvania', icon: 'mortarboard-fill'},
  {text: 'Bachelor\'s of Applied Science (BAS) in Computer and Cognitive Science (ASCC) & Cognitive Science', icon: 'book'},
  {text: 'Sep, 2017 - Dec, 2021', icon: 'calendar-fill'}
]
</script>

<template>
  <div class="px-3">
    <div
      class="flex items-center my-2"
      v-for="(i, index) of info"
      :key="index"
   >
    <div class="flex items-center justify-center w-8 h-8"> 
      <span :class="`bi bi-${i.icon} text-lg text-secondary`"> </span>
    </div>
    <p class="ml-4 w-4/5 text-primary-100 font-medium"> {{ i.text }} </p>
   </div>
  </div>
</template>