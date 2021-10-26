<template>
<div class="container">
    <div class="row py-5" data-animation="slideInUp">
<h2 v-html="allinone"></h2>
    </div>
    <div class="row">
<div id="tabs" data-animation="slideInUp">
    <div class="tabs d-flex justify-content-center align-items-center">
        <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]" class="border-right-0 radius-first">Design</a>
        <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]" class="border-right-0">Plan</a>
        <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]" class="border-right-0">Prototype</a>
        <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]" class="radius-last">Collaborate</a>
    </div>
    <div class="content">
        <div v-if="activetab ==='1'" class="tabcontent">
           <div class="row align-items-center">
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3" data-animation="slideInRight">
<div>
                         <h3>Visualize Your Concept</h3>
                     <p>Envision, test and validate your ideas with quick wireframes and detailed mockups.
                      </p>
                     <p>
                         Explore and iterate as your team builds momentum - moving seamlessly from lo-fi to hi-fi as your project evolves.</p>
</div>
                 </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-3" data-animation="slideInLeft">
                      <img src="../assets/images/monitor-cash-credit-card.svg" class="img-fluid w-75">
                 </div>
           </div>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent">
         <div class="row align-items-center">
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-3">
                      <img src="../assets/images/monitor-loading-progress.svg" class="img-fluid w-75">
                 </div>
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                     <div>
                         <h3>Visualize Your Concept</h3>
                     <p>Envision, test and validate your ideas with quick wireframes and detailed mockups.
                      </p>
                     <p>
                         Explore and iterate as your team builds momentum - moving seamlessly from lo-fi to hi-fi as your project evolves.</p>
</div>
                 </div>
              
           </div>
        </div>
        <div v-if="activetab ==='3'" class="tabcontent">
              <div class="row align-items-center">
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                     <div>
                         <h3>Visualize Your Concept</h3>
                     <p>Envision, test and validate your ideas with quick wireframes and detailed mockups.
                      </p>
                     <p>
                         Explore and iterate as your team builds momentum - moving seamlessly from lo-fi to hi-fi as your project evolves.</p>
</div>
                 </div>
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-3">
                      <img src="../assets/images/monitor-window.svg" class="img-fluid w-75">
                 </div>
           </div>
        </div>
        <div v-if="activetab ==='4'" class="tabcontent">
         <div class="row align-items-center">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center mb-3">
                      <img src="../assets/images/monitor-window.svg" class="img-fluid w-75">
                 </div>
                 <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                     <div>
                         <h3>Visualize Your Concept</h3>
                     <p>Envision, test and validate your ideas with quick wireframes and detailed mockups.
                      </p>
                     <p>
                         Explore and iterate as your team builds momentum - moving seamlessly from lo-fi to hi-fi as your project evolves.</p>
</div>
                 </div>
               
           </div>
        </div>
    </div>
  
</div>
   </div>
</div>
</template>

<script>
    export default {
        name: 'Tabs', 
           data()
      {
               return {
                 activetab: '1' ,
                 allinone: "An all-in-one online design platform that's smart, simple and fast.",
           } 
      } 
          
    }
</script>

<style scoped>
.img-fluid {
    max-width: 100%;
    height: auto;
    width: 100%;
}
h2{
font-size: 32px;
font-weight: bold;
color: #3b4754;
margin-bottom: 20px;
}
.tabs{
    margin-bottom: 30px;
}
.tabs a{
    padding: 10px 20px;
     color: #1180f1; 
    font-size: 16px;
    text-decoration: none;
    border-style: solid;
    border-color:#2a85f2;
border-width: 2px 2px 2px 2px !important;
    cursor: pointer;
}
.tabs a.active{
    background:#2a85f2 ;
    color: #fff!important;
}
.border-right-0{
    border-right: 0 !important;
}
.radius-first{
        border-radius: 10px 0 0 10px;

}
.radius-last{
        border-radius:0 10px 10px 0;

}

@media only screen and (max-width: 479px) {
 .tabs{
     flex-direction: column;
 }
 .tabs a {
    padding: 10px 20px;
    color: #1180f1;
    font-size: 16px;
    text-decoration: none;
border-style: solid;
    border-color:#2a85f2;
border-width: 2px 2px 0px 2px !important;
    cursor: pointer;
    width: 100%;
}
.radius-first {
    border-radius: 10px 10px 0 0 !important;
}
.radius-last {
    border-radius: 0 0 10px 10px !important;
}
.border-right-0{
    border-right: 2px solid #2a85f2 !important;
}
 .tabs a:last-child{
        border-bottom: 2px solid #2a85f2 !important; 
 }
}
</style>


