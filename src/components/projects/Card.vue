<script setup>
import { RouterLink } from 'vue-router'
import { linkStyle } from '../reusable/style.js'
defineProps({
    item: {
      type: Object
    }
  })

//border-b-2 border-primary-300 
</script>

<template>
  <div class="bg-primary flex flex-col w-full mt-4"> 
    <h3 class="text-secondary text-xl font-medium mt-2"> {{item.title}} <span v-if="item.extra === 'mobile'" class="text-primary-200 text-lg bi bi-phone mx-1"></span> </h3>
    <p class="text-primary-100 text-lg mt-2">  
      {{ item.desc }} 
      <span v-if="item.title === 'Mood-ify'"> 
        <a :class="linkStyle + 'underline-offset-8'" href=""> Spotify API </a>.
      </span>
      <span v-if="item.title === 'Pokémon Weakness'"> 
        <a :class="linkStyle + 'underline-offset-8'" href=""> Pokémon API </a>.
      </span>
    </p>
    <p class="text-primary-100 mt-2"> <span class="bi bi-code-slash text-secondary mx-1"></span> {{ item.made }} </p>
    <div class="flex self-end text-primary-300 my-2">
      <a :class="linkStyle + 'mx-2 underline-offset-4'" :href="item.info" target="_blank"> Info </a> /
      <a :class="linkStyle + 'mx-2 underline-offset-4'" :href="item.live"> Live </a> /
      <a :class="linkStyle + 'mx-2 underline-offset-4'" :href="item.code" target="_blank"> Code </a> 
    </div>
  </div>
</template>