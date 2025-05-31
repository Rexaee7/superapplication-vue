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
             <span class="description__span" v-farsi-number="product.discount"></span>
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

const store = useStore()

const products = [
{
        id: "1",
        title:"لپ تاپ لنووا",
        price: 28000000,
        discount: 10,
        finalPrice:(28000000*90)/100,
        stars: 4.3,
        category: "لپ تاپ",
        image: "./images/product/1.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:20,
      },
      {
        id: "2",
        title:"لپ تاپ دل",
        price: 19000000,
        discount: 20,
        finalPrice:(19000000*80)/100,
        stars: 4.1,
        category: "لپ تاپ",
        image: "./images/product/2.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:10,
      },
      {
        id: "3",
        title:"لپ تاپ ایسوس",
        price: 15000000,
        discount: 8,
        finalPrice:(15000000*92)/100,
        stars: 4.6,
        category: "لپ تاپ",
        image: "./images/product/3.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:15,
      },
      {
        id: "4",
        title:"لپ تاپ سرفیس",
        price: 43000000,
        discount: 23,
        finalPrice:(43000000*87)/100,
        stars: 4.0,
        category: "لپ تاپ",
        image: "./images/product/4.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:4,
      },
      {
        id: "5",
        title:"لپ تاپ مکبوک",
        price: 31000000,
        discount: 3,
        finalPrice:(31000000*97)/100,
        stars: 3.8,
        category: "لپ تاپ",
        image: "./images/product/5.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:26,
      },
      {
        id: "6",
        title:"لپ تاپ ویووبوک",
        price: 22000000,
        discount: 4,
        finalPrice:(22000000*96)/100,
        stars: 4.8,
        category: "لپ تاپ",
        image: "./images/product/6.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:8,
      },
      {
        id: "7",
        title:"آیفون 16",
        price: 86000000,
        discount: 2,
        finalPrice:(86000000*98)/100,
        stars: 4.3,
        category: "موبایل",
        image: "./images/product/7.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:21,
      },
      {
        id: "8",
        title:"ردمی نوت 13",
        price: 25000000,
        discount: 1,
        finalPrice:(25000000*99)/100,
        stars: 4.7,
        category: "موبایل",
        image: "./images/product/8.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        sellCount:33,
      },
]

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