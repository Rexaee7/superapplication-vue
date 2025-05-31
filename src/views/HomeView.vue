<template>
<router-link class="home-header header" to="/">
  <h1>فروشگاه</h1>
</router-link>
 <slider-co></slider-co>

 <!--brands-->
 <div class="brands">
  <brand-co></brand-co>
 </div>


 <!--special offers-->
 <div id="magic" class="magic">

  <div class="magic__right">
    <span>
      <h2 class="nav-link " href="#">شگفت‌انگیزها </h2>
      <p>مهلت تا فردا!</p>
    </span>
    <svg svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
      <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/>
    </svg>
  </div>

  <div class="magic__left">
    <offer-co></offer-co>
  </div>
  
 </div>

 
<!--blogs-->
<blogs-co></blogs-co>

<!--title of a section-->
<div id="laptops" class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-laptop title__svg" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
        </svg>
        <h1 class="title__header" href="#">لپ تاپ‌ها</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-laptop title__svg" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
        </svg>
</div>

<!--card section-->
<div class="cards">

  <laptopslider-co search-query="" filter="laptop" sort="" brand="" :priceFrom="zero" :priceTo="zero"></laptopslider-co>

</div>



<!--title of a section-->
<div id="mobiles" class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-phone title__svg" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
        <h1 class="title__header" href="#"> موبایل‌ها </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-phone title__svg" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
</div>

<!--card section-->
<div class="cards">

  <mobileslider-co search-query="" filter="mobile" sort="" brand="" :priceFrom="zero" :priceTo="zero"></mobileslider-co>

</div>


<!--title of a section-->
<div id="laptops" class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tablet title__svg" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
        <h1 class="title__header" href="#">تبلت‌ها</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-tablet title__svg" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
</div>

<!--card section-->
<div class="cards">

  <laptopslider-co search-query="" filter="tablet" sort="" brand="" :priceFrom="zero" :priceTo="zero"></laptopslider-co>

</div>



<!--title of a section-->
<div id="mobiles" class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headphones title__svg" viewBox="0 0 16 16">
                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
        </svg>
        <h1 class="title__header" href="#"> هدفون‌ها </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-headphones title__svg" viewBox="0 0 16 16">
                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
        </svg>
</div>

<!--card section-->
<div class="cards">

  <mobileslider-co search-query="" filter="headphone" sort="" brand="" :priceFrom="zero" :priceTo="zero"></mobileslider-co>

</div>
</template>

<script setup>
import sliderCo from "../components/sliderCo.vue"
import cardCo from "../components/cardCo.vue"
import brandCo from "../components/brandCo.vue"
import offerCo from "../components/offerCo.vue"
import laptopsliderCo from "../components/laptopsliderCo.vue"
import mobilesliderCo from "../components/mobilesliderCo.vue"
import blogsCo from "../components/blogsCo.vue"

const zero=0

</script>

