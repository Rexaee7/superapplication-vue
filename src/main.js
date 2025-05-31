import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import farsiNumber from './vFarsiNumber.js'
import './assets/css/main.scss';
import 'vue-final-modal/style.css'
import createVfm  from 'vue-final-modal'


createApp(App).directive('farsi-number', farsiNumber).use(store).use(router).use(Toast).use(createVfm).mount("#app");
