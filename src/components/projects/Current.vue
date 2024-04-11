<script setup>
import { linkStyle } from '../reusable/style.js';
</script>

<template>
  <div class="bg-primary flex flex-col max-lg:mt-4 w-full">
    <p class="font-medium mb-1 text-2xl text-secondary">Oppia</p>
    <p>
      A free open-source learning platform aimed to
      make engaging education accessible to students worldwide.
    </p>
    <p class="inline my-2">
      I'm part of the LaCE (Learner and Creator Experience) team. Some things
      I've done include
      <a
        :class="`${linkStyle} underline-offset-4`"
        href="https://github.com/oppia/oppia/pull/19580"
        target="_blank"
      >
        addressing responsive design issues, improving code maintainbility,
      </a>
      and
      <a
        :class="`${linkStyle} underline-offset-4`"
        href="https://github.com/oppia/oppia/pull/19396"
        target="_blank"
      >
        creating custom components.
      </a>
    </p>
    <p class="mt-1">
      Currently I'm
      <a
        :class="`${linkStyle} underline-offset-4`"
        href="https://github.com/oppia/oppia/issues/18384"
        target="_blank"
      >
        implementing the redesigned learner dashboard,
      </a>
      which includes significant refactoring the codebase.
    </p>
    <p class="mt-2">
      <span class="bi bi-code-slash text-secondary mx-1"></span> Angular,
      TypeScript, Python, Karma, Jasmine, Bootstrap
    </p>
    <div class="flex self-end text-primary-300 my-2">
      <a
        :class="`${linkStyle} mx-2 underline-offset-4`"
        href="https://www.oppiafoundation.org/about-oppia"
        target="_blank"
      >
        More Info
      </a>
      /
      <a
        :class="`${linkStyle} mx-2 underline-offset-4`"
        href="https://www.oppia.org/"
        target="_blank"
      >
        Website
      </a>
    </div>
  </div>
</template>

<style lang="scss"></style>
