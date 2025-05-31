import { createRouter, createWebHashHistory  } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ProductView from "../views/ProductView.vue";
import CartView from "../views/CartView.vue";
import WellcomeView from "../views/WellcomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
    meta: { requiresAuth: true }
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    meta: { requiresAuth: true }
  },
  {
    path: "/cart",
    name: "cart",
    component : CartView,
    meta: { requiresAuth: true}
  },
  {
    path: "/wellcome",
    name: "wellcome",
    component : WellcomeView,
    meta: { requiresAuth: false, hideLayout: true }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router;
