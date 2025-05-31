<template>
  <div class="cart">
    <div class="cart__body">
      <div class="cart__list">
        <h1>سبد خرید شما ( <span v-farsi-number="count"></span> ) </h1>
        <div class="card" v-for="cart in carts" :key="cart.id">
          <svg @click="removeCart(cart.id)" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
          </svg>
          <router-link @click="store.commit('changeTab' ,'category')" :to="{path:'/product',query:{id:cart.id}}">
            <img :src="cart.image" class="card__img" >
          </router-link>
          <div class="card__bottom">
            <div class="card__body">
              <div class="card__text">
                <h2>{{cart.title}}</h2>
              </div>
              <div class="card__text">
                <b>
                  <button @click="changeCount(cart.id , '+')">+</button>
                  <span v-farsi-number="cart.count"></span>
                  <button @click="changeCount(cart.id , '-')">-</button>
                </b>
                <h3>
                  <span v-farsi-number="(cart.price * cart.count)" class="symbol"></span>
                  <span> تومان </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
          <th> </th>
          <th>نام‌محصول</th>
          <th>تعداد</th>
          <th>قیمت</th>
          <th>قیمت نهایی</th>
          <th> </th>
        </thead>
        <tbody>
          <tr v-for="cart in carts" :key="cart.id">
            <td>
              <img :src="cart.image" alt="">
            </td>
            <td><b>محصول :</b> {{cart.title}}</td>
            <td>
              <b>تعداد :</b>
              <button @click="changeCount(cart.id , '+')">+</button>
              <span v-farsi-number="cart.count"></span>
              <button @click="changeCount(cart.id , '-')">-</button>
            </td>
            <td><b>قیمت :</b><span v-farsi-number="cart.price"></span> تومان</td>
            <td><b>قیمت کل :</b > <span v-farsi-number="(cart.price * cart.count)"></span> تومان</td>
            <td>
              <svg @click="removeCart(cart.id)" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
            </td>
          </tr>
        </tbody>
        </table>
        <div style="margin:3rem 0; text-align:center" :class="{'d-none':count > 0}">محصولی در سبد خرید شما وجود ندارد ! </div>
      </div>
      <div class="cart__checkout">
        <div class="cart__body">
          <div class="cart__item">
            <h3>
              <h4>قیمت کالاها : </h4>
              <span>
                <b v-farsi-number="prices.totalPrice"></b><span>تومان</span>
              </span>
            </h3>
          </div>
          <div class="cart__item">
            <h3>
              <h4>جمع سبد خرید : </h4>
              <span>
                <b v-farsi-number="prices.finalPrice"></b><span>تومان</span>
              </span>
            </h3>
          </div>
          <div class="cart__item">
            <h3>
              <h4>سود شمااز خرید : </h4>
              <span>
                <b v-farsi-number="prices.totoalDiscount"></b><span>تومان</span>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {useStore} from "vuex"
  import {computed , ref} from "vue"
  import {useToast} from "vue-toastification"

  const store = useStore();

  const toast = useToast();

  const carts = computed(()=> store.getters.showCarts)

  const count = computed(()=> 
  store.getters.countCarts)

  function removeCart(id){
    var result = store.getters.removeCart(id);

    if(result == "done"){
      toast.error("محصول با موفقیت از سبد خرید شما حذف شد");
    }
  }

  function changeCount(id , symbole){
    store.getters.changeCount(id,symbole)
  }

  const prices = computed(()=> 
  store.getters.finalOrder)

</script>

<style scoped lang="scss">
.card{
            display: flex !important;
            align-items: center !important;
            border-bottom: 1px solid #eee !important;

            svg{
                  color: #aa4069;
                  margin-left: 0.3rem;
                }

            a{
              display: flex;
              align-items: center;
            }

            &__img{
                width: 130px !important;
                height: 130px !important;
            }

            h3{
              color: #4C40AA;
              text-align: left;
            }

            &__text{
                display: flex !important;
                flex-direction: row !important;
                justify-content: space-between;
                padding: 0.3rem 0 !important;
                margin: 0;

                button{
                        background-color: #aa4069;
                        color: #FFF;
                        border: none;
                        border-radius: 1rem;
                        padding: 0.3rem 0.6rem;
                        margin: 0 0.3rem;
                        cursor: pointer;
                }

                
            }

            &__bottom{
                flex: 6 !important;
                padding: 0.3rem 0.5rem;

                .btn{
                    display: none !important;
                }
            }

            
        }
</style>