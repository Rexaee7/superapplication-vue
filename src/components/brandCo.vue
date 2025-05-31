<template>
  <router-link :to="{path:'/search',query:{cat:'all', brand:item.name,priceFrom:0 ,priceTo : 0 }}" @click="store.commit('changeTab' ,'category')" v-for="item in items" :key="item.id" class="brand">
    <img :src="item.src" alt="">
  </router-link>
</template>

<script setup>
import {useStore} from "vuex"

const store = useStore();

const items = [
    {name:"sam" , src:"./images/brands/sam.jpg"},
    {name:"xia" , src:"./images/brands/xia.jpg"},
    {name:"app" , src:"./images/brands/app.jpg"},
    {name:"" , src:"./images/brands/oth.jpg"},
]
</script>

<style>

</style>