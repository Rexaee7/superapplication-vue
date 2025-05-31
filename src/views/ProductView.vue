<template>
<div class="product-header">
    <router-link class="header" :to="{path:'/category',query:{cat:'mobile'}}">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
    </router-link>
    <div>
        <router-link to="/cart" >
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
            <div class="product__caption mx-5">
                    <h3>جدول مشخصات</h3>
                    <table>
                        <tr>
                            <th class="">ریجن</th>
                            <td class="">چین </td>
                        </tr>
                        <tr>
                            <th class="">نوع گوشی موبایل</th>
                            <td class="">سیستم عامل iOS </td>
                        </tr>
                        <tr>
                            <th class="">دسته &zwnj;بندی</th>
                            <td class="">پرچم&zwnj;دار </td>
                        </tr>
                        <tr>
                            <th class="">مدل</th>
                            <td class="">iPhone 16 CH </td>
                        </tr>
                        <tr>
                            <th class="">زمان معرفی</th>
                            <td class="">9 سپتامبر 2024 </td>
                        </tr>
                    </table>
                    <h3>مقدمه</h3>
                    <p> آیفون ۱۶ به عنوان یکی از جدیدترین مدل‌های گوشی‌های هوشمند اپل، به بازار معرفی شده و توجه زیادی را به خود جلب کرده است. این گوشی با هدف ارائه تجربه‌ای کاربرپسند و قابلیت‌های متعدد، به‌روزترین فناوری‌ها را در یک طراحی زیبا و مدرن گرد هم آورده است. از زمان معرفی اولین گوشی آیفون، اپل همواره به بهبود تجربه کاربری و کیفیت محصولات خود توجه ویژه‌ای داشته و آیفون 16 نیز از این قاعده مستثنی نیست. در این مقاله، به بررسی ویژگی‌ها، مشخصات فنی و قابلیت‌های  آیفون ۱۶ خواهیم پرداخت و ویژگی‌های مختلف این گوشی را مورد بررسی قرار خواهیم داد.</p>
                    <img :src="contentImg" alt="">
                    <h3>طراحی و ساخت</h3>
                    <p>آیفون ۱۶ با طراحی زیبا و ظریف خود، به عنوان یکی از جذاب‌ترین گوشی‌های بازار شناخته می‌شود. بدنه این دستگاه از جنس شیشه مقاوم و فریم آلومینیومی ساخته شده که به آن استحکام و زیبایی خاصی می‌بخشد. ابعاد این گوشی 147.6*71.6*7.8 میلی‌متر و وزن آن حدود 170 گرم است که آن را به یک دستگاه سبک و خوش‌دست تبدیل کرده است.

اپل برای آیفون ۱۶ از رنگ‌های متنوعی از جمله آبی، قرمز و نقره‌ای استفاده کرده است که به کاربران این امکان را می‌دهد تا بر اساس سلیقه خود انتخاب کنند. طراحی گوشی هم به گونه‌ای انجام شده که کاربر می‌تواند به راحتی آن را در دست بگیرد و از آن استفاده کند. همچنین، آیفون ۱۶ دارای استاندارد IP68 است که به معنای مقاومت در برابر آب تا عمق ۶ متر و همینطور گرد و غبار است. این ویژگی به کاربران این اطمینان را می‌دهد که می‌توانند از گوشی خود در شرایط مختلف آب و هوایی استفاده کنند. به طور کلی، طراحی و ساخت آیفون ۱۶ به گونه‌ای است که هم از لحاظ زیبایی و هم از نظر عملکرد، رضایت کاربران را جلب می‌کند.</p>

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
import { ref , computed } from "vue";
import {useRoute } from "vue-router";
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


    store.commit("addComment" , comment)
    if(toast.success("نظر شما با موفقیت ثبت شد!")){
        name.value = null
        email.value = ''
        text.value = ''
    }
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

const count = computed(()=>
store.getters.countCarts)

const contentImg = "./images/product/1/1.jpg"

</script>

