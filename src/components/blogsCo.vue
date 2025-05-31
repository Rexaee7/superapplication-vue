<template>
  <div class="blogs__home">
    <router-link v-for="blog in blogs" :key="blog.id" @click="store.commit('changeTab','blog')" :to="{path:'/blogs',query:{id:blog.id}}" class="blog__card">
        <div class="img" :style="{ backgroundImage: 'url('+blog.image+')' }"></div>
        <div>
            <h3>{{blog.title}}</h3>
            <p>
                <span>
                    <b v-farsi-number="blog.date[1]"></b> 
                    <b v-farsi-number="blog.date[0]"></b>
                    | <b v-farsi-number="blog.date[3]"></b> :
                    <b v-farsi-number="blog.date[2]"></b> 
                </span>
                <span>
                    <b>  نویسنده:  </b>
                    {{blog.author[0]}}
                </span>
            </p>
        </div>
    </router-link>
</div>
</template>

<script setup>
import {useStore} from "vuex"
import {computed} from "vue"

const store = useStore()

const blogs = computed(()=> store.state.blogs.blogs)
</script>

<style>

</style>