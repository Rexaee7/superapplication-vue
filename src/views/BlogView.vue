<template>
  <div class="header-container">
    <h3 class="blog-header"><b>مشاهده </b>محصولات</h3>
    <div>
      <span class="border"></span>
    </div>
  </div>

  <div class="showProducts">

    <router-link :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:0 ,priceTo : 0 }}" @click="store.commit('changeTab','category')" class="item">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg>
      <h4>موبایل</h4>
    </router-link>

    <router-link :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:0 ,priceTo : 0 }}" @click="store.commit('changeTab','category')" class="item">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tablet" viewBox="0 0 16 16">
        <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
      </svg>
      <h4>تبلت</h4>
    </router-link>

    <router-link :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:0 ,priceTo : 0 }}" @click="store.commit('changeTab','category')" class="item">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
      </svg>
      <h4>لپ‌تاپ</h4>
    </router-link>

    <router-link :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:0 ,priceTo : 0 }}" @click="store.commit('changeTab','category')" class="item">
      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
        <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
      </svg>
      <h4>هدفون</h4>
    </router-link>

  </div>

  <div class="header-container">
    <h3 class="blog-header"><b>منتخب </b>سردبیر</h3>
    <div>
      <span class="border"></span>
    </div>
  </div>

  <blogsslider-co></blogsslider-co>


  <div class="header-container">
    <h3 class="blog-header"><b>آخرین </b>مطالب</h3>
    <div>
      <span class="border"></span>
    </div>
  </div>
<div ref="cards" class="search__cards">
<blog-co></blog-co>
</div>
</template>

<script setup>
import {useStore} from "vuex"
import blogssliderCo from "../components/blogssliderCo.vue"
import blogCo from "../components/blogCo.vue"


const store = useStore();
</script>

<style scoped lang="scss">
.header-container{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.4rem 0.6rem;

  .blog-header{
  font-family: titr;
  color: #6c757d;
  }

  div{
    padding: 0 0.4rem;
    display: flex; align-content: center;
    width: 100%;
    flex-wrap: wrap;

    .border{
    height: 1px;
    width: 100%;
    background-color: #6c757d;
    }
  }
}


.showProducts{
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  .item{
    display: flex; 
    flex-direction: column;
    justify-content: center; align-content: center; flex-wrap: wrap;

    h4{
      margin: 0.3rem 0;
      text-align: center;
    }
  }
}
</style>