<template>
  <div>
  <div class="banner position-relative">
    <div class="container">
      <div class="row banner-hol">
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pr-5" data-animation="slideInRight">
          <h1 v-html="bannerHead" class="mb-4"></h1>
            <p v-html="bannerText" class="mb-4"></p>
            <a href="#" class="btn border-0 mb-3 text-decoration-none text-white">Create a FREE account</a>
            <p v-html="noCredit" class="ml-2"></p>
          </div>  
          <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
            <img src="../assets/images/content-04.png" class="img-fluid w-75" data-animation="slideInLeft">
          </div>        
        </div>
      </div>
      <div class="header-shape position-absolute" style="bottom: -3px;">
        <img src="../assets/images/header-bg2.png" class="img-fluid w-100" alt="">
    </div>
    </div>
    <div class="container">
      <div class="row align-content-center py-5" data-animation="slideInUp">
        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 flex-column d-flex align-items-center justify-content-center">
          <p class="mb-0" v-html="usedBy"></p>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <ul class="list-unstyled mb-0 d-flex">
            <li v-for="picture in pictures" :key="picture.imgsrc" class="flex-fill m-3 d-flex justify-content-center align-items-center">
                <img class="img-fluid" :src="picture.imgsrc" alt="slider-image">
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>
  </template>

<script>
    export default {
        name: 'Banner',
        data() {
            return {
                pictures: [{
                    'imgsrc': require('@/assets/images/monitor-loading-progress.svg')
                }, {
                    'imgsrc': require('@/assets/images/monitor-window.svg')
                }, {
                    'imgsrc': require('@/assets/images/monitor-loading-progress.svg')
                }, {
                    'imgsrc': require('@/assets/images/monitor-window.svg')
                }, {
                    'imgsrc': require('@/assets/images/monitor-cash-credit-card.svg')
                }],
                bannerHead: "Our Analysis is your financial results",
                bannerText: "A streamlined web app that helps you create and collaborate in real-time on wireframes, mockups, diagrams and prototypes. ",
                noCredit: "No credit card required",
                usedBy: "Used by 1,500,000 people worldwide",

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .banner {
      height: 750px;
        background: #edf5ff;
        /* background: url('../assets/images/banner.svg') center center/cover no-repeat; */
    }
    
    .banner .banner-hol {
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
</style>