<script setup>
//use () => []?
import { computed } from 'vue'
const props = defineProps({
    currentSkill: {
      type: String
    },
    skillList: {
      type: Array,
    },
    skillType: {
      type: String,
      default: 'hard'
    }
  })

const emits = defineEmits(['handle-skills'])

const positions = ['-left-0', '-left-1', '-left-2', '-left-3', '-left-4']
  const setButton = (skill, index) => {
    return (props.currentSkill === skill ?
      `bg-primary-light shadow-md shadow-primary text-primary font-semibold`
      :
      `bg-secondary shadow shadow-secondary text-primary font-medium`
    )
  }


</script>


<template>
    <button 
      v-for="[index, skill] of skillList.entries()"
      class="flex items-center mb-3 p-3 rounded w-3/4 relative"
      :class="setButton(skill, index) " 
      :disabled="skillType === 'soft'"
      :key="skillType + index"
      @click="emits('handle-skills', skill)"
    > 
      {{ skill }} 
  </button>
</template>


