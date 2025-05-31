<template>
  <div class="container">
    <div class="main">
      <h2 ref="h2Element">{{ displayedH2 }}</h2>
      <h4 ref="h4Element">{{ displayedH4 }}</h4>
      
      <div class="buttons" :class="{ 'buttons__show': showButtons }">
        <button class="button" @click="showDescription = !showDescription">
          دیدن توضیحات
        </button>
      </div>
      
      <div class="description" v-if="showDescription">
        <!-- Your description items here -->
        <div class="header-container">
          <div>
            <span class="border"></span>
          </div>
          <h2 class="blog-header"><b>بیلد </b> <b> سایت</b></h2>
          <div>
            <span class="border"></span>
          </div>
        </div>
        <div class="conItem">
          <div class="item">
          <div>
            <h3>Vue</h3>
            <p>سایت فروشگاهی که مشاهده میکنید توسط فریم ورک Vue.JS ساخته شده . لازمه بدونید که ورژن 3 و سینتکس Composition Api برای طراحی این سایت به کار رفته اند</p>
          </div>
        </div>
        <div class="item">
          <div>
            <h3>Webpack</h3>
            <p>بیلد پروژه و مدیریت منابع و دپندنسی‌ها هم توسط Webpack صورت گرفته</p>
          </div>
        </div>
        </div>
        
        <div class="header-container">
          <div>
            <span class="border"></span>
          </div>
          <h2 class="blog-header"><b>ظاهر</b> <b> پروژه</b></h2>
          <div>
            <span class="border"></span>
          </div>
        </div>
        <div class="conItem">
        <div class="item">
          <div>
            <h3>Sass</h3>
            <p>از این پیش پردازنده برای استایل دهی کل پروژه استفاده شده . همچنین قواعد BEM در کلاس  گذاری المنت ها رعایت شده. </p>
          </div>
        </div>
        <div class="item">
          <div>
            <h3>Bootstrap</h3>
            <p>از کلاس های آماده و همچنین از svgهای این کتابخانه در سایت به کار رفته.</p>
          </div>
        </div>
        </div>
        <h2>پکیج هایی که در سایت از آنها استفاده شده :</h2>
      <h2>State Management : VueX</h2>
      <h2>Routing : vue-router</h2>
      <h2>Form Validation : vee-validate</h2>
      <h2>Notification : vue-toastification</h2>
      <h2>Slider : vue3-carousel</h2>
      <h2>Jalaali Date : moment-jalaali</h2>
      <h2>Responsive Slider : vue-device-detector</h2>
      <h2>Modals : vue-final-modal</h2>
      <h2>Loading : nprogress</h2>
      </div>
      
      <div v-if="showDescription" class="center">
        <router-link class="button" to="/">بزن بریم سایت رو ببینیم !</router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    const h2Text = "سلام به نمومه سایت فروشگاهی من خوش اومدی ♥ ."
    const h4Text = "قراره خیلی مختصر بهت توضیح بدم این پروژه چجوری ساخته شده."
    
    const displayedH2 = ref('')
    const displayedH4 = ref('')
    const showButtons = ref(false)
    const showDescription = ref(false)
    const intervals = ref([])
    const items = ref(Array(6).fill({}))

    const typeText = (target, fullText, callback) => {
      let i = 0
      const intervalId = setInterval(() => {
        if (i < fullText.length) {
          target.value += fullText[i]
          i++
        } else {
          clearInterval(intervalId)
          if (callback) callback()
        }
      }, 4) 
      
      intervals.value.push(intervalId)
    }

    const initTypingAnimation = () => {
      displayedH2.value = ''
      displayedH4.value = ''
      showButtons.value = false

      
      typeText(displayedH2, h2Text, () => {
        typeText(displayedH4, h4Text, () => {
          showButtons.value = true
        })
      })
    }

    onBeforeUnmount(() => {
      intervals.value.forEach(intervalId => clearInterval(intervalId))
    })

    onMounted(() => {
      initTypingAnimation()
    })

    return {
      displayedH2,
      displayedH4,
      showButtons,
      showDescription,
      items
    }
  }
}
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    width: 0px;
}
.header-container{
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.4rem 0.6rem;

  .blog-header{
  font-family: titr !important;
  color: #6c757d;
  display: flex; align-items: center;
  flex: 2;
  }

  div{
    padding: 0 0.4rem;
    display: flex; align-content: center;
    width: 100%;
    border: none !important;
    flex-wrap: wrap;

    .border{
    height: 1px;
    width: 100%;
    background-color: #6c757d;
    border: none !important;
    }
  }
}
.container{
    background-color: #aa4069;
    direction: rtl;
    padding: 15px 10px;
    font-family: Harmattan, sans-serif;
    display: flex;
    justify-content: center;

    .main{
        width: 60%;
        margin:10px auto;
        padding: 10px;
        background: #fff;
        overflow-y: scroll;
        width: 98% !important;
        border-radius: 1em;
        height: calc(100vh - 30px);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
        scroll-behavior: smooth !important;

        h2 , h4{
            position:relative;
            text-align: center;
            font-family: vazir;
            

            &:after{
                content:"";
                width: 2px;
                height: 100%;
                background: #333;
                position: absolute;
                opacity: 0;
            }
        }
    }
}

.buttons{
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 0.33s, opacity 0.33s linear;
    display: flex;
    justify-content: center;
    margin-bottom:0.3rem ;

    &__show{
        visibility: visible;
        opacity: 1;
        transition-delay: 0s; 
    }

    .button{
        color: #aa4069;
        font-family: vazir;
        background-color: #fff;
        font-size: 1.1em;
        border: 1px solid #aa4069;
        padding: 0.3rem 0.7rem;
        border-radius: 3rem;
        margin: 0 0.3rem ;
    }
}

.description{
    display: block ;
    //grid-template-columns: repeat(2, 1fr);
    text-align: center;
    padding: 0;
    width: 100%;

    .conItem{
      padding:1rem 5rem ;
      text-align: center;
      display: flex;
    }

    div:not(:last-child){
          border-left:1px solid #eee ;
        }

    .item{
        display: flex;
        align-items: center;
        justify-content: start;
        padding: 0 2rem ; 
        width: 100%;
        height: 100%;
        padding: 0.5rem 0.3rem;
        flex: 6;

        div{
          display: flex; align-items: flex-start; flex-direction: column;
          margin: 0 0.3rem;

          h3{
            margin: 0.3rem;
            text-align: right;
          }
        }

        

        svg {
            color: #aa4069;
            font-size: 5em;
            margin: 0 0.8rem;
        }

        h3{
            color: #aa4069;
            font-family: vazir;
            font-size: 2em;
            text-align: start;
        }

        p{
            text-align: justify;
            font-family: vazir;
        }
    }
}

.button{
        color: #aa4069;
        font-family: vazir;
        background-color: #fff;
        font-size: 1.1em;
        border: 1px solid #aa4069;
        padding: 0.3rem 0.7rem;
        border-radius: 3rem;
        margin: 0.3rem 0.3rem ;
}

.center{
    text-align: center;
    padding: 2rem 0;
}


@media only screen and (max-width: 480px) {
    .description{
        grid-template-columns: repeat(1, 1fr);

        .conItem{
          padding:1rem 0.5rem ;
          text-align: center;
          flex-direction: column;
        }

        div:not(:last-child){
          border-left: none;
        }

        .item{
            display: block;
            padding: 0;

            svg{
                display: none;
            }
        }
    }
}
</style>