<template>
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
            <div class="product__caption" v-html="product.content">
            </div>
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
                        <h2 v-farsi-number="product.finalPrice"> <span>تومان</span></h2>
                    </div>
                </div>
                <div class="cart__btn">
                    <button @click="addToCarts(product)">افزودن به سبد</button>
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
import { ref } from "vue";
import {useRoute} from "vue-router";
import {useStore} from "vuex";
import { Form, Field , ErrorMessage  } from 'vee-validate';
import { useToast } from "vue-toastification";

const router = useRoute();
const productId = router.query.id;

const toast = useToast();

const store = useStore();

const product = ref(null);

const name = ref();
const email = ref();
const text = ref();

product.value = store.getters.showProduct(productId);

function addComment(id){
    const comment = {
        id : id ,
        title : name.value,
        email : email.value,
        text : text.value,
    };

    //console.log(comment);

    store.commit("addComment" , comment)
    toast.success("نظر شما با موفقیت ثبت شد!")
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

function addToCarts(p){
    const cart={
        id: p.id,
        image: p.image,
        title: p.title,
        price: p.price,
        finalPrice: p.finalPrice,
        count: 1,
    } 

    var result = store.getters.addToCart(cart);

    if(result == "exist"){
        toast.success("محصول در سبد خرید موجود است .  به تعداد آن افزوده شد")
    }else if(result == "done"){
        toast.success("محصول با موفقیت به سبد خرید شما افزوده شد")
    }
}

</script>