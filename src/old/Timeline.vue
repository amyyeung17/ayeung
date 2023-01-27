<script setup>
//NOT IN USE
import { computed } from 'vue' 
//use () => []?
  const props = defineProps({
    skillList: {
      type: Array,
    },
    skillType: {
      type: String,
      default: 'hard'
    },
    infoType: {
      type: String
    } 
  })

const leadership = [{title: 'Tech it Out', position: 'Mentor, Outreach Chair, Director'}, {title: 'Rowing', position: 'Coxswain'}]
const work = [{title: 'Vineyard App', position: 'Instructor'}, {title: 'Leadlist.ai', position: 'ux intern'}, {title: 'Science Leadership Academy', position: 'Instructor'}, {title: 'Freire Charter School', position: 'Instructor'}]

const currentList = computed(() => {
  return props.infoType === 'leader' ? leadership : work
})
</script>


<template>
  <div class="flex flex-col items-center h-full w-full"> 
    <div
      v-for="(skill, index) of currentList"
      class="flex items-center text-primary-100 text-start bg-primary border-none h-20 w-full"
      :class="index === 0 ? 'border-t-2' : ''"
      :key="index"
      > 
        <div class="flex flex-col items-center justify-end h-full">
          <div class="border-l-2 h-10 w-px" :class="index === 0 ? 'border-transparent' : 'border-secondary'"> </div> 
          <div class="border-2 border-primary-200 rounded-full w-6 h-8"> </div>
          <div class="border-l-2 h-2/5 w-px" :class="index === currentList.length - 1 ? 'border-transparent' : 'border-secondary'"> </div>
        </div>
      <div class="flex flex-col"> 
       <h3 class="relative top-1 ml-4 text-xl font-medium"> {{ skill.title }} </h3> 
       <p class="relative top-1 ml-4 "> {{ skill.position }} </p>
      </div>
      </div>
  </div>
</template>