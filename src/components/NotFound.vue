<script setup>
import { useRouter } from 'vue-router'
import { buttonBasic, containerStyle } from './reusable/style.js'

const router = useRouter()
</script>
<template>
  <div :class="containerStyle" class="h-screen flex flex-col items-center"> 
    <h1 class="text-secondary font-5xl font-medium"> 404 </h1>
    <h2 class="font-2xl"> Page not found </h2>
    <p class="text-lg"> Please return to main page. </p>
    <button @click="router.push({name: 'home'})" :class="buttonBasic" class="text-secondary font-2xl"> <span class="bi bi-arrow-left"></span> </button>
  </div>
</template>