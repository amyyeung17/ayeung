<script setup>
import { contactInfo } from '../reusable/info.js'
import { linkStyle } from '../reusable/style.js'
</script>

<template>
  <div class="flex flex-col items-center justify-center h-3/4 w-full py-2 px-3"> 
    <div 
      v-for="(i, index) of contactInfo"
      class="flex items-center w-full my-1 px-3"
      :key="index"
    > 
      <span :class="`bi bi-${i.icon} text-primary-300 text-2xl my-2 mx-3`"> </span>
        <a :class="linkStyle + ' text-xl mx-1 my-2 hover:text-secondary hover:underline underline-offset-4'" :href="i.link" :target="i.text !== 'Email' && '_blank'"> {{i.linktext}} </a>
    </div>
  </div>
</template>
