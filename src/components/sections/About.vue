<script setup>
import Heading from '../reusable/Heading.vue'
import Layout from '../reusable/Layout.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import Filler from '../about/Filler.vue'
import Intro from '../about/Intro.vue'
import Point from '../about/Point.vue'
import image from '../about/received_410857410483641.jpeg'
</script>

<template>
  <div> 
    <Layout :lcol-style="'h-full justify-center'" :rcol-style="layoutTwoStyle + 'justify-center'"> 
      <template #left>
        <Heading :text="'About me'" />
        <h3 class="text-primary-200 text-2xl font-medium px-3 my-2"> 
          Philly native with an adventurous and curious heart. 
        </h3>
        <Intro />
      </template>
      <template #right>
        <img class="w-1/2 relative md:w-full lg:w-3/4 top-12 md:top-0" :src="image"/>
      </template>
    </Layout>
    <div class="bg-primary w-full h-10 md:h-12"> </div>
    <Layout :bg-style="'my-6'" :lcol-style="'px-3 relative top-12 md:top-4'" :rcol-style="'px-3 relative top-20 md:top-4'">
      <template #left>
        <h2 class="text-secondary text-xl font-medium"> I graduated from... </h2>
        <Point />
      </template>
      <template #right>
        <Filler />
      </template>
    </Layout>
  </div>
</template>
