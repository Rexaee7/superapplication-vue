import { createStore } from "vuex";
import products from "./products";
import carts from "./carts";
import blogs from "./blogs";
import contents from "./contents";

export default createStore({
  state:{
    tab : "home",
    searchHistory:[],
    isLoading:false,
    isUserLogin:false,
    users:[
      {
        username:"user",
        password:"123",
        role:"user"
      },
      {
        username:"admin",
        password:"123",
        role:"admin"
      }
    ],
    isUserAdmin:false,
    userInfo:{
      name:"امیررضا",
      family:"رضائیان",
      phone : "09308480360",
    },
    point : 0,
    logs:[]
  },
  getters:{
    addToSearchHistory: (state) => (search) =>{
      state.searchHistory.push(search);
    },
    loginCheck:(state,mutations) => (user , pass) => {
      const userVar = [...state.users].find(f=> f.username == user && f.password == pass)

      if(!userVar)
        return "!exist"

      if(userVar.role == "admin")
          return "admin"

      return "ok"
    }
  },
  mutations:{
    changeTab(state , newTab){
      state.tab = newTab
  },
  deleteAllHistory(state){
    state.searchHistory = []
  },
  setLoading(state , value){
    state.isLoading = value ;
  },
  changeRoleState(state){
    state.isUserAdmin = !state.isUserAdmin
  },
  changeUserState(state){
    state.isUserLogin = !state.isUserLogin
  },
  changeUserInfo(state , newUserInfo){
    state.userInfo = newUserInfo
    return "done"
  },
  addToPoint(state , type){
    if(type == "cart")
      state.point += 5

    if(type == "comment")
      state.point += 10
  },
  addLogs(state , log){
    state.logs.push(log)
  }
  },
  modules: {
    products,
    carts,
    blogs,
    contents
  },
});
