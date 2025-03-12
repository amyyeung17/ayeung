<script setup>
import Heading from '../reusable/Heading.vue'
import { skillsInfoMain, skillsInfoSub } from '../reusable/info.js'
import { containerStyle } from '../reusable/style.js'
import SkillIcons from '../skills/SkillIcons.vue'
</script>

<template>
  <div :class="containerStyle + 'flex-col items-center my-4 py-3'">
    <Heading :text="'Skills'" :extra-style="'self-start'"/>
    <SkillIcons :skill-list="skillsInfoMain" />
    <SkillIcons :skill-list="skillsInfoSub" />
    <p class="text-primary-100 text-center mt-2"> Additional frameworks/libraries: </p>
    <p class="text-primary-100 text-center mb-2"> Redux, Pinia, Express, Axios, Node.js, JQuery, Styled-components, Bootstrap, Tailwind </p>
    <a 
      href="https://docs.google.com/document/d/1W53lZPMyf3PC406VNlmrtM3F8TLmgPN_3KYlaLeHTj8/edit?usp=sharing"
      target="_blank"
      class="bg-secondary text-primary rounded-full border-2 border-secondary px-3 py-2 hover:ring-2 hover:text-primary relative top-4"
    > 
      View Resume  
    </a>
  </div>
</template>
