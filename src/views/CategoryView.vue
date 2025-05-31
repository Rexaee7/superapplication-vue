<template>
<search-popup></search-popup>
  <div>
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
          <router-link class="showAll" :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی موبایل‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'sam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                سامسونگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span :to="{path:'/search',query:{cat:'mobile', brand:'sam',priceFrom:0 ,priceTo : 0 }}">
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'dar',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                داریا
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'xia',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                شیائومی
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'nok',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
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
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:1 ,priceTo : 10000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="10"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:10000000 ,priceTo : 15000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="10"></span> تا  <span v-farsi-number="15"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile', brand:'',priceFrom:15000000 ,priceTo : 20000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="15"></span> تا  <span v-farsi-number="20"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'mobile',priceFrom:20000000 ,priceTo : 1000000000 }}" class="filter__child">
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
          <router-link class="showAll" :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی تبلت‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'sam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                سامسونگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'mir',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                مایکروسافت
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'xia',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
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
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:1 ,priceTo : 10000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="10"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:10000000 ,priceTo : 20000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="10"></span> تا  <span v-farsi-number="20"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet', brand:'',priceFrom:20000000 ,priceTo : 30000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="20"></span> تا  <span v-farsi-number="30"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'tablet',priceFrom:30000000 ,priceTo : 1000000000 }}" class="filter__child">
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
        <router-link class="showAll" :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی لپ‌تاپ‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'len',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                لنووا
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'del',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                دل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'hp',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اچ‌پی
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'mir',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                مایکروسافت
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'aus',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
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
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:1 ,priceTo : 15000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="15"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:15000000 ,priceTo : 25000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="15"></span> تا  <span v-farsi-number="25"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop', brand:'',priceFrom:25000000 ,priceTo : 35000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="25"></span> تا  <span v-farsi-number="35"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'laptop',priceFrom:35000000 ,priceTo : 1000000000 }}" class="filter__child">
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
          <router-link class="showAll" :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:0 ,priceTo : 0 }}">مشاهده همه‌ی هدفون‌ها</router-link>
          <h4>برندها</h4>
          <div class="filter__item">
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'ank',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                انکر
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'rem',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                ریمیکس
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'app',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                اپل
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'lux',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                لوکسار
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'gam',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
              <span>
                گیمینگ
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'qcy',priceFrom:0 ,priceTo : 0 }}" class="filter__child">
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
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1 ,priceTo : 1000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="0"></span> تا  <span v-farsi-number="1"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1000000 ,priceTo : 1500000 }}" class="filter__child">
              <span>
                <span v-farsi-number="1"></span> تا  <span v-farsi-number="1.5"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone', brand:'',priceFrom:1500000 ,priceTo : 2000000 }}" class="filter__child">
              <span>
                <span v-farsi-number="1.5"></span> تا  <span v-farsi-number="2"></span>  میلیون تومان
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
              </span>
            </router-link>
            <router-link :to="{path:'/search',query:{cat:'headphone',priceFrom:2000000 ,priceTo : 1000000000 }}" class="filter__child">
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
</template>

<script setup>
import {ref} from "vue"
import searchPopup from "../components/searchPopup.vue"
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const category = ref("all")

onMounted(()=>{
  if(route.query.cat)
    category.value = route.query.cat
})


</script>

<style lang="scss" scoped>
.category-content{
    position: inherit !important;
    max-width: 100% !important;
    height: 100vh !important;

    .items{
        justify-content: flex-start !important;
        background-color: #eee;

        span{
            display: flex;
            flex-direction: column;
            padding: 1rem 0.7rem !important;

            h4{
                margin: 0;
                padding: 0.2rem;
            }
        }
    }

    .filters{
        flex-direction: column !important;
        background-color: #fff;

        .filter{
            width: 100%;
            border-left: none;

            .showAll{
              color: #aa4069;
              text-decoration: underline;
            }
        }

        div:not(:last-child){
            border-bottom: 1px solid #aa4069;
        }
    }
}


</style>