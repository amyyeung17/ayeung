<script setup>
import NavBar from './components/Navbar.vue'
</script>

<template>
  <NavBar />
  <div class="bg-primary w-screen max-w-full"> 
    <RouterView></RouterView>
  </div>
</template>