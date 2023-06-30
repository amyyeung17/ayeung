<script setup>
import Layout from '../reusable/Layout.vue'
import { layoutTwoStyle } from '../reusable/style.js'
import Credits from '../contact/Credits.vue'
import Personal from '../contact/Personal.vue'

const lcolStyle = layoutTwoStyle + 'justify-end md:justify-center'
const rcolStyle = layoutTwoStyle + 'justify-start md:justify-center max-md:h-72'
</script>

<template>
  <Layout :bg-style="'h-max md:h-screen flex-col max-md:overflow-x-hidden max-md:overflow-y-clip'" :grid-style="'h-4/5 grid-cols-1 md:grid-cols-2 relative top-10 md:top-20'" :lcol-style="lcolStyle" :rcol-style="rcolStyle" > 
    <template #left>
      <div class="flex flex-col items-center justify-center h-24 md:h-4/5 w-full md:border-r-2 border-primary-300"> 
        <h2 class="text-secondary self-start lg:self-center text-4xl md:text-5xl font-medium"> Contact me: </h2>
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
