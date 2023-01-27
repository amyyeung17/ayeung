<script setup>
import Layout from './components/reusable/Layout.vue'
import Timeline from './Timeline.vue'
//NOT IN USE
</script>

<template>
  <div> 
    <Layout :grid-style="'grid-cols-4'" lcol-style="relative" :rcol-style="'h-full col-span-3'" > 
      <template #left>
          <div class="self-center h-full w-0 border-l-2 border-primary-100 flex justify-center items-center"> 
            <!--<h2 class="text-secondary text-4xl text-center font-semibold"> Work </h2> -->
          </div>
      </template>
      <template #right>
        <h2 class="text-secondary text-4xl font-semibold w-fit"> Work Experience </h2>
        <Timeline :info-type="'work'" />
      </template>
    </Layout>
    <div class="w-full h-10"></div>
    <Layout :grid-style="'grid-cols-4'" :rcol-style="'h-full col-span-3'" > 
      <template #left>
        <div class="self-center h-full w-0 border-l-2 border-primary-100 h-full flex justify-center items-center"> 
          <!--<h2 class="text-secondary text-4xl text-center font-semibold"> Leadership & Extracurriculars </h2>-->
        </div>
      </template>
      <template #right>
        <h2 class="text-secondary text-4xl font-semibold"> Leadership & Extracurriculars </h2>
        <Timeline :info-type="'leader'" />
      </template>
    </Layout>
  </div>
</template>
