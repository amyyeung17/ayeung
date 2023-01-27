<script setup>
import { linkStyle } from '../reusable/style.js'
</script>
<template>
<!--receptive, enthuastic, willingness-->
  <div class="text-primary-100 p-2 relative top-4 whitespace-pre-line">
    I'm a learner that believes every experience can be an opportunity to grow from.
    I strive to work towards my goals and improve as much as I can each day, whether it be work-related or personal.
    I'm passionate about helping others accompish their own goals and have worked extensively in education, especially in STEM related fields. 
    {{`\n \n`}}
    As a developer, I've been exploring more of the frontend side by working on
    some side-projects. For each project, I attempt something novel to me, such as using a 
    new framework. I find the learning process to be valuable not only for broadening my skill set,
    but also for deepening my understanding overall. My most recent endeavor is learning Vue.
    {{`\n \n`}}
    In my downtime, I've been trying to improve my 5k time and to finish my huge backlog of games. 
    I'm a big rowing enthuiast from my time spent as a coxswain in college. 
    {{`\n \n`}}
    Talk to me anytime, including opinions on my wacky London fit, at: <a :class="linkStyle + ' underline-offset-4 inline'" href="mailto:amyyeung17@gmail.com">amyyeung17@gmail.com</a>.
  </div>
</template>