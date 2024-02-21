<script setup>
import { linkStyle } from '../reusable/style.js'
</script>
<template>
  <div class="text-primary-100 p-2 relative top-4 whitespace-pre-line">
    I graduated as the first in my family from the University of Pennsylvania, earning a Bachelor of Applied Science in Computer and Cognitive Science in 2021.
    I'm passionate about helping others accomplish their own goals and have worked extensively in STEM education. 
    {{`\n \n`}}
    As a developer, I've been recently exploring more of the frontend side through
    side-projects and open-source. With each project, I enjoy challenging myself by integrating
    novel tools, skills, languages, etc. 
    {{`\n \n`}}
    I'm currently working a couple gigs and helping revamp the frontend of 
    <a :class="linkStyle + ' underline-offset-4 inline'" href="https://www.oppia.org/" target="_blank"> Oppia.</a>
    In my downtime, I've been running a lot and playing Genshin Impact & Honaki Star Rail. 
    {{`\n \n`}}
    Talk to me anytime at: <a :class="linkStyle + ' underline-offset-4 inline'" href="mailto:amyyeung17@gmail.com">amyyeung17@gmail.com</a>.
  </div>
</template>