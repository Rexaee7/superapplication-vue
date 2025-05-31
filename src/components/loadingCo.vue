<template>
<div class="loadingCon">
    <div class="loadingCon__body">
        
        <div class="loader-container">
            <img :src="src" alt="">
            <svg viewBox="0 0 85 20" width="85" height="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="8" fill="#aa4069">
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
                values="#aa4069;#aa4069;#aa4069;#aa4069"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0s"/>
            </circle>

            <circle cx="45" cy="15" r="8" fill="#aa4069">
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
                values="#aa4069;#aa4069;#aa4069;#aa4069"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.4s"/>
            </circle>

            <circle cx="75" cy="15" r="8" fill="#aa4069">
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
                values="#aa4069;#aa4069;#aa4069;#aa4069"
                dur="1.6s"
                repeatCount="indefinite"
                begin="0.8s"/>
            </circle>
            </svg>
        </div>
    </div>
</div>
</template>

<script setup>
const src = "./images/logo/logo.jpg";
</script>

<style scoped>
    .loadingCon{
        height: 100Vh;
        width: 100%;
        display: flex;justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.1) !important;
        z-index: 1001 !important;
    }
    img{
        width: 100px;
        height: 100px;
        margin-bottom: 0.4rem;
    }
    .loader-container {
      width: 200px;
      height: 200px;
      border: 1px solid #eee;
      border-radius: 1rem;
      justify-content: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: visible;
      background-color: #fff;
    }
    svg {
      overflow: visible;
      text-align: center !important;
    }
</style>