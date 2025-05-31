<template>
<VueFinalModal
      v-model="options.modelValue"
      :teleport-to="options.teleportTo"
      :display-directive="options.displayDirective"
      :hide-overlay="options.hideOverlay"
      :overlay-transition="options.overlayTransition"
      :content-transition="options.contentTransition"
      :click-to-close="options.clickToClose"
      :esc-to-close="options.escToClose"
      :background="options.background"
      :lock-scroll="options.lockScroll"
      :reserve-scroll-bar-gap="options.reserveScrollBarGap"
      :swipe-to-close="options.swipeToClose"
      class="flex justify-center items-center edit-product"
      content-class="search__modal vfm--inset"
    >
      <div>
    <div class="search__modal-content ">
        <div class="">
            <span @click="options.modelValue = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </span>
            
        </div>
        <a class="remove-product" @click="removeProduct(newProduct.id, newProduct.title)">حذف محصول</a>
        <form @submit.prevent="editProduct()">
            <div class="input-div">
                <label for="title">عنوان</label>
                <input type="text" v-model="newProduct.title">
            </div>
            <div class="input-div">
                <label for="title">قیمت</label>
                <input type="number" v-model="newProduct.finalPrice">
            </div>
            <div class="input-div">
                <label for="title">ستاره</label>
                <input type="number" step="any" v-model="newProduct.stars">
            </div>
            <div class="input-div">
                <label for="title">دسته‌بندی</label>
                <input type="text" v-model="newProduct.category">
            </div>
            <div class="input-div">
                <label for="title">تعداد فروش</label>
                <input type="number" v-model="newProduct.sellCount">
            </div>
            <div class="input-div">
                <button>اعمال تغییرات</button>
            </div>
        </form>
</div>
</div>
</VueFinalModal>

<ModalsContainer />
<router-link class="header" to="/panel">
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
  </svg>
</router-link>
<!--card section-->
<div ref="cards" class="search__cards">
  <div @click="openModalByProduct(product)" 
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
   </div>
</div>
      

</template>

<script setup>
import cardCo from "../components/cardCo.vue"
import {ref , computed , onMounted} from "vue"
import {useStore} from "vuex"
import { useToast } from "vue-toastification";
import { ModalsContainer, VueFinalModal } from 'vue-final-modal'

const store = useStore();

const toast = useToast();

const newProduct = ref({
    id: "",
    title:"",
    price: 0,
    discount: 0,
    finalPrice:0,
    stars: 0,
    category: "",
    image: "",
    brand:"",
    comments:[
        {
        id:"",
        title: "",
        email:"",
        text: ""
        }
    ],
    sellCount:0,
})

const products = computed(()=> store.getters.allProduc)
  
onMounted(()=>{
    toast.info("برای ویرایش یا حذف  روی محصول دلخواه کلیک کنید")
})



  const getInitialValues = () => ({
    teleportTo: 'body',
    modelValue: false,
    displayDirective: 'if',
    hideOverlay: false,
    overlayTransition: 'vfm-fade',
    contentTransition: 'vfm-slide-down',
    clickToClose: true,
    escToClose: true,
    background: 'non-interactive',
    lockScroll: true,
    reserveScrollBarGap: true,
    swipeToClose: 'none',
  })

  const options = ref(getInitialValues())

  function reset() {
    options.value = getInitialValues()
  }

  function openModalByProduct(p){
    newProduct.value = {...p}

    options.value.modelValue = true
  }

  function removeProduct(id , title){
    store.getters.removeProduct(id)

    toast.error('(' + title + ') با موفقیت حذف شد')
  }

  function editProduct(){
    options.value.modelValue = false
    store.commit('editProduct' , newProduct.value)
    toast.success("محصول با موفقیت ویراش شد")
  }
</script>

<style scoped lang="scss">
.header{
  background-color: #ffffff;
  padding: 0.4rem 0.7rem !important;
  display: block;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #eee;
}

.remove-product{
    text-decoration: underline;
    color: #aa4069;
    display: block;
    font-size: 1.3em;
    padding: 0.4rem 0.7rem ;
    border-bottom: 1px solid #eee;
}

.input-div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

input{
        border: none;
        border-bottom: 2px solid #4C40AA;
        border-radius: 0.3rem;
        background-color: #eee;
        margin: 0.3rem 0;
        font-family: vazir !important;
        padding: 0.7rem 1rem;
        width: 95%;

        &:focus{
          outline: none;
          border-bottom: 2px solid #aa4069;
        }
      }

      button{
        padding: 0.7rem ;
        border-radius: 0.3rem; border : none;
        margin: 0.3rem 0;
        background-color: #4C40AA;
        font-family: vazir !important;
        color: #fff;
        width: 95%;


        
      }
</style>
