<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

defineProps({
  demos: {
    type: Array
  }
})

</script>

<template>

    <carousel className="flex flex-col grow relative" :items-to-show="1"  wrapAround pauseAutoplayOnHover>
      <slide v-for="(slide, index) in demos" :key="index">
        <div className="h-48 w-64"> 
          <img :src="slide" className="object-fill h-full w-full relative"  />
        </div>
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>
</template>

<style lang="scss">
.carousel__prev,
.carousel__next {
	border: #B8C1D1;
  background: #B8C1D1;
}

.carousel__pagination-button {
	border: #B8C1D1;
  background: #B8C1D1;

  &:hover {
    background-color: #EECD86;
  }
}

.carousel__pagination-item {
	margin-left: .0675rem;
  margin-right: .0675rem;
}

.carousel__pagination-button--active {
	border: #EECD86;
  background-color: #EECD86;
}

.carousel__pagination {
  margin-top: .5rem !important;
	flex-grow: 1 !important;
}



</style>