<script setup>
import Layout from '../reusable/Layout.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import Credits from '../contact/Credits.vue'
import Personal from '../contact/Personal.vue'

const lcolStyle = layoutTwoStyle + 'justify-end md:justify-center'
const rcolStyle = layoutTwoStyle + 'justify-start md:justify-center'
</script>

<template>
  <Layout :bg-style="'h-screen flex-col'" :grid-style="'h-4/5 grid-cols-1 md:grid-cols-2 relative top-20'" :lcol-style="lcolStyle" :rcol-style="rcolStyle" > 
    <template #left>
      <div class="flex flex-col items-center justify-center h-4/5 w-full md:border-r-2 border-primary-300"> 
        <h2 class="text-secondary self-start lg:self-center text-4xl md:text-5xl"> Contact me: </h2>
      </div>
    </template>
    <template #right>
      <Personal />
    </template>
    <template #bottom>
      <Credits />
    </template>
  </Layout>
</template>
