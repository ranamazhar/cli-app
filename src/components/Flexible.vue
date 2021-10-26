<template>
    <div class="fexible-sec py-5 bg-grey">
        <div class="container">
            <div class="row">
          <div class="col-12 mb-5">
               <h2 v-html="design" class="text-center"></h2>
          </div>
            </div>
               <div class="row">
                   <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="item in cardList" :key="item.value" data-animation="slideInUp">
                   <div class="img-block">
                        <img class="img-fluid" :src="item.cardImage">
                <a href="#"> link to other </a>
                   </div>
                   <div class="text-block">
                       <div><h3>{{ item.title}}</h3></div> 
                         <div><p>{{ item.content}}</p></div>
                   </div>
                   </div>     
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            name: 'Flexible',   
         data(){
           return {
              design :"A flexible design solution that adapts to your workflow.",
        cardList: [
       {
        cardImage: require('@/assets/images/article-pic-1.png'),
      title: "This is the first card",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        cardImage: require('@/assets/images/article-pic-2.png'),
      title: "This is the second card",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        cardImage: require('@/assets/images/article-pic-3.png'),
      title: "This is the third card",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    }

  ]
}
         
}
}
</script>

<style scoped>
.img-block{
    margin-bottom: 20px;
    border-radius: 7px;
    overflow: hidden;
    position: relative;
}
.img-block img{
    transition: all .35s ease;
}
.img-block:after{
  content:'';
  position: absolute;
  background:#4c5e73;
    height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
      opacity: 0;
      transition: all .35s ease;
}
.img-block:hover:after{
    opacity: 0.3 !important;
}
.img-block:hover img{
  transform: scale(1.1);
}
.img-block a{
    color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
      opacity: 0;
      z-index: 1;
}
.img-block:hover a{
    opacity: 1 !important;
}
.bg-grey{
    background: #f0f2ff;
}
.text-block h3{
    margin-bottom: 20px;
}
</style>