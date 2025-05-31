<template>
   <router-link @click="store.commit('changeTab' ,'category')" :to="{path:'/product',query:{id:product.id}}" 
   class="card" 
   v-for="(product,index) in products"
   :key="index">
      <img :src="product.image" class="card__img" >
      <div class="card__bottom">
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
          <span class="discount" v-farsi-number="product.price"></span>
          <b> <span v-farsi-number="product.finalPrice" class="symbol"></span> تومان</b>
        </p>
      </div>
      </div>
   </router-link>
    <div style="width:100% !important;text-align:center;padding:0.9rem 0" v-if="products.length == 0 ">محصولی با نام وارد شده یافت نشد !</div>
</template>

<script setup>
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


</script>

<style>

</style>