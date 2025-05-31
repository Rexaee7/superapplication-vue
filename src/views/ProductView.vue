<template>
<div class="product-header">
    <router-link class="header" :to="{path:'/search',query:{cat:'all', brand:'',priceFrom:0 ,priceTo : 0 }}"  @click="store.commit('changeTab' , 'search')">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
    </router-link>
    <div>
        <router-link to="/cart" @click="store.commit('changeTab' , 'cart')" >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
            </svg>
        </router-link>
        <span v-farsi-number="count"></span>
    </div>
</div>
  <div class="product">
    <div class="product__body">
        <div class="product__imageCon">
            <img :src="product.image" alt="">
        </div>
        <div class="product__description">
            <h1>{{product.title}}</h1>
            <hr>
            <div class="product__category">
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
            <div class="product__caption mx-5" v-html="content.html"></div>
        </div>
        <div class="product__cart">
            <div class="cart__body">
                <h1>ثبت سفارش</h1>
                <div class="cart__caption">
                    <div class="cart__discount">
                        <span><b v-farsi-number="product.discount"></b> % </span>
                    </div>
                    <div class="cart__price">
                        <h4 v-farsi-number="product.price"></h4>
                        <span><h2 v-farsi-number="product.finalPrice"></h2> تومان</span>
                    </div>
                </div>
                <div class="cart__btn">
                    <button @click="addToCarts(product)">
                        <span v-if="!isLoading">افزودن به سبد</span>
                        <span v-else>
                            <svg viewBox="0 0 80 25" width="80" height="15" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="#fff">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="fill"
                values="#fff;#fff;#fff;#fff"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0s"/>
            </circle>

            <circle cx="45" cy="15" r="8" fill="#fff">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="fill"
                values="#fff;#fff;#fff;#fff"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.4s"/>
            </circle>

            <circle cx="75" cy="15" r="8" fill="#fff">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="fill"
                values="#fff;#fff;#fff;#fff"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.8s"/>
            </circle>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="comments">
    <div class="comments__show">

        <h1>نظرات کاربران</h1>

        <div v-for="comment in product.comments" :key="comment.id" class="comment">
            <div class="comment__header">
                <h3>{{comment.title}}</h3>
                <h4>{{comment.email}}</h4>
            </div>
            <div class="comment__text">
                {{comment.text}}
            </div>
        </div>

    </div>
    <div class="comments__form">
        <Form @submit="addComment(product.id)" class="comments__form--body" action="">
            <h1>ثبت دیدگاه</h1>
            <Field :rules="checkName" name="name" v-model="name" type="text" placeholder="نام خود را وارد کنید" />
            <ErrorMessage class="ErrorMessage" name="name"></ErrorMessage> 
            <Field :rules="checkEmail" name="email" v-model="email" type="text" placeholder="ایمیل خود را وارد کنید" />
            <ErrorMessage class="ErrorMessage" name="email"></ErrorMessage> 
            <Field :rules="checkText" name="text" v-model="text" as="textarea" placeholder="متن دیدگاه خود را وارد کنید"></Field>
            <ErrorMessage class="ErrorMessage" name="text"></ErrorMessage> 
            <button>افزودن دیدگاه</button>
        </Form>
    </div>
  </div>
</template>

<script setup>
import { ref , computed , onMounted} from "vue";
import {useRoute } from "vue-router";
import {useStore} from "vuex";
import { Form, Field , ErrorMessage  } from 'vee-validate';
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

const router = useRoute();
const productId = router.query.id;

const toast = useToast();

const store = useStore();

const product = ref(null);
const content = ref(null);

const name = ref();
const email = ref();
const text = ref();

product.value = store.getters.showProduct(productId);
content.value = store.getters.showContent(productId);

function addComment(id){
    const comment = {
        id : id ,
        title : name.value,
        email : email.value,
        text : text.value,
    };


    store.commit("addComment" , comment)
    if(toast.success("نظر شما با موفقیت ثبت شد!")){
        name.value = null
        email.value = ''
        text.value = ''
    }
    
    store.commit('addToPoint' , 'comment')

    const newLog = {
    title:"کامنت برای  " + product.value.title,
    type:['کامنت','comment'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)
}


function checkEmail(email){
    if(!email){
        return "ایمیل را وارد کنید"
    }
     const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(email)) {
        return 'ایمیل نامعتبر می باشد';
    }

     return true;
}

function checkName(name){
    if(!name){
        return "نام را وارد کنید"
    }
    

     return true;
}

function checkText(text){
    if(!text){
        return "متن را وارد کنید"
    }
     
    if (text.length < 5) {
        return 'متن باید بیشتر از 5 کاراکتر باشد';
    }

     return true;
}

var isLoading = ref(false)
const isCartExist = ref(false);

function addToCarts(p){
    isLoading.value = true;

     const cart={
        id: p.id,
        image: p.image,
        title: p.title,
        price: p.price,
        finalPrice: p.finalPrice,
        count: 1,
    } 

    setTimeout(()=>{
        isLoading.value = false

        var result = store.getters.addToCart(cart);

        if(result == "exist"){
            toast.success("محصول در سبد خرید موجود است .  به تعداد آن افزوده شد")
        }else if(result == "done"){
            toast.success("محصول با موفقیت به سبد خرید شما افزوده شد")
        }

        store.commit('addToPoint' , 'cart')
    },1000)


    const newLog = {
    title:"افزودن : " + product.value.title,
    type:[' سبد خرید','add-cart'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)
}

const count = computed(()=>
store.getters.countCarts)

onMounted(()=>{
    toast.info("محتوای این صفحه به صورت داینامیک و بر اساس id نمایش داده میشود ")


    const newLog = {
    title:product.value.title,
    type:['بازدید','view'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)
})


</script>

