<template>
    <div>
<div class="card-block" data-animation="slideInUp"> <div class="card-img">{{cardImg}}</div> <h3 class="card-title">{{title}}</h3><p class="card-content">{{content}}</p></div>
    </div>
</template>

<script>
    export default {
               name: 'commentCard', 
                 props: ['cardImg', 'title', 'content'],
                 data: function() {return data;}
    }
</script>

<style scoped>

</style>