<template>
  <Form @submit="login()" class="login__container">
    <router-link to="/"><img :src="src" alt=""></router-link>
    <h2>خوش آمدید ☺</h2>
    <p> ورود به پنل کابر : نام‌کاربری : <b>user</b> و رمز عبور : <b>123</b></p>
    <p> ورود به پنل ادمین : نام‌کاربری : <b>admin</b> و رمز عبور : <b>123</b></p>
    <div class="input-control">
      <Field :rules="checkUser" v-model="user" type="text" name="user" placeholder="نام کاربری خود را وارد کنید" />
      <ErrorMessage class="ErrorMessage" name="user"></ErrorMessage>
      <Field :rules="checkPass" v-model="pass" name="pass" type="text" placeholder="رمز عبور خود را وارد کنید" />
      <ErrorMessage class="ErrorMessage" name="pass"></ErrorMessage>
      <button>ورود</button>
    </div>
  </Form>
</template>

<script setup>
import {ref} from "vue"
import { useToast } from "vue-toastification";
import {useStore} from "vuex"
import {useRouter} from "vue-router"
import { Form, Field , ErrorMessage  } from 'vee-validate';
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

const toast = useToast()

const user = ref(null)
const pass = ref(null)

function checkUser(userField){
  if(!userField)
    return "نام کاربری را وارد کنید"

  return true
}

function checkPass(passField){
  if(!passField)
    return "رمز عبور را وارد کنید"

  return true
}

function login(){
  if(user.value == null || !pass.value)
      toast.error("نام کاربری و رمز عبور خود را وارد کنید")

  const result = store.getters.loginCheck(user.value , pass.value)

  if(result == "!exist")
    {
      toast.error("کابری با مشخصات وارد شده یافت نشد")
      return;
    }

  if(result=="admin")
      store.commit('changeRoleState');

  setTimeout(()=>{
    store.commit('changeUserState');
  router.push("/panel")
  }, 1000)

  const newLog = {
    title:"ورود به حساب کاربری",
    type:['ورود','log-in'],
    date: shamsiDate()
  }

  store.commit('addLogs', newLog)

  toast.success("وارد حساب کاربری شدید !")
  
}

const src = "./images/logo/logo.jpg"
</script>
