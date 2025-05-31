<template>
  <!--slider (owlcuroasel)-->
<Carousel class="magic__cardCon" v-bind="carouselConfig">
    <Slide v-for="product in products" :key="product.id">
      <router-link :to="{path:'/product',query:{id:product.id}}" class="card" @click="store.commit('changeTab' ,'category')" >
      <img :src="product.image" class="card__img" >
      <div class="card__body">
        <h2 class="card__title" >{{product.title}}</h2>
        <p class="card__text">
          <span class="description">
             <span class="description__price" v-farsi-number="product.price"></span>
             <span class="description__span"><span  v-farsi-number="product.discount"></span> %</span>
          </span>
          <b  class="description">
            <span class="description__finalPrice" v-farsi-number="product.finalPrice"></span>
            <span class="description__symbol">تومان</span>
          </b>
        </p>
      </div>
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

const products = computed(() => store.getters.filterProduct("","","",0,0,"discount"))

const carouselConfig = {
  itemsToShow: 1,
  dir:"rtl",
  gap: 5,
  snapAlign: 'center',

  breakpointMode: 'carousel',
  breakpoints: {
    350: {
      itemsToShow: 2.1,
      snapAlign: 'center',
    },
    500: {
      itemsToShow: 2.5,
      snapAlign: 'start',
    },
    650: {
      itemsToShow: 3.5,
      snapAlign: 'start',
    },
    800: {
      itemsToShow: 4.5,
      snapAlign: 'start',
    },
    1200: {
      itemsToShow: 7.5,
      snapAlign: 'start',
    },
  }
}


</script>