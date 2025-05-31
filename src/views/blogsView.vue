<template>
<div class="product-header">
    <router-link class="header" :to="{path:'/blog'}">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
    </router-link>
</div>
  <div class="product">
    <div class="product__body">
        <div class="product__imageCon">
            <img :src="blog.image" alt="">
        </div>
        <div class="product__description">
            <h2>{{blog.title}}</h2>
            <div class="product__category">
               <span class="card__category">
                    <img :src="blog.author[1]" width="20px" height="20px" alt="">
                    <b>{{blog.author[0]}}</b>
                </span>
                <span class="card__star">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg>
                    <span>
                        <b v-farsi-number="blog.date[1]"></b> 
                        <b v-farsi-number="blog.date[0]"></b>
                        | <b v-farsi-number="blog.date[3]"></b> :
                        <b v-farsi-number="blog.date[2]"></b> 
                    </span>
                </span>
            </div>
            <hr>
            <div class="product__category">
               <span class="card__category">
                    دسته‌بندی :  <b>{{blog.category}}</b>
                </span>
                <span class="card__star">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
                        <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
                    </svg>
                    <span>زمان مورد نیاز : <b v-farsi-number="blog.date[4]"></b> دقیقه</span>
                </span>
            </div>
            <div class="product__caption mx-5" v-html="blog.content"></div>
        </div>
    </div>
  </div>
 
</template>

<script setup>
import { ref , computed , onMounted} from "vue";
import {useRoute } from "vue-router";
import {useStore} from "vuex";
import { useToast } from "vue-toastification";
import moment from 'moment-jalaali'

moment.loadPersian({ dialect: 'persian-modern' })

function shamsiDate(){
  const now = moment()

  const hour = now.format('H')
  const minute = now.format('m')
  const day = now.format('jD') 
  const monthNumber = now.format('jM') 
  const monthName = now.format('jMMMM')

  const date =[monthName ,day, minute , hour]

  return date
}

const toast = useToast();

const router = useRoute();
const productId = router.query.id;


const store = useStore();

const blog = ref(null);

const name = ref();
const email = ref();
const text = ref();

blog.value = store.getters.showBlog(productId);

const contentImg = "./images/product/1/1.jpg"


onMounted(()=>{
    toast.info("محتوای این صفحه به صورت داینامیک و بر اساس id نمایش داده میشود ")

    const newLog = {
    title:blog.value.title,
    type:['بازدید','view'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)
})


</script>

<style lang="scss" scoped>
.product{
    &__imageCon{
        img{width: 100vw;}
    }

    &__description{

        h2{
            text-align: justify;
            font-weight: bolder;
            margin: 0;
            padding-bottom: 0.7rem;
        }
    }


    .product__category{
        .card__category{
            display: flex; align-items: center; height: 100%;

            img{
                width: 24px;
                height: 25px;
                border-radius:1rem ;
                margin: 0 0.2rem;
            }
        }

        .card__star{
            color: #4C40AA;
        }
    }

    
}
</style>