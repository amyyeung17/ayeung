<script setup>
import { linkStyle } from "../reusable/style.js";
</script>

<template>
  <div class="bg-primary flex flex-col relative w-full">
    <p class="font-medium mb-1 text-2xl text-secondary">Green & Clean Philly</p>
    <p>
      A mapping tool aimed at supporting intiatives to green and clean vacant
      lots to reduce gun violence. A Code for Philly project.
    </p>
    <p class="inline my-2">
      I'm work in the frontend, helping make the website
      <a
        :class="`${linkStyle} underline-offset-4`"
        href="https://github.com/CodeForPhilly/vacant-lots-proj/pull/442"
        target="_blank"
      >
        mobile-friendy</a>
      and
      <a
        :class="`${linkStyle} underline-offset-4`"
        href="https://github.com/CodeForPhilly/vacant-lots-proj/pull/482"
        target="_blank"
      >
        accessible.
      </a>
    </p>
    <p class="mt-2">
      <span class="bi bi-code-slash text-secondary mx-1"></span>
      Next.js, TypeScript, Tailwind CSS
    </p>
    <div class="flex self-end text-primary-300 my-2">
      <a
        :class="`${linkStyle} mx-2 underline-offset-4`"
        href="https://www.cleanandgreenphilly.org/about"
        target="_blank"
      >
        More Info
      </a>
      /
      <a
        :class="`${linkStyle} mx-2 underline-offset-4`"
        href="https://www.cleanandgreenphilly.org/"
        target="_blank"
      >
        Website
      </a>
    </div>
  </div>
</template>

<style lang="scss"></style>
