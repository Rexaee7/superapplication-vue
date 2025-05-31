<template>
<p style="width:110% !important" v-show="products.length == 0">هنوز جست و جویی نکرده اید !</p>

  <!--slider (owlcuroasel)-->
<Carousel  v-bind="carouselConfig" class="history-span">
    <Slide v-for="product in products" :key="product.id">
      <router-link  :to="{path:'/search',query:{q:product,cat:'', brand:'',priceFrom:0 ,priceTo : 0 }}">
        <span>{{product}}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
        </span>
      </router-link>
    </Slide>
</Carousel>
</template>

<script setup>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import {useStore} from "vuex"
import {computed} from "vue"

const store = useStore()

const products = computed(()=> store.state.searchHistory)

const carouselConfig = {
  itemsToShow: 1,
  dir:"rtl",
  gap: 5,
  snapAlign: 'start',

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: 'carousel',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 2.5,
      snapAlign: 'start',
    },
    // 400px and up
    400: {
      itemsToShow: 3.5,
      snapAlign: 'start',
    },
    // 500px and up
    500: {
      itemsToShow: 4.5,
      snapAlign: 'start',
    },
  },
}


</script>