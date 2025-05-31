import { createStore } from "vuex";
import products from "./products";
import carts from "./carts";

export default createStore({
  state:{
    tab : "home",
    searchHistory:[]
  },
  getters:{
    addToSearchHistory: (state) => (search) =>{
      state.searchHistory.push(search);
    }
  },
  mutations:{
    changeTab(state , newTab){
      state.tab = newTab

  }
  },
  modules: {
    products,
    carts,
  },
});
