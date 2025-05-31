<template>
 <slider-co></slider-co>


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

  <card-co :search-query="laptop"></card-co>

</div>



<!--title of a section-->
<div id="mobiles" class="title">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone title__svg" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
        <h1 class="title__header" href="#"> موبایل‌ها </h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-phone title__svg" viewBox="0 0 16 16">
            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
        </svg>
</div>

<!--card section-->
<div class="cards">

  <card-co :search-query="mobile"></card-co>

</div>
</template>

<script setup>
import sliderCo from "../components/sliderCo.vue"
import cardCo from "../components/cardCo.vue"

const laptop = "لپ تاپ"
const mobile = "موبایل"

</script>
