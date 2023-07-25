<script setup>
import { RouterLink } from 'vue-router'
import { linkStyle } from '../reusable/style.js'
import Demo from './Demo.vue'
defineProps({
    item: {
      type: Object
    },
    demos: {
      type: Array
    },
    demoDisplay: {
      type: Boolean
    }
  })

//border-b-2 border-primary-300 
</script>

<template>
  <div class="bg-primary flex flex-col relative w-full my-4"> 
    <template v-if="(typeof(demos) !== 'undefined') && demoDisplay">
      <Demo :demos="demos" />
    </template>
    <h3 class="text-secondary text-xl font-medium mt-2"> {{item.title}} <span v-if="item.extra === 'mobile'" class="text-primary-200 text-lg bi bi-phone mx-1"></span> </h3>
    <p class="text-primary-100 text-lg mt-2">  
      {{ item.desc }} 
      <span v-if="item.title === 'Mood-ify'"> 
        <a :class="linkStyle + 'underline-offset-8'" href=""> Spotify API </a>.
      </span>
      <span v-if="item.title === 'Voice Actors Match'"> 
        <a :class="linkStyle + 'underline-offset-8'" href=""> AniList API </a>.
      </span>
    </p>
    <p class="text-primary-100 mt-2"> <span class="bi bi-code-slash text-secondary mx-1"></span> {{ item.made }} </p>
    <div class="flex self-end text-primary-300 my-2">
      <template v-if="item.extra !== 'notcomplete'"> 
        <a :class="linkStyle + 'mx-2 underline-offset-4' + (item.extra === 'notcomplete' ? 'pointer-events-none' : '')" :href="item.info" target="_blank"> Info </a> /
        <a :class="linkStyle + 'mx-2 underline-offset-4'" :href="item.live"> Live </a> /
        <a :class="linkStyle + 'mx-2 underline-offset-4' + (item.extra === 'notcomplete' ? 'pointer-events-none' : '')" :href="item.code" target="_blank"> Code </a> 
      </template>
  
      <template v-else>
        <p :class="'font-medium mx-2 text-secondary'"> Not available yet  </p>
      </template>
     
    </div>
  </div>
</template>