<template>
  
<!--slider (owlcuroasel)-->
<Carousel class="cardCon" v-bind="carouselConfig">
    <Slide v-for="product in products" :key="product.id" >
      <div class="card">
        <img :src="product.image" class="card__img" >
      <div class="card__caption">
        <span class="card__category">
          <b>{{product.category}}</b>
        </span>
        <span class="card__star">
          <b v-farsi-number="product.stars"></b>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
          </svg>
        </span>
      </div>
      <div class="card__body">
        <h2 class="card__title" >{{product.title}}</h2>
        <p class="card__text">
          <b  class="description">
            <span class="description__finalPrice" v-farsi-number="product.finalPrice"></span>
            <span class="description__symbol">تومان</span>
          </b>
          <span class="description">
             <span class="description__price" v-farsi-number="product.price"></span>
             <span class="description__span"><span>%</span><span v-farsi-number="product.discount"></span></span>
          </span>
          
        </p>
        <router-link @click="store.commit('changeTab' ,'category')" :to="{path:'/product',query:{id:product.id}}" class="btn btn-primary">ادامه</router-link>
      </div>
      </div>
    </Slide>

</Carousel>

</template>

<script setup>

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed , watch , onMounted} from "vue";
import {useStore} from "vuex";

const store = useStore();

const props = defineProps({
  searchQuery: {
    type: String,
    required: true
  },
  filter: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  priceTo: {
    type: Number,
    required: true
  },
  priceFrom: {
    type: Number,
    required: true
  },
  sort: {
    type: String,
    required: true
  }
})


const products = computed(() => store.getters.filterProduct(props.searchQuery,props.filter,props.brand,props.priceTo,props.priceFrom,props.sort))
const carouselConfig = {
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  dir:"rtl",

  breakpointMode: 'carousel',


  breakpoints: {
    350: {
      itemsToShow: 1.8,
      snapAlign: 'center',
    },
    500: {
      itemsToShow: 1.5,
      snapAlign: 'center',
    },
    650: {
      itemsToShow: 2,
      snapAlign: 'start',
    },
    800: {
      itemsToShow: 2.2,
      snapAlign: 'start',
    },
    1200: {
      itemsToShow: 3.5,
      snapAlign: 'start',
    },
  }
}
</script>
