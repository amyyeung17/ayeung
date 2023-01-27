<script setup>
import { ref } from 'vue'
import Heading from '../reusable/Heading.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import { projectsInfoFinish, projectsInfoUp } from '../reusable/info.js'
import Layout from '../reusable/Layout.vue'
import Card from '../projects/Card.vue'
import Options from '../projects/Options.vue'

const currentOption = ref('Completed')

</script>

<template>
  <div class="w-full relative overflow-hidden"> 
    <Layout :bg-style="'flex flex-col'" :lcol-style="layoutTwoStyle" :rcol-style="layoutTwoStyle">  
      <template #top>
        <Heading :text="'Projects'" :extra-style="'sm:mb-0'"/>
        <Options :current-option="currentOption" @on-options-click="(c) => currentOption = c"/>
      </template>
      <template #left>
        <template v-if="currentOption === 'Completed'"> 
          <Card :item="projectsInfoFinish[0]" />
          <Card :item="projectsInfoFinish[1]" />
        </template>
        <template v-else>
          <Card :item="projectsInfoUp[0]" />
          <div class="md:h-28"> </div>
        </template>
      </template>
      <template #right>
        <Card :item="projectsInfoFinish[2]" v-if="currentOption === 'Completed'" />
      </template>
    </Layout>
  </div>
</template>