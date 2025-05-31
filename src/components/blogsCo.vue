<template>
  <div class="blogs__home">
    <router-link @click="store.commit('changeTab','blog')" to="/blog" class="blog__card">
        <div class="img" :style="{ backgroundImage: 'url('+images[0]+')' }"></div>
        <div>
            <h3>مقایسه گلکسی S25 اولترا با S24 اولترا؛ آیا خرید پرچم‌دار جدید سامسونگ منطقی است؟</h3>
            <p><span>دقایقی پیش</span><span><b>نویسنده:</b> امیررضا رضائیان</span></p>
        </div>
    </router-link>
    <router-link @click="store.commit('changeTab' ,'blog')" to="/blog" class="blog__card">
        <div class="img" :style="{ backgroundImage: 'url('+images[1]+')' }"></div>
        <div>
            <h3>بهترین گوشی موبایل بازار ایران (خرداد ۱۴۰۴)</h3>
            <p><span>دقایقی پیش</span><span><b>نویسنده:</b> امیررضا رضائیان</span></p>
        </div>
    </router-link>
    <router-link @click="store.commit('changeTab' ,'blog')" to="/blog" class="blog__card">
        <div class="img" :style="{ backgroundImage: 'url('+images[2]+')' }"></div>
        <div>
            <h3>بهترین گوشی میان رده با دوربین عالی؛ ۹ محصول با قیمت‌های مختلف</h3>
            <p><span>دقایقی پیش</span><span><b>نویسنده:</b> امیررضا رضائیان</span></p>
        </div>
    </router-link>
    <router-link @click="store.commit('changeTab' ,'blog')" to="/blog" class="blog__card">
    <div class="img" :style="{ backgroundImage: 'url('+images[3]+')' }"></div>
        <div>
            <h3>هرآنچه درباره گوشی آیفون ۱۷ ایر اپل می‌دانیم</h3>
            <p><span>دقایقی پیش</span><span><b>نویسنده:</b> امیررضا رضائیان</span></p>
        </div>
    </router-link>
</div>
</template>

<script setup>
import {useStore} from "vuex"

const store = useStore()

const images = ['./images/blogs/covers/1.jpg' , './images/blogs/covers/2.jpg' , './images/blogs/covers/3.jpg' , './images/blogs/covers/4.jpg'  ]
</script>

<style>

</style>