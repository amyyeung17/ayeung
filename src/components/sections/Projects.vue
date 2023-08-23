<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Heading from '../reusable/Heading.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import { projectsInfoFinish, projectsInfoUp } from '../reusable/info.js'
import Layout from '../reusable/Layout.vue'
import Layout2 from '../reusable/Layout2.vue'
import Card from '../projects/Card.vue'
import Options from '../projects/Options.vue'
import { socialDemo, spotifyDemo, taskDemo, vaDemo } from '../projects/demo/exportdemo'
import Demo from '../projects/Demo.vue'

const currentOption = ref('Completed')
const showDemo = ref(false)
</script>

<template>
  <div class="w-full relative overflow-hidden"> 
    <Layout :bg-style="'flex flex-col'" :lcol-style="layoutTwoStyle" :rcol-style="layoutTwoStyle">  
      <template #top>
        <Heading :text="'Projects'" :extra-style="'sm:mb-0'"/>
        <Options :current-option="currentOption" @on-options-click="(c) => currentOption = c"/> 
        <button @click="() => showDemo = !showDemo" className="bg-transparent h-fit mr-3 self-end text-primary-100 hover:text-secondary w-fit"> 
          {{showDemo ? 'Hide' : 'Show'}} Demos 
          <span :className="`bi bi-arrows-${showDemo ? 'collapse' : 'expand'}`"> </span>
        </button>
      </template>
      <template #left>
        <template v-if="currentOption === 'Completed'"> 
          <Card :item="projectsInfoFinish[0]" :demos="taskDemo" :demoDisplay="showDemo"/>
          <Card :item="projectsInfoFinish[1]" :demos="spotifyDemo" :demoDisplay="showDemo"/>
        </template>
        <template v-else>
          <Card :item="projectsInfoUp[0]" />
          <div class="md:h-28"> </div>
        </template>
      </template>
      <template #right>
        <template v-if="currentOption === 'Completed'"> 
          <Card :item="projectsInfoFinish[2]" :demos="socialDemo" :demoDisplay="showDemo"/>
          <Card :item="projectsInfoFinish[3]"  :demos="vaDemo" :demoDisplay="showDemo"/>
        </template>
      </template>
    </Layout>
  </div>
</template>