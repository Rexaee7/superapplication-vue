import { createRouter, createWebHistory  } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ProductView from "../views/ProductView.vue";
import CategoryView from "../views/CategoryView.vue";
import LoginView from "../views/LoginView.vue";
import PanelView from "../views/PanelView.vue";
import BlogView from "../views/BlogView.vue";
import CartView from "../views/CartView.vue";
import WellcomeView from "../views/WellcomeView.vue";
import blogsView from "../views/blogsView.vue";
import ManageBlogView from "../views/ManageBlogView.vue";
import ManageProductView from "../views/ManageProductView.vue";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from "../store/index"


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
    path: "/category",
    name: "category",
    component: CategoryView,
    meta: { requiresAuth: true }
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogView,
    meta: { requiresAuth: true }
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    meta: { requiresAuth: false, hideLayout: true }
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
  },
  {
    path: "/blogs",
    name: "blogs",
    component : blogsView,
    meta: { requiresAuth: false, hideLayout: true }
  },
  {
    path: "/login",
    name: "login",
    component : LoginView,
    meta: { requiresAuth: false, hideLayout: true }
  },
  {
    path: "/panel",
    name: "panel",
    component : PanelView,
    meta: { requiresAuth: true }
  },
  {
    path: "/blogmanage",
    name: "blogmanage",
    component : ManageBlogView,
    meta: { requiresAuth: true }
  },
  {
    path: "/productmanage",
    name: "productmanage",
    component : ManageProductView,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const headerOffset = 150;
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
          resolve();
        }, 300);
      });
    }
    return { top: 0 };
  },
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  NProgress.start()
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done()
    store.commit('setLoading', false)
  }, 1000)
})

export default router