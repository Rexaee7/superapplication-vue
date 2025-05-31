<template>
  <div  
   v-for="(log,index) in logs"
   :key="index">
      <div class="card__bottom">
      <div class="card__body">
        <div class="title-log">
            <span :class="log.type[1]">
            <b>{{log.type[0]}}</b>
            </span>
            <div class="conTitle">
                <h3 class="card__title" >{{log.title}}</h3>
                <p class="card__text">
                    <span>
                        <b v-farsi-number="log.date[1]"></b>  
                        <b>{{log.date[0]}}</b> 
                        
                         | <b v-farsi-number="log.date[2]"></b> :
                        <b v-farsi-number="log.date[3]"></b> 
                    </span>
                </p>
            </div>
            
        </div>
        
      </div>
      </div>
   </div>
</template>

<script setup>
import {computed} from "vue"
import {useStore} from "vuex"

const store = useStore()

const logs = computed(()=> store.state.logs)
</script>

<style scoped lang="scss">
.card__body{

    .title-log{
        display: flex;
        border-bottom: 1px solid #eee;
        margin: 0.2rem 0;

        .conTitle{
            flex: 6;
            padding: 0.4rem 0.7rem;

            h3{
                margin: 0;
                text-align: right;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 70vw;
                padding: 0;
            }

            p{
                margin: 0;
                padding: 0;
                span{display: flex; justify-content: flex-end !important;width: 100%;}
            }
            
        }

        span{
            flex: 1;
            padding: 0.4rem 0.6rem;
            display: flex; align-items: center; justify-content: center;
            text-align: center;
        }
    }

    .view{
        background-color: rgba(54, 127, 236, 0.3);
    }

    .log-in{
        background-color: rgba(37, 233, 96, 0.3);
    }

    .log-out{
        background-color: rgba(209, 21, 62, 0.3);
    }

    .comment{
        background-color: rgba(214, 195, 21, 0.3);
    }

    .add-cart{
        background-color: rgba(8, 85, 40, 0.3);
    }
    
    .remove-cart{
        background-color: rgba(124, 2, 2, 0.3);
    }


}
</style>