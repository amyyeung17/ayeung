<script setup>
//use () => []?
  defineProps({
    currentSkill: {
      type: String,
      default: 'Javascript'
    },
    skillType: {
      type: String,
      default: 'hard'
    }
  })

const skillText = {
  'Javascript': 'Frameworks: React, Vue, Node.js',
  'HTML & CSS': 'Styled Components, SCSS/SASS',
  'Java': 'hold1, hold2',
  'Python': 'hold1, hold2',
  'C': 'hold1, hold2'
}

const addText = { 
  'Javascript': 'Express, Axios, JSX, Redux, Pinia',
  'HTML & CSS': 'Bootstrap, Framer, Tailwind',
  'Java': 'hold1, hold2',
  'Python': 'hold1, hold2',
  'C': 'hold1, hold2'
}

</script>

<template>
  <div class="bg-primary-light flex flex-col border-solid border-4 border-secondary rounded-md my-4 py-2 px-4 w-3/4">  
    <p class="text-primary text-2xl font-semibold my-2"> {{ currentSkill }} </p>
    <p class="text-primary font-medium"> {{ skillText[currentSkill] }} </p> 
    <p class="text-primary font-medium my-2"> Additional libraries: {{ addText[currentSkill] }} </p>
  </div>
</template>


