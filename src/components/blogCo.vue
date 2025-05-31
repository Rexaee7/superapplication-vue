<template>
   <router-link @click="store.commit('changeTab' ,'category')" :to="{path:'/blogs',query:{id:blog.id}}" 
   class="card" 
   v-for="(blog,index) in blogs"
   :key="index">
      <div class="img" :style="{ backgroundImage: 'url('+blog.image+')' }"></div>
      <div class="card__bottom">
        <div class="card__caption">
        <span class="card__category">
          <b>دسته‌بندی :  {{blog.category}}</b>
        </span>
      </div>
      <div class="card__body">
        <h2 class="card__title" >{{blog.title}}</h2>
        <p class="card__text">
          <b> <span class="symbol"> نویسنده</span>: {{blog.author[0]}}</b>
          <span>
              <b v-farsi-number="blog.date[1]"></b> 
              <b v-farsi-number="blog.date[0]"></b>
              | <b v-farsi-number="blog.date[3]"></b> :
              <b v-farsi-number="blog.date[2]"></b> 
          </span>
        </p>
      </div>
      </div>
   </router-link>
</template>

<script setup>
import { computed } from "vue";
import {useStore} from "vuex";

const store = useStore();



const blogs = computed(() => store.state.blogs.blogs)


</script>

<style>

</style>