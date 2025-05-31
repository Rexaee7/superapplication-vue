<template>
<router-link class="search-header" :to="{path:'/category',query:{cat:search.cat}}">
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
  </svg>
</router-link>
<div class="sort">
  <span class="sort-title">
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-sort-down-alt" viewBox="0 0 16 16">
      <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"></path>
    </svg>
    <span><b>  مرتب سازی :  </b></span>
  </span>
  <span class="filter" :class="{ 'active': activeTab === 'expensive' }" @click="toggleTab('expensive')">
    <svg v-show="activeTab === 'expensive'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    <span><b> گران‌ترین </b></span>
  </span>
  <span class="filter" :class="{ 'active': activeTab === 'cheap' }" @click="toggleTab('cheap')">
    <svg v-show="activeTab === 'cheap'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    <span><b> ارزان‌ترین </b></span>
  </span>
  <span class="filter" :class="{ 'active': activeTab === 'discount' }" @click="toggleTab('discount')">
    <svg v-show="activeTab === 'discount'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    <span><b> پرتخفیف </b></span>
  </span>
  <span class="filter" :class="{ 'active': activeTab === 'mostsell' }" @click="toggleTab('mostsell')">
    <svg v-show="activeTab === 'mostsell'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    <span><b> پرفروش‌ترین </b></span>
  </span>
  <span class="filter" :class="{ 'active': activeTab === 'moststar' }" @click="toggleTab('moststar')">
    <svg v-show="activeTab === 'moststar'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
    </svg>
    <span><b> محبوب‌ترین </b></span>
  </span>
  
  </div>

  
<!--card section-->
<div ref="cards" class="search__cards">
  {{search.filter}}
  <card-co :search-query="search.q" :filter="search.cat" :sort="search.sort" :brand="search.brand" :priceFrom="search.priceFrom" :priceTo="search.priceTo" ></card-co>
</div>
      

</template>

<script setup>
import cardCo from "../components/cardCo.vue"
import {ref , onMounted} from "vue"
import {useStore} from "vuex"
import {useRoute} from "vue-router"

const store = useStore();

const router = useRoute();

var search = ref({
  cat:"",
  brand:"",
  priceTo:0,
  priceFrom:0,
  q:"",
  sort:"",
});

const activeTab = ref('')


function toggleTab(tabName) {
  activeTab.value = activeTab.value === tabName ? '' : tabName
  search.value.sort = tabName === activeTab.value ? tabName : '' 
}


onMounted(()=>{
    search.value.q = router.query.q;
    search.value.cat = router.query.cat;
    search.value.brand = router.query.brand;
    search.value.priceTo = router.query.priceTo;
    search.value.priceFrom = router.query.priceFrom;
    search.value.sort = router.query.sort;
})


  

</script>

<style scoped lang="scss">
.sort{
  padding: 0.5rem !important;
  overflow-x:auto ;
  white-space: nowrap;

  &::-webkit-scrollbar{
    height: 0px !important;
  }

  .filter{
    border: 1px solid #eee;
    border-radius: 3rem;
    margin-left: 0.4rem ;
    padding: 0.4rem 0.8rem ;
     display: flex;
    align-items: center;
    cursor: pointer;

    svg{
      margin: 0 0.3rem;
    }

    
  }

  .active{
      background-color: #eee !important;
    }

  .sort-title{
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem ;
  }
}
</style>
