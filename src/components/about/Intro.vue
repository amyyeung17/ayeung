<script setup>
import { linkStyle } from '../reusable/style.js'
</script>
<template>
<!--receptive, enthuastic, willingness-->
  <div class="text-primary-100 p-2 relative top-4 whitespace-pre-line">
    I'm a learner that believes every experience can be an opportunity to grow from.
    I strive to work towards my goals and improve as much as I can each day, whether it be work-related or personal.
    I'm passionate about helping others accompish their own goals and have worked extensively in STEM education. 
    {{`\n \n`}}
    As a developer, I've been recently exploring more of the frontend side through
    side-projects. With each project, I enjoy challenging myself by integrating
    novel tools, skills, languages, etc. I find the learning process itself to be 
    valuable for not only acquiring new knowledge, but also helping deepen my understanding of other materials. 
    Nothing beats the light bulb going off in my head when everything falls into the right pieces.  
    My most recent endeavor has been experimenting Next.js and GraphQL. 
    {{`\n \n`}}
    In my downtime, I've been running a lot and playing Genshin Impact & Honaki Star Rail. 
    I recently went on a huge 2-week trip to Japan and South Korea with my friends. Needless to say,
    I want to go back again already. :,)
    {{`\n \n`}}
    Talk to me anytime at: <a :class="linkStyle + ' underline-offset-4 inline'" href="mailto:amyyeung17@gmail.com">amyyeung17@gmail.com</a>.
  </div>
</template>