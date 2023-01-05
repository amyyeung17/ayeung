<script setup>
defineProps({
    skillList: {
      type: Array,
    },
  })
  
const setIcon = (skill) => {
  switch(skill){
    case 'Javascript (ES6+)':
      return 'javascript'
    case 'Vue':
      return 'vuejs'
    case 'React w/ JSX':
      return 'react'
    default:
      return skill.toLowerCase()
  }
}
</script>


<template>
  <div class="grid grid-cols-4 w-full lg:w-4/5 py-2 px-3 my-2"> 
    <div
      v-for="(skill, index) of skillList"
      class="flex flex-col items-center col-span-1 py-2 px-3"
      :key="index"
    > 
      <span :class="`devicon-${setIcon(skill)}-plain colored text-4xl my-2`"></span> <h3 class="text-primary-100 font-medium text-xl text-center md:text-left"> {{ skill }} </h3> 
    </div>
  </div>
</template>


