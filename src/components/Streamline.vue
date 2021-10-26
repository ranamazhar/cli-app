<template>
    <div class="container py-5">
<div class="row" data-animation="slideInUp">
    <div class="col-12 d-flex justify-content-center align-items-center flex-column">
        <h2 class="mb-3" v-html="Streamline"></h2>
        <p class="mb-3" v-html="conception"></p>
                <a href="#" class="btn border-0 mb-3 text-decoration-none text-white">Create a FREE account</a>

    </div>
</div>
    </div>
</template>

<script>
    export default {
         name: 'Streamline', 
           data()
      {
               return {
                 Streamline: 'Streamline your design workflow and unify your team.' ,
                 conception: "From conception to presentation with one online solution.",
           } 
      } 
          
    }
</script>

<style scoped>
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