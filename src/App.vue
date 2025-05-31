<template>
  <header-co v-if="!$route.meta.hideLayout"></header-co>
    <loading-co v-if="isLoading" />
    <router-view v-else />
  <footer-co v-if="!$route.meta.hideLayout"></footer-co>
</template>

<script setup>
import headerCo from "./components/headerCo.vue"
import footerCo from "./components/footerCo.vue"

import { computed } from 'vue'
import { useStore } from 'vuex'
import loadingCo from './components/loadingCo.vue'

const store = useStore()

const isLoading = computed(() => store.state.isLoading)
</script>

