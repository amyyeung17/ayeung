<script setup>
import Credits from './contact/Credits.vue'

import About from './sections/About.vue'
import Contact from './sections/Contact.vue'
import Projects from './sections/Projects.vue'
import Skills from './sections/Skills.vue'
import Welcome from './sections/Welcome.vue'
import { useScroll } from './reusable/scroll.js'

</script>

<template>
  <Welcome />
  <div id="about"> 
    <div class="bg-primary w-full h-10 md:h-12"> </div>
    <About />
    <div class="bg-primary w-full h-10 md:h-12"> </div>
  </div>
  <div id="skills">
    <div class="bg-primary w-full h-10 md:h-12"> </div>
    <Skills />
    <div class="bg-primary w-full h-10 md:h-12"> </div>
  </div>
  <div id="projects">
    <div class="bg-primary w-full h-10 md:h-12"> </div>
    <Projects id="projects" />
    <div class="bg-primary w-full h-10 md:h-12"> </div>
  </div>
  <Contact id="contact" />
</template>

