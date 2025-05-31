<template>
  
<!--slider (owlcuroasel)-->
<Carousel class="carousel" v-bind="carouselConfig">
    <Slide v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <div class="carousel__img" :style="{ backgroundImage: 'url(' + slide.url + ')' }" ></div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

</template>

<script setup>

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slides = [
{url:"./images/slide1.jpg"},
{url:"./images/slide2.jpg"},
{url:"./images/slide3.jpg"},
]

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay : 2000,
}
</script>
