<script setup>
import { containerStyle } from '../reusable/style.js'

</script>

<template>
  <div :class="containerStyle + 'flex-col justify-center h-screen'">
    <h1 class="text-5xl md:text-6xl text-secondary px-3 my-3"> Hi, my name is Amy. </h1>
    <p class="text-3xl md:text-4xl text-secondary px-3 mt-3 mb-1"> I'm a developer looking to explore and create new things. </p>
    <p class="text-3xl md:text-4xl text-secondary px-3 mt-1"> It's nice to meet you :) </p>
    <span class="bi bi-arrow-down text-secondary self-center relative max-sm:top-36 top-40"> </span>
  </div>
</template>

<style>
.main-body {
  top: 3rem;
}
</style>
