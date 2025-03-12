<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Heading from '../reusable/Heading.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import { projectsInfoFinish, projectsInfoUp } from '../reusable/info.js'
import Layout from '../reusable/Layout.vue'
import Layout2 from '../reusable/Layout2.vue'
import Card from '../projects/Card.vue'
import Current from '../projects/Current.vue'
import Current2 from '../projects/Current2.vue'
import Options from '../projects/Options.vue'
import oppia from '../projects/demo/oppia.png'
import greencleanphilly from '../projects/demo/greencleanphilly.png'

const currentOption = ref('progress')
</script>

<template>
  <div class="w-full relative overflow-hidden"> 
    <Layout :bg-style="'flex flex-col'" :lcol-style="layoutTwoStyle" :rcol-style="layoutTwoStyle">  
      <template #top>
        <Heading :text="'Projects'" :extra-style="'sm:mb-0'"/>
        <Options :current-option="currentOption" @on-options-click="(c) => currentOption = c"/> 
      </template>
      <template #left>
        <template v-if="currentOption === 'complete'"> 
          <Card :item="projectsInfoFinish[0]" />
          <Card :item="projectsInfoFinish[1]" />
        </template>
        <template v-else>
          <div class="flex max-lg:h-full items-center max-md:mt-4 w-full">
            <img alt="Image of Oppia website" :src="oppia" />
          </div>
          <div class="md:h-32"></div>
          <div class="max-md:hidden">
            <Current2 />
          </div>
        </template>
      </template>
      <template #right>
        <template v-if="currentOption === 'complete'"> 
          <Card :item="projectsInfoFinish[2]" />
          <Card :item="projectsInfoFinish[3]" />
        </template>
        <template v-else> 
          <Current />
          <div class="h-16 md:h-32"></div>
          <div class="flex h-full items-center max-md:mt-4 xl:mt-4 w-full">
            <img alt="Image of Green & Clean Philly website" :src="greencleanphilly" />
          </div>
          <div class="md:hidden">
            <Current2 />
          </div>
        </template>
      </template>
    </Layout>
  </div>
</template>