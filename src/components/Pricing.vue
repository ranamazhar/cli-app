<template>
    <div class="fexible-sec py-5 bg-grey">
        <div class="container">
            
            <div class="row">
          <div class="col-12 mb-5">
               <h2 v-html="design" class="text-center"></h2>
          </div>
            </div>
               <div class="row">
                   <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="item in cardList" :key="item.value">
                   <div class="img-block">
                        <img class="img-fluid" :src="item.cardImage">
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

<style  scoped>


</style>