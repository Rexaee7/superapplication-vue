<template>
<div v-if="isLogin" class="panel-container">
  <div class="panel-header">
    <h2 v-if="role">پنل ادمین</h2>
    <h2 v-else>پنل کابران</h2>
    <svg @click="logOut()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
      <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
    </svg>
  </div>
  <div class="panel-userInfo">
    <div v-if="!isLoading">
      <h3>{{userInfo.name}} {{userInfo.family}}</h3>
      <p>{{userInfo.phone}}</p>
    </div>
    <span v-else>
                            <svg viewBox="0 0 80 25" width="80" height="15" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="#4C40AA">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0s"/>
                <animate
                attributeName="fill"
                values="#4C40AA;#4C40AA;#4C40AA;#4C40AA"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0s"/>
            </circle>

            <circle cx="45" cy="15" r="8" fill="#4C40AA">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.4s"/>
                <animate
                attributeName="fill"
                values="#4C40AA;#4C40AA;#4C40AA;#4C40AA"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.4s"/>
            </circle>

            <circle cx="75" cy="15" r="8" fill="#4C40AA">
                <animate
                attributeName="cy"
                values="15;7;15;15"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
                calcMode="spline"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="ry"
                values="8;8;6;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="rx"
                values="8;8;9;8"
                dur="1.6s"
                keyTimes="0;0.3;0.6;1"
                repeatCount="indefinite"
                begin="0.8s"/>
                <animate
                attributeName="fill"
                values="#4C40AA;#4C40AA;#4C40AA;#4C40AA"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.8s"/>
            </circle>
                            </svg>
    </span>
    
    <svg @click="showForm = !showForm" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
    </svg>
  </div>
  <Form @submit="changeUserInfo()" v-if="showForm" class="panel-form">
    <div class="form-row">
      <div class="column">
        <label for="name">نام</label>
        <Field :rules="checkName" v-model="newName" name="name" type="text" />
        <ErrorMessage class="ErrorMessage" name="name"></ErrorMessage>
      </div>
      <div class="column">
        <label for="family">نام‌خانوادگی</label>
        <Field :rules="checkFamily" v-model="newFamily" name="family" type="text" />
        <ErrorMessage class="ErrorMessage" name="family"></ErrorMessage>
      </div>
    </div>
    <div class="form-row">
      <div class="column">
        <label for="phone">شماره‌تماس</label>
        <Field :rules="checkPhone" v-model="newPhone" name="phone" type="text" />
        <ErrorMessage class="ErrorMessage" name="phone"></ErrorMessage>
      </div>
      <div class="column">
        <label for="">نقش</label>
        <span class="roleSpan" v-if="role">ادمین</span>
        <span class="roleSpan" v-else>کاربر</span>
      </div>
    </div>

    <button>ثبت تغییرات</button>
  </Form>
  <h3 class="admin-panel" v-if="role">
    <router-link to="/productmanage" class="filter__child">
      <span>
                مدیریت محصولات
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      </span>
    </router-link>
    <a  class="filter__child dark">
      <span>
          مدیریت بلاگ‌ها
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
      </span>
    </a>
  </h3>
  <div v-else>
    <div class="user-point">
      <div class="point-body">
        <h1>امتیاز شما :</h1>
        <div>
          <span v-farsi-number="store.state.point"></span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-patch-check" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
          </svg>
        </div>
      </div>
      <p>به ازای هر محصول در سبد خرید : <span v-farsi-number="5"></span>امتیاز</p>
      <p>به ازای هر کامنت برای محصولات: <span v-farsi-number="10"></span>امتیاز</p>
    </div>

    <div class="user-log">
      <h3>تاریخچه فعالیت‌ها</h3>
      <log-co></log-co>
    </div>
  </div>
</div>

<div class="isntLogin" v-else>
  <h3>ابتدا وارد حساب کاربری خود شوید!</h3>
  <router-link to="/login">رفتن به صفحه لاگین</router-link>
</div>
</template>

<script setup>
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import {ref , onMounted , computed} from "vue"
import { Form, Field , ErrorMessage  } from 'vee-validate';
import logCo from "../components/logCo.vue"
import moment from 'moment-jalaali'

moment.loadPersian({ dialect: 'persian-modern' })

function shamsiDate(){
  const now = moment()

  const hour = now.format('H')
  const minute = now.format('m')
  const day = now.format('jD') 
  const monthNumber = now.format('jM') 
  const monthName = now.format('jMMMM')

  const date =[monthName ,day, minute , hour]

  return date
}

const store = useStore()
const router = useRouter()

const userInfo = computed(()=> store.state.userInfo)

const showForm = ref(false)
const newName = ref(userInfo.value.name)
const newFamily = ref(userInfo.value.family)
const newPhone = ref(userInfo.value.phone)
const isLoading = ref(false)

var role = ref(null);
var isLogin = ref(null);
onMounted(()=>{
  role.value = store.state.isUserAdmin
  isLogin.value = store.state.isUserLogin

})

function logOut(){
  store.commit('changeUserState');
  if(role.value)
    store.commit('changeRoleState');
  router.push('/login')

  const newLog = {
    title:"خروج از حساب کاربری",
    type:['خروج','log-out'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)
}

function checkName(nameField){
  if(!nameField)
    return "نام را وارد کنید"

  return true
}

function checkFamily(familyField){
  if(!familyField)
    return " نام خانوادگی را وارد کنید"

  return true
}

function checkPhone(phoneField){
  if(!phoneField)
    return "  شماره تماس را وارد کنید"

  return true
}

function changeUserInfo(){
  isLoading.value = true;

  setTimeout(()=>{
    isLoading.value = false;
    store.commit('changeUserInfo' , {
    name : newName.value ,
    family : newFamily.value ,
    phone : newPhone.value
    })
    showForm.value = false
  } , 1000)
  

}
</script>

<style scoped lang="scss">
.isntLogin{
  width: 100%; height: 100vh; 
  display: flex; justify-content: center; align-items: center; flex-direction: column;

  a{
    background-color: #aa4069;
    color: #fff;
    border-radius: 1rem;
    padding: 0.4rem 0.7rem;
  }
}

.panel-header{
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex; justify-content: space-between; align-content: center;
  flex-wrap: wrap;
  padding: 0.4rem 0.7rem;

  h2{
    margin: 0;
    font-family: titr;
  }

  svg{
    color: #aa4069;
  }

}

.panel-userInfo{
    display: flex; justify-content: space-between; align-items: center;
    padding: 0.4rem 0.7rem;

    h3,p{
      margin: 0;
    }

    svg{
      color: #4C40AA;
    }
  }

  .panel-form{
    display: flex; flex-direction: column; align-items: center;
    padding: 0.4rem 0.7rem;

    button{
      width: 100%;
        padding: 0.7rem ;
        border-radius: 0.3rem; border : none;
        margin: 0.3rem 0;
        background-color: #4C40AA;
        font-family: vazir !important;
        color: #fff;

        
      }

    .form-row{
      display: flex;
      width: 100%;

      .column{
        display: flex; flex-direction: column;
        flex: 6;

        input , .roleSpan{
          width: 98%;
          border: none;
          border-bottom: 2px solid #4C40AA;
          border-radius: 0.3rem;
          background-color: #eee;
          margin: 0.3rem 0;
          font-family: vazir !important;
          padding: 0.7rem 1rem;

          &:focus{
            outline: none;
            border-bottom: 2px solid #aa4069;
          }
      }

      .roleSpan{
        background-color: #ccc;
      }

      }
    }
  }

  .user-point{
    margin: 0.4rem 0.7rem; margin-top: 0.5rem ;
    
    display: flex; justify-content: center; align-items: center; flex-direction: column;
      
    .point-body{
      border-radius: 1rem;
      background-color: rgba(170,64,105,0.3); color: #4C40AA;
      font-family: titr;
      padding: 0.4rem 0.7rem; margin: 0.4rem 0;
      display: flex; justify-content: space-between; align-items: center;
      width: 100%;

      span{
         font-size: 3em;
      }

      svg{
        margin: 0 0.3rem;
      }
    }

    p{
      margin: 0;
    
    span{
      color: #aa4069;
      margin: 0 0.2rem;
      font-family: titr;
    }
    }
  }

  .user-log{
    padding: 0.4rem 0.7rem;
  }

  .admin-panel{
    display: flex; flex-direction: column;

    a{
      width: 100%;
      display: flex; justify-content: space-between; align-items: center;
      padding: 0.6rem 0.7rem;

    }

    a:not(:last-child){
      border-bottom: 1px solid #eee;
    }

    span{
      display: flex; justify-content: space-between; align-items: center;
    }
  }

  .dark{
    background-color: #eee;
  }
</style>