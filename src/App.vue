<template>
  <header-co v-if="!$route.meta.hideLayout"></header-co>
    <router-view />
  <footer-co v-if="!$route.meta.hideLayout"></footer-co>
</template>

<script setup>
import headerCo from "./components/headerCo.vue"
import footerCo from "./components/footerCo.vue"
</script>

