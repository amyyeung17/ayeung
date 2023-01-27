<script setup>
import About from './sections/About.vue'
import Contact from './sections/Contact.vue'
import Projects from './sections/Projects.vue'
import Skills from './sections/Skills.vue'
import Welcome from './sections/Welcome.vue'
import { useScroll } from './reusable/scroll.js'

</script>

<template>
  <Welcome />
  <About id="about" />
  <div lass="bg-primary w-full" id="skills"> 
    <div class="w-full h-20"> </div>
    <Skills />
    <div class="w-full h-20"> </div>
  </div>
  <Projects id="projects" />
  <Contact id="contact" />
</template>

