<template>
  
<!--slider (owlcuroasel)--> 
<Carousel class="carousel blogs__home" v-bind="carouselConfig" >
    <Slide v-for="blog in blogs" :key="blog.id" class="carousel__item">
      <router-link @click="store.commit('changeTab','blog')" :to="{path:'/blogs',query:{id:blog.id}}" class="blog__card">
        <div class="img" :style="{ backgroundImage: 'url('+blog.image+')' }"></div>
        <div>
            <h3>{{blog.title}}</h3>
            <p>
              <span>
                
                <b v-farsi-number="blog.date[0]"></b> 
                <b v-farsi-number="blog.date[1]"></b> 
                | <b v-farsi-number="blog.date[3]"></b> :
                <b v-farsi-number="blog.date[2]"></b> 
              </span>
              <span><b>نویسنده:</b> {{blog.author[0]}}</span></p>
        </div>
    </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>

</template>

<script setup>
import {useStore} from "vuex"
import {computed} from "vue"
import 'vue3-carousel/carousel.css'
import { getCurrentInstance, ref , onMounted } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'


const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 768
})


const store = useStore()

const blogs = computed(()=> store.state.blogs.blogs)


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

<style scoped lang="scss">
.blogs__home{
    align-items: center  !important;
    padding: 0;
    margin: 0;

    .carousel__item{
        padding: 0rem 0.3rem ;
    }

    h3{
        direction: rtl;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        widows: 300px;
    }
}
</style>
