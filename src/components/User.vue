<template>
    <div class="fexible-sec py-5 bg-white">
        <div class="container">
            <div class="row" data-animation="slideInUp">
          <div class="col-12 mb-5">
               <h2 v-html="users" class="text-center"></h2>
          </div>
            </div>
               <div class="row" data-animation="slideInUp">
                   <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-3" v-for="item in cardList" :key="item.value">
                  <div class="border radius-8 card-block"> <div class="img-block d-flex justify-content-start align-items-center">
                        <img class="img-fluid" :src="item.cardImage">
                        <div class="user-info">
                            <div><h6 class="mb-0">{{ item.name}}</h6></div>
                            <div><h6 class="mb-0">{{ item.email}}</h6></div>
                        </div>
                   </div>
                   <div class="text-block">
                         <div><p>{{ item.content}}</p></div>
                   </div></div>
                   </div>     
            </div>
        </div>
    </div>
</template>

<script>
    export default {
            name: 'User',          
         data(){
           return {
              users :"What our users think about Moqups",
        cardList: [
       {
        cardImage: require('@/assets/images/article-pic-1.png'),
      name: "Lara",
      email: "@Lara_ux",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        cardImage: require('@/assets/images/article-pic-2.png'),
       name: "Lara",
      email: "@Lara_ux",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    },

      {
        cardImage: require('@/assets/images/article-pic-3.png'),
        name: "Lara",
      email: "@Lara_ux",
    content: "Here we test out the display of what someone might put onto their card. This better work. Come back and put a character limit on it."
    }

  ]
}
         
}
}
</script>

<style scoped>
.card-block{
padding: 20px;
}
.img-block{
    margin-bottom: 10px;
}
.img-block img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.bg-grey{
    background: #f0f2ff;
}
.text-block h3{
    color: #3b4754;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}
.text-block p{
    color: #798da3;
    font-size: 16px;
    font-weight: normal;
}
.radius-8{
    border-radius: 8px;
}
</style>