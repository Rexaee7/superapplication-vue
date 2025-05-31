import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import farsiNumber from './vFarsiNumber.js'

createApp(App).directive('farsi-number', farsiNumber).use(store).use(router).use(Toast).mount("#app");
