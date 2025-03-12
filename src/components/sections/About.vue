<script setup>
import Heading from '../reusable/Heading.vue'
import Layout from '../reusable/Layout.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import Intro from '../about/Intro.vue'
import image from '../about/banana.jpeg'
</script>

<template>
  <Layout :lcol-style="'h-full justify-center'" :rcol-style="layoutTwoStyle + 'justify-center'"> 
    <template #left>
      <Heading :text="'About me'" />
      <Intro />
    </template>
    <template #right>
      <img alt="About picture" class="w-1/2 relative md:w-full lg:w-3/4 top-12 md:top-0" :src="image"/>
    </template>
  </Layout>
</template>
