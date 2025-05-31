<template>
<div v-if="showModal" >
    <div class="modal-content">
      <input  v-model="q" @keyup.enter="searchQuery()" type="text">
      <div>
        <h3>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </span> آخرین جست و جوی های شما</h3>
        <span>
            <svg @click="deleteAllHistory()" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        </span>
      </div>
      <div @click="close()">
        <searchhis-co></searchhis-co>
      </div>
</div>
</div>

<div v-if="showCategory" >
     <div class="category-content">
      <div class="items">
          <span :class="{'active' : category=='mobile' || category=='all'}" @click="category='mobile'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <h4>موبایل</h4>
          </span>  
          <span :class="{'active' : category=='tablet'}" @click="category='tablet'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tablet" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            <h4>تبلت</h4>
          </span>
          <span :class="{'active' : category=='laptop'}" @click="category='laptop'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
            </svg>
            <h4>لپ‌تاپ</h4>
          </span>
          <span :class="{'active' : category=='headphone'}" @click="category='headphone'">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-headphones" viewBox="0 0 16 16">
                <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
            </svg>
            <h4>هدفون</h4>
          </span>
          
      </div> 

      <div v-show="category == 'mobile' || category=='all'" class="filters">
        <div class="filter">
          <router-link class="showAll" @click="close()" :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی موبایل‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'sam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                سامسونگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span :to="{path:'/search',query:{cat:'mobile', brand:'sam',priceFrom:0 ,priceTo : 0 }}">
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'dar',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                داریا
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'xia',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                شیائومی
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'nok',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                نوکیا
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>

        <div class="filter">
          <h4>قیمت‌ها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:1 ,priceTo : 10000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="10"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:10000000 ,priceTo : 15000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="10"></span> تا  <span v-farsi-number="15"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:15000000 ,priceTo : 20000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="15"></span> تا  <span v-farsi-number="20"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'mobile',priceFrom:20000000 ,priceTo : 1000000000 }}" class="filter__child">
              <span>
                بیش از  <span v-farsi-number="20"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>  
        
      </div>

      <div v-show="category == 'tablet'" class="filters">
        <div class="filter">
          <router-link class="showAll" @click="close()"  :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی تبلت‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'sam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                سامسونگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'mir',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                مایکروسافت
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'xia',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                شیائومی
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>

        <div class="filter">
          <h4>قیمت‌ها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:1 ,priceTo : 10000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="10"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:10000000 ,priceTo : 20000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="10"></span> تا  <span v-farsi-number="20"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:20000000 ,priceTo : 30000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="20"></span> تا  <span v-farsi-number="30"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'tablet',priceFrom:30000000 ,priceTo : 1000000000 }}" class="filter__child">
              <span>
                بیش از  <span v-farsi-number="30"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>  
        
      </div>

      <div v-show="category == 'laptop'" class="filters">
        <div class="filter">
        <router-link class="showAll" @click="close()"  :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی لپ‌تاپ‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'len',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                لنووا
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'del',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                دل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'hp',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اچ‌پی
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'mir',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                مایکروسافت
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'aus',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                ایسوس
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>

        <div class="filter">
          <h4>قیمت‌ها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:1 ,priceTo : 15000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="15"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:15000000 ,priceTo : 25000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="15"></span> تا  <span v-farsi-number="25"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:25000000 ,priceTo : 35000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="25"></span> تا  <span v-farsi-number="35"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'laptop',priceFrom:35000000 ,priceTo : 1000000000 }}" class="filter__child">
              <span>
                بیش از  <span v-farsi-number="35"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>  
        
      </div>

      <div v-show="category == 'headphone'" class="filters">
        <div class="filter">
          <router-link class="showAll" @click="close()"  :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی هدفون‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'ank',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                انکر
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'rem',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                ریمیکس
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'lux',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                لوکسار
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'gam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                گیمینگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'qcy',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                کیوسی‌وای
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>

        <div class="filter">
          <h4>قیمت‌ها</h4>
          <div class="filter__item">
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1 ,priceTo : 1000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="1"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1000000 ,priceTo : 1500000 }}" class="filter__child">
              <span>
                <span v-farsi-number="1"></span> تا  <span v-farsi-number="1.5"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1500000 ,priceTo : 2000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="1.5"></span> تا  <span v-farsi-number="2"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link @click="close" :to="{path:'/search',query:{cat:'headphone',priceFrom:2000000 ,priceTo : 1000000000 }}" class="filter__child">
              <span>
                بیش از  <span v-farsi-number="2"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
          </div>
        </div>  
        
      </div>
    </div>
</div>
  <header class="nav" >
    <div class="nav__body">
      <!--right side (title and search)-->
      <div class="nav__title">
        <router-link to="/" class="nav__header" @click="close">فروشگاه</router-link>
      </div>
      <!--left side (cart icon)-->
      <div class="nav__cart">
        <span @click="showModals()" class="nav__search">
            <span class="nav__svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <div>دنبال چی میگردی؟</div>
        </span>
       
        <span class="nav__basket" >
          <router-link to="/cart" @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <span v-farsi-number="count"></span>
          </router-link>
          <a @click="checkLogin();close()">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </a>
          
        </span>
        
      </div>

    </div>
    
     <!--bottom of header (list of category)-->
      <div  class="categories">

          <span class="categories__item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
              <h4 @click="showCategorys()" class="nav-link " href="#">دسته‌بندی‌محصولات</h4>
              <b> | </b>
               <span class="categories__item list">
            <router-link to="/#magic">
              <span class="categories__item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
                    <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z"/>
                  </svg>
                  <span class="nav-link " >شگفت‌انگیزها </span>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{q:'',cat:'all', brand:'',priceFrom:0 ,priceTo : 0 ,sort:'discount'}}">
              <span class="categories__item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                  </svg>
                  <span class="nav-link " href="#">پر تخفیف‌ها</span>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{q:'',cat:'all', brand:'',priceFrom:0 ,priceTo : 0 ,sort:'moststar'}}">
              <span class="categories__item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question" viewBox="0 0 16 16">
                    <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.7 1.7 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745"/>
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
                    <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
                  </svg>
                  <span class="nav-link ">محبوب‌ترین‌ها</span>
              </span>
            </router-link>
          </span>
          </span>

         

          <router-link to="/blog" class="categories__item">
            <span class="blog">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z"/>
              </svg>
              <h4>دیدن بلاگ‌ها</h4>
            </span>
          </router-link>

      </div>

 </header>
 
 <div v-show="showOverlay" class="modal-overlay" @click="close"></div>

<div class="mobileNav">
  <router-link exact-active-class="active" to="/" @click="tabChange('home')" :class="{'active': tabActive=='home'}" class="tab">

    <span>
      <svg v-show="tabActive == 'home'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
        <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
      </svg>
      <svg v-show="tabActive != 'home'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
      </svg>
    </span>
    <span>
      خانه
    </span>

  </router-link>

  <router-link exact-active-class="active" :to="{path:'/category',query:{cat:'mobile'}}" @click="tabChange('category')" :class="{'active': tabActive=='category'}" class="tab">

    <span>
        <svg v-show="tabActive == 'category'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      <svg v-show="tabActive != 'category'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
    </span>
    <span>
      جست‌وجو
    </span>

  </router-link>

  <router-link exact-active-class="active" to="/cart" @click="tabChange('cart')" :class="{'active': tabActive=='cart'}" class="tab">

    <span id="cart__span">
      <svg v-show="tabActive == 'cart'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
        <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/>
      </svg>
      <svg v-show="tabActive != 'cart'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"/>
      </svg>
      <span v-farsi-number="count"></span>
    </span>
    <span>
      سبد خرید
    </span>

  </router-link>

  <router-link exact-active-class="active" to="/blog" @click="tabChange('blog')" :class="{'active': tabActive=='blog'}" class="tab">

    <span>
      <svg v-show="tabActive == 'blog'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-postcard-heart-fill" viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm6 2.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0m3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2 5.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
      </svg>
      <svg v-show="tabActive != 'blog'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-postcard-heart" viewBox="0 0 16 16">
        <path d="M8 4.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm3.5.878c1.482-1.42 4.795 1.392 0 4.622-4.795-3.23-1.482-6.043 0-4.622M2.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
        <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
      </svg>
    </span>
    <span>
      بلاگ
    </span>

  </router-link>

  <span exact-active-class="active" @click="checkLogin()" :class="{'active': tabActive=='profile'}" class="tab">

    <span>
      <svg v-show="tabActive == 'login'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
      </svg>
      <svg v-show="tabActive != 'login'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
      </svg>
    </span>
    <span>
      پروفایل
    </span>

  </span>

</div>

</template>

<script setup>
import {useStore} from "vuex"
import { computed , ref , watch , nextTick } from 'vue'
import {useRouter} from 'vue-router'
import { useToast } from "vue-toastification";
import searchhisCo from './searchhisCo.vue'
import brandCo from './brandCo.vue'

const router = useRouter()

const toast = useToast()

const showModal = ref(false)
const showCategory = ref(false)
const showOverlay = ref(false)
const searchInput = ref(null)
const tabActive = computed(() => store.state.tab)

const category = ref("mobile")

function showCategorys(){
  showModal.value = false
  showCategory.value = true
  showOverlay.value = true
  document.body.style.overflowY = 'hidden' ;
}

function tabChange(newTab){
  store.commit('changeTab' , newTab)
}

function showModals(){
  showModal.value = true
  showCategory.value = false
  showOverlay.value = true
  searchInput.value?.focus()
  document.body.style.overflowY = 'hidden' ;
}

watch(showModal, async (opened) =>
  {
    if(opened)
      await nextTick()

    searchInput.value?.focus()
  }
)

function close() {
  showModal.value = false
  showCategory.value = false
  showOverlay.value = false
  document.body.style.overflowY = 'auto' ;
}

function activeCategory(cat){
  category.value = cat;
}

const store = useStore();

const count = computed(()=>
store.getters.countCarts)

function checkLogin(){
  const check = store.state.isUserLogin

  if(check){
    router.push('/panel')
  }else{
    router.push('/login')
  }

  tabChange('login')
}

const q = ref(null)

function searchQuery(){
    router.push({path:'/search',query:{q:q.value,cat:'all', brand:'',priceFrom:0 ,priceTo : 0 }});
    store.getters.addToSearchHistory(q.value)
    close()
  }

  function deleteAllHistory(){
    store.commit('deleteAllHistory');
    toast.error("تاریخچه جستوی‌ شما با موفقیت حذف شد!")
  }
</script>
