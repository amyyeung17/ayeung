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
      <span :class="`bi bi-${i.icon} text-secondary text-3xl my-2 mx-3`"> </span>
      <p class="text-primary-100 text-xl mx-1 my-2 pb-1"> 
        <a :class="linkStyle + 'm-1 underline-offset-8'" :href="i.link" :target="i.text !== 'Email' && '_blank'"> {{i.linktext}} </a>
      </p>
    </div>
  </div>
</template>
