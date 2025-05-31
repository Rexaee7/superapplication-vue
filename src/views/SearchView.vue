<template>
  
<div class="search">
  <h1 class="search__header">جست و جو کنید</h1>
  <div class="search__body">
    <label for="">نام محصول :  </label>
    <input ref="search" class="search__input" type="text">
    <button @click="handleFilter(filterString,search.value)" class="search__button">جست و جو</button>
  </div>
</div>


<div class="sort">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
      <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"></path>
    </svg>
    <h6><b> مرتب سازی   :</b></h6>
    <div class="sort__body">
      <h6 @click="handleFilter('mostsell',search.value)">پر فروش ترین </h6>
      <h6 @click="handleFilter('cheap',search.value)">ارزان ترین </h6>
      <h6 @click="handleFilter('expensive',search.value)">گران ترین </h6>
      <h6 @click="handleFilter('discount',search.value)">تخفیف</h6>
    </div>
  </div>

  
<!--card section-->
<div ref="cards" class="cards">
  <card-co :search-query="filterString" :type="filterOrSearch"></card-co>
</div>
      

</template>

<script setup>
import cardCo from "../components/cardCo.vue"
import {ref} from "vue"
import {useStore} from "vuex"

const store = useStore();

var filterString = ref("all");
var filterOrSearch = ref("");
const search = ref(null);


function handleFilter(newValue , ForS){
  filterString.value = newValue;
  filterOrSearch.value = ForS;
}


  

</script>
