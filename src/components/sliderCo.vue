<template>
  
<!--slider (owlcuroasel)--> 
<Carousel class="carousel home-slider" v-bind="carouselConfig" >
    <Slide v-for="slide in slides" :key="slide" class="carousel__item">
      <router-link to="/blog" @click="store.commit('changeTab','blog')"  >
        <div v-if="!isMobile" class="carousel__img" :style="{ backgroundImage: 'url(' + slide.url + ')' }" ></div>
        <div v-else class="carousel__img" :style="{ backgroundImage: 'url(' + slide.urlMobile + ')' }" ></div>
      </router-link>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

</template>

<script setup>
import {useStore} from "vuex"
import 'vue3-carousel/carousel.css'
import { getCurrentInstance, ref , onMounted } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})

const store = useStore()

const slides = [
{name:'',url:"./images/slide1.jpg",urlMobile:"./images/slide1-mobile.jpg"},
{name:'',url:"./images/slide2.jpg",urlMobile:"./images/slide2-mobile.jpg"},
{name:'',url:"./images/slide3.jpg",urlMobile:"./images/slide3-mobile.jpg"},
{name:'',url:"./images/slide4.jpg",urlMobile:"./images/slide4-mobile.jpg"},
{name:'',url:"./images/slide5.jpg",urlMobile:"./images/slide5-mobile.jpg"},
{name:'',url:"./images/slide6.jpg",urlMobile:"./images/slide6-mobile.jpg"},
]

const carouselConfig = {
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  autoplay : 3000,

  breakpointMode: 'carousel',

  breakpoints: {
    300: {
      itemsToShow: 1.1,
      snapAlign: 'center',
    },
    500: {
      itemsToShow: 1,
      wrapAround: true,
      autoplay : 3000,
    },
  }
}
</script>
