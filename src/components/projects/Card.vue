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
const cardLinkStyle = linkStyle + 'mx-2 underline-offset-4'
</script>

<template>
  <div class="bg-primary flex flex-col relative w-full my-4"> 
    <template v-if="(typeof(demos) !== 'undefined') && demoDisplay">
      <Demo :demos="demos" />
    </template>
    <h3 class="font-medium text-secondary text-xl mt-2"> {{item.title}} <span v-if="item.extra === 'mobile'" class="text-primary-200 text-lg bi bi-phone mx-1"></span> </h3>
    <p class="text-lg mt-2">  
      {{ item.desc }} 
      <a v-if="item.title === 'Mood-ify' || item.title === 'Voice Actors Match'" :class="linkStyle + 'underline-offset-8'" :href="item.apiLink" > {{item.linkDesc}} </a>
      <span v-if="item.title === 'Mood-ify' || item.title === 'Voice Actors Match'">.</span>
    </p>
    <p class="mt-2"> <span class="bi bi-code-slash text-secondary mx-1"></span> {{ item.made }} </p>
    <div class="flex self-end text-primary-300 my-2">
      <template v-if="item.extra !== 'notcomplete'"> 
        <a :class="cardLinkStyle" :href="item.info" target="_blank"> Info </a> /
        <a :class="cardLinkStyle" :href="item.live"> Live </a> /
        <a :class="cardLinkStyle" :href="item.code" target="_blank"> Code </a> 
      </template>
    </div>
  </div>
</template>