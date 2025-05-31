<template>
    <div class="header-saerch">
        <div  >
            <span class="nav__svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
            <div @click="options.modelValue = true">دنبال چی میگردی؟</div>
        </div>
    </div>

<VueFinalModal
      v-model="options.modelValue"
      :teleport-to="options.teleportTo"
      :display-directive="options.displayDirective"
      :hide-overlay="options.hideOverlay"
      :overlay-transition="options.overlayTransition"
      :content-transition="options.contentTransition"
      :click-to-close="options.clickToClose"
      :esc-to-close="options.escToClose"
      :background="options.background"
      :lock-scroll="options.lockScroll"
      :reserve-scroll-bar-gap="options.reserveScrollBarGap"
      :swipe-to-close="options.swipeToClose"
      class="flex justify-center items-center"
      content-class="search__modal vfm--inset"
    >
      <div>
    <div class="search__modal-content">
        <div class="search-input">
            <span @click="options.modelValue = false">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg>
            </span>
            <input v-model="q" placeholder="جست و جو کنید...."  @keyup.enter="searchQuery()" type="text">
        </div>
      <div>
        <h3>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
                </svg>
            </span> آخرین جست و جوی های شما</h3>
        <span>
            <svg @click="deleteAllHistory" xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        </span>
      </div>
      <div>
        <searchhis-co></searchhis-co>
      </div>
</div>
</div>
    </VueFinalModal>

    <ModalsContainer />
</template>

<script setup>
import searchhisCo from "./searchhisCo.vue"
import {ref} from "vue"
import {useRouter} from "vue-router"
import {useStore} from "vuex"
import { ModalsContainer, VueFinalModal } from 'vue-final-modal'
import { useToast } from "vue-toastification";

  const toast = useToast();

  const getInitialValues = () => ({
    teleportTo: 'body',
    modelValue: false,
    displayDirective: 'if',
    hideOverlay: false,
    overlayTransition: 'vfm-fade',
    contentTransition: 'vfm-slide-down',
    clickToClose: true,
    escToClose: true,
    background: 'non-interactive',
    lockScroll: true,
    reserveScrollBarGap: true,
    swipeToClose: 'none',
  })

  const options = ref(getInitialValues())

  const q = ref(null)

  const router = useRouter();
  const store = useStore();

  function reset() {
    options.value = getInitialValues()
  }

  function searchQuery(){
    router.push({path:'/search',query:{q:q.value,cat:'all', brand:'',priceFrom:0 ,priceTo : 0 }});
    store.getters.addToSearchHistory(q.value)
  }

  function deleteAllHistory(){
    store.commit('deleteAllHistory');
    toast.error("تاریخچه جستوی‌ شما با موفقیت حذف شد!")
  }
</script>

<style lang="scss">
    .search{
    &__modal{
        width: 100% !important;
        height: 110vh !important;
        border-radius: 1rem;
        background-color: white !important;
        margin: 0;
        top: 0;

        &-content{
            max-height: 100vh !important;
            max-width: 100%;
            padding: 1rem 1.5rem !important;

            .search-input{
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #eee;
                border-radius: 0.5rem;
                padding: 0;

                span{
                    display: flex;
                    align-items: center;
                }


                input{
                    border: none;
                    flex: 6;
                    padding: 0.7rem 1.3rem;
                    background: inherit;
                    border-radius: 0.5rem;
                    font-family: vazir;

                    &:focus{
                        border: none !important;
                        outline: none !important;
                    }
                }
                

                svg{
                    flex: 1;
                }
            }

            div{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0.5rem;

                    h3{
                        display: flex;
                        align-items: center;

                        span{
                            padding: 0 0.5rem;
                            display: flex;
                            align-items: center;    
                        }
                        
                    }

                    .bi-trash3{
                        color: #f00;
                        }


                }

                 .history-span{
                    display: flex;
                    align-items: center;
                    
                    li{
                        border: 1px solid #333;
                        padding: 0.3rem 0.4rem;
                        border-radius: 1rem;
                        cursor: pointer;

                        a{
                            display: flex;
                            width: 100%;
                            justify-content: space-between;
                        }
                    }

                    span{
                        display: flex;
                        align-items: center;
                        margin: 0 0.3rem;
                    }
                }
        }
    }
}

.header-saerch{
    background-color: #fff;
    padding: 0.7rem 1.3rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #eee;
        padding: 0.3rem 0.2rem !important;
        border-radius: 0.5rem;
        padding: 0;
    }

    span{
        flex: 1;
        display: flex;
        align-items: center;
    }

    div{
        flex: 9;
    }
}
</style>
