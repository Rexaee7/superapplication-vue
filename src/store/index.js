import { createStore } from "vuex";

export default createStore({
  state: {
    products:[
      {
        id: "1",
        title:"لپ تاپ لنووا",
        price: 28000000,
        discount: 10,
        finalPrice:(28000000*90)/100,
        stars: 4.3,
        category: "لپ تاپ",
        image: "./images/product/1.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:20,
      },
      {
        id: "2",
        title:"لپ تاپ دل",
        price: 19000000,
        discount: 20,
        finalPrice:(19000000*80)/100,
        stars: 4.1,
        category: "لپ تاپ",
        image: "./images/product/2.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:10,
      },
      {
        id: "3",
        title:"لپ تاپ ایسوس",
        price: 15000000,
        discount: 8,
        finalPrice:(15000000*92)/100,
        stars: 4.6,
        category: "لپ تاپ",
        image: "./images/product/3.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:15,
      },
      {
        id: "4",
        title:"لپ تاپ سرفیس",
        price: 43000000,
        discount: 23,
        finalPrice:(43000000*87)/100,
        stars: 4.0,
        category: "لپ تاپ",
        image: "./images/product/4.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:4,
      },
      {
        id: "5",
        title:"لپ تاپ مکبوک",
        price: 31000000,
        discount: 3,
        finalPrice:(31000000*97)/100,
        stars: 3.8,
        category: "لپ تاپ",
        image: "./images/product/5.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:26,
      },
      {
        id: "6",
        title:"لپ تاپ ویووبوک",
        price: 22000000,
        discount: 4,
        finalPrice:(22000000*96)/100,
        stars: 4.8,
        category: "لپ تاپ",
        image: "./images/product/6.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:8,
      },
      {
        id: "7",
        title:"آیفون 16",
        price: 86000000,
        discount: 2,
        finalPrice:(86000000*98)/100,
        stars: 4.3,
        category: "موبایل",
        image: "./images/product/7.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:21,
      },
      {
        id: "8",
        title:"ردمی نوت 13",
        price: 25000000,
        discount: 1,
        finalPrice:(25000000*99)/100,
        stars: 4.7,
        category: "موبایل",
        image: "./images/product/8.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:33,
      },
      {
        id: "9",
        title:"گلکسی آ 55",
        price: 28000000,
        discount: 2,
        finalPrice:(28000000*98)/100,
        stars: 4.5,
        category: "موبایل",
        image: "./images/product/9.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:45,
      },
      {
        id: "10",
        title:"ردمی نوت 14",
        price: 15000000,
        discount: 15,
        finalPrice:(15000000*85)/100,
        stars: 4.7,
        category: "موبایل",
        image: "./images/product/10.jpg",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:12,
      },
      {
        id: "11",
        title:"نوکیا فلیپ",
        price: 10000000,
        discount: 1,
        finalPrice:(10000000*99)/100,
        stars: 4.1,
        category: "مویایل",
        image: "./images/product/11.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:36,
      },
      {
        id: "12",
        title:"داریا بوند",
        price: 13000000,
        discount: 3,
        finalPrice:(13000000*97)/100,
        stars: 3.7,
        category: "موبایل",
        image: "./images/product/12.webp",
        comments:[
          {
            id:"1",
            title: "امیررضا رضائیان",
            email:"rexaeeex@gmail.com",
            text: "از خرید این محصول راضی بودم ، پیشنهاد میکنم "
          }
        ],
        content:`<div class="product__caption">
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--success">مشخصات ظاهری :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--danger">مشخصات فنی :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--info">مشخصات شرکت سازنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--secondary">مشخصات فروشنده :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
        <div class="paragraph">
            <h3 class="paragraph__header paragraph__header--warning">امکانات :</h3>
            <p>  متن الکی برای سایت خرید لوازم الکترونیکی .</p>
        </div>
    </div>`,
        sellCount:3,
      },
    ],
    carts:[]
  },
  getters: {
    showProduct : (state) => (id) =>{
      return state.products.find(f => f.id === id);
    },
    showCarts : (state) => state.carts,
    countCarts : (state) => state.carts.length ,
    allProduc: (state) =>  state.products,
    addToCart: (state , getters) => (cart) =>{
        var exist = getters.showCarts.find(f=> f.id == cart.id);
        
        if(exist){
            exist.count++;
            return "exist";
        }else{
            state.carts.push(cart)
            return "done";
        }
    },
    removeCart:(state,getters) => (id) =>{
        state.carts = getters.showCarts.filter(f => f.id != id)

        return "done";
    },
    changeCount :(state,getters) => (id,symbole) => {
        var cart = getters.showCarts.find(f => f.id == id)

        if(symbole == '+'){
            cart.count++
        }else if(symbole == '-'){
            if(cart.count > 1){
                cart.count--
            }
        }
    },
    finalOrder: (state , getters) => {
        const totalPrice = getters.showCarts.reduce((sum , cart) => sum + (cart.price * cart.count) , 0);

        const finalPrice = getters.showCarts.reduce((sum , cart) => sum + (cart.finalPrice * cart.count) , 0);

        const totoalDiscount = totalPrice - finalPrice;

        const prices = {
            totalPrice : totalPrice,
            totoalDiscount : totoalDiscount,
            finalPrice : finalPrice,
        }

        return prices
    }, 
    filterProduct: (state,getters) => (filter ,type) => {
      if(!type){
        if(filter == "all"){
          return getters.allProduc
        }
        else if(filter == "expensive" || filter == "cheap"){
          const sorted = [...getters.allProduc].sort((a, b) => a.price - b.price);
          if(filter == "expensive"){
            return sorted.reverse();
          }
          else{
            return sorted
          }
        }
        else if(filter == "discount"){
          const sorted = [...getters.allProduc].sort((a, b) => a.discount - b.discount);
  
          return sorted.reverse()
        }
        else if(filter == "mostsell"){
          const sorted = [...getters.allProduc].sort((a, b) => a.sellCount - b.sellCount);
  
          return sorted.reverse()
        }
        else if(filter == "لپ تاپ"){
          const sorted = [...getters.allProduc].filter(f => f.category == "لپ تاپ");
  
          return sorted
        }
        else if(filter == "موبایل"){
          const sorted = [...getters.allProduc].filter(f => f.category == "موبایل");
  
          return sorted
        }
      }else{
        if (!filter){
          return getters.allProduc;
        }else{
          const newProducts = getters.allProduc.filter(p => 
            p.title.toLowerCase().includes(type));

            if(filter == "all"){
              return newProducts
            }
            else if(filter == "expensive" || filter == "cheap"){
              const sorted = [...newProducts].sort((a, b) => a.price - b.price);
              if(filter == "expensive"){
                return sorted.reverse();
              }
              else{
                return sorted
              }
            }
            else if(filter == "discount"){
              const sorted = [...newProducts].sort((a, b) => a.discount - b.discount);
      
              return sorted.reverse()
            }
            else if(filter == "mostsell"){
              const sorted = [...newProducts].sort((a, b) => a.sellCount - b.sellCount);
      
              return sorted.reverse()
            }
            else if(filter == "لپ تاپ"){
              const sorted = [...newProducts].filter(f => f.category == "لپ تاپ");
      
              return sorted
            }
            else if(filter == "موبایل"){
              const sorted = [...newProducts].filter(f => f.category == "موبایل");
      
              return sorted
            }
        }
        

       
      }
    }
  },
  mutations: {
    addComment(state , comment){
        const product = state.products.find(f => f.id === comment.id);

        product.comments.push(comment);

        console.log(comment);
        console.log(product);
    }
  },
  actions: {},
  modules: {},
});
