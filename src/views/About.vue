<template>
  <div>
    <div class="about-banner position-relative">
      <div class="container">
       <div class="row banner-hol">
           <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5" data-animation="slideInRight">
            <h1 class="mb-3">
     Fast & secure move is our promise
            </h1>
               <p class="mb-4">A streamlined web app that helps you create and collaborate in real-time on wireframes, mockups, diagrams and prototypes.</p>
                 <div class="d-flex justify-content-start align-items-center btn-hol">
              <a href="#" class="btn mx-2 d-flex mb-3 justify-content-center align-items-center">Contact us </a>
               <a href="#" class="btn mx-2 d-flex mb-3 justify-content-center align-items-center">Learn More</a>
     </div>
             </div>  
             <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center" data-animation="slideInLeft">
               <img src="../assets/images/banner-vector.png" class="img-fluid w-75">
             </div>        
           </div>
      </div>
        <div class="header-shape position-absolute" style="bottom: -3px;">
           <img src="../assets/images/header-bg2.png" class="img-fluid w-100" alt="">
       </div>
     </div>
     <div class="container py-5">
       <div class="row pt-5 align-items-center">
         <div class="col-12 text-center">
           <h2>{{TheBestService}}</h2>
         </div>
       </div>
      <div class="row py-5">
        <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3" v-for="item in cardList" :key="item.value">
      <div class="box-hover d-flex justify-content-center align-items-center flex-column">
        <div class="icon mb-3">
          <i :class="item.icon"></i>
        </div>
      <div class="text-block">
          <div><h3 class="text-center mb-3">{{ item.title}}</h3></div> 
            <div>
              <p class="text-center mb-3">{{ item.content}}</p>
          <div class="d-flex justify-content-center align-items-center">
            <a href="#" class="btn mb-3">
              {{ item.linkBtn}}
            </a>
          </div>
            </div>
      </div>
      </div>
        </div>     
 </div>
     </div>
     <div class="work-management py-5">
       <div class="container py-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3 d-flex justify-content-center align-items-center">
            <img src="../assets/images/content-09.svg" class="img-fluid w-75" data-animation="slideInUp" data-animation-delay="600ms">
          </div> 
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5">
           <h2 class="mb-3">
            Work Management solution to gain visibility
           </h2>
              <p class="mb-4">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur modi tempora.</p>
                <div class="d-flex justify-content-start align-items-start flex-column">
                  <ul class="mb-3 list-unstyled">
                    <li v-for="list in itemsLists" class="mb-2 pl-3 list-items">
                      {{ list.message }}
                    </li>
                  </ul>
    </div>
    <a href="#" class="btn mb-3">
      {{ linkBtn}}
    </a>
            </div>  
       
          </div>
       </div>
     </div>
     <div class="container py-5">
      <div class="row mb-2-9 mb-md-6 mb-lg-9 align-items-center">
          <div class="col-md-6 text-center text-md-left mb-2-5 mb-md-0">
              <img src="../assets/images/case-detail-01.png" alt="case-detail" class="img-fluid">
          </div>
          <div class="col-md-6 case-detail-block">
              <div class="ml-0 ml-md-5 ml-lg-0">
                  <span class="icon-circle green mb-4"><span class="text">01</span></span>
                  <h3 class="text-color-md-blue mb-4">Let’s build something great</h3>
                  <p>Build integration aute irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.sed quia non numquam voluptatem.</p>
                  <div class="circle-btn">
                    <a href="#!" class="btn mb-3">View Result</a>
                  </div>
              </div>
          </div>
      </div>
      <div class="row mb-2-9 mb-md-6 mb-lg-9 align-items-center">
          <div class="col-md-6 case-detail-block order-md-1 order-2">
              <div class="ml-0 ml-md-5 ml-lg-0">
                  <span class="icon-circle orange mb-4"><span class="text">02</span></span>
                  <h3 class="text-color-md-blue mb-4">Connect with development</h3>
                  <p>Development integration irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.sed quia non numquam voluptatem.</p>
                  <div class="circle-btn">
                    <a href="#!" class="btn mb-3">View Result</a>
                  </div>
              </div>

          </div>
          <div class="col-md-6 text-center text-md-right order-md-2 order-1 mb-2-5 mb-md-0">
              <img src="../assets/images/case-detail-02.png" alt="case-detail" class="img-fluid">
          </div>
      </div>
      <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-left mb-2-5 mb-md-0">
              <img src="../assets/images/case-detail-03.png" alt="case-detail" class="img-fluid">
          </div>
          <div class="col-md-6 case-detail-block">
              <div class="ml-0 ml-md-5 ml-lg-0">
                  <span class="icon-circle blue mb-4"><span class="text">03</span></span>
                  <h3 class="text-color-md-blue mb-4">You have a ready site</h3>
                  <p>Ready site integration aute irure design in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat design proident.sed quia non numquam voluptatem.</p>
                  <a href="#!" class="btn mb-3">View Result</a>
              </div>

          </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
     name: 'About',
     data(){
       



       return{
        TheBestService:'The Best Service',
        linkBtn: 'Get Started',
        itemsLists: [
        { message: 'Exclusive design' },
          { message: 'We Provide Awesome Services' },
          { message: 'We Provide Awesome Services' },
          { message: 'We Provide Awesome Services' },
         { message: 'Your business deserves best design' }
        ],
        cardList: [
       {
        linkBtn: 'Get Started',
         icon: 'flaticon-time-out text-primary',
        cardImage: require('@/assets/images/article-pic-1.png'),
      title: "Facilities Services",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        linkBtn: 'Get Started',
        icon: 'flaticon-shield text-success',
      title: "Unlimited Products",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        linkBtn: 'Get Started',
        icon: 'flaticon-infographic text-warning',
      title: "Search Engine",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },
    {
      linkBtn: 'Get Started',
      icon: 'flaticon-review text-danger',
      title: "CFO Advisory",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    }

  ]
       }
     }
  }
</script>

<style scoped>
.about-banner{
      background: #edf5ff;
  height: 750px;
  /* background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('../assets/images/main-banner-bg.png') center center/cover no-repeat; */
}

.work-management{
  background: #edf5ff;
}
.about-banner .banner-hol{
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    width: 90vw;
    margin: 0 auto;
    transform: translateY(-50%);
}
  a.btn {
        color: var(--theme-btn-color);
        background: var(--theme-btn-bg);
        border-radius: var(--theme-btn-radius-1);
        font-size: var(--theme-btn-font-size);
        padding: var(--theme-btn-padding);
        white-space: nowrap;
    }
    
    a.btn:hover {
        background: var( --theme-btn-bg-hover);
    }
.icon i{
  font-size: 70px;
}
.icon{
  position: relative;
    z-index: 1;
    width: 120px;
    height: 120px;
    background: #fff;
    box-shadow: 0px 4px 8px rgb(75 75 75 / 12%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
}
/* .icon:after{
  -webkit-animation: rotating 8s linear infinite;
    animation: rotating 8s linear infinite;
    content: "";
    position: absolute;
    z-index: -1;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 0px 4px 8px rgb(75 75 75 / 12%);
    width: 100px;
    height: 100px;
    left: -10px;
    top: 5px;
} */
.box-hover{
  padding: 15px;
}
.box-hover:hover{
  transition: all .35s ease;
  border-radius: 7px;
  box-shadow: var(--theme-custom-box-shadow);
}
ul .list-items{
  margin-left: 25px;
  position: relative;
  color: var(--theme-text-color);
    line-height: revert !important;
    font-size: var(--responsive);
    font-family: var(--main-font)
}
ul .list-items:after{
  content: '';
    position: absolute;
    width: 6px;
    height: 12px;
    border-style: solid;
    border-width: 0px 2px 2px 0px;
    left: -20px;
    transform: rotate(
45deg);
top: 5px;
}
.icon-circle.blue {
    background: rgba(21,178,236,0.1);
    color: #15b2ec;
}

.icon-circle {
    vertical-align: top;
    width: 75px;
    height: 75px;
    background: rgba(41,45,194,0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 85px;
    color: #292dc2;
}
</style>
