<template>
<div>
  <!--   main menu   -->
  <Header></Header>
 <div id="wrapper">
    <!--   main content for every pages   -->
    <router-view></router-view>
 </div>
  
  <!--   main footer   -->
  <Footer></Footer>
</div>
</template>
<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'
export default {
      name: 'AppLayout',
  components: {
    Header,
    Footer
  }
}
</script>
