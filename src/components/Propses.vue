<template>
  <div class="Propses-hol bg-bg-success">
 <div class="container">
<div class="row">
         <div v-for="student in studentData" :key="student.value" class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" data-animation="slideInUp">
        <div><h2>{{ student.name }}</h2><p>{{ student.name }}'s grade is: {{ student.grade }}</p>
        <div class="divider"></div>
        </div>
    </div>
</div>
 </div>
  </div>
</template>

<script>
  export default {
        name: 'Propses',
        // props: ['studentData'],
        props:{
             studentData: {
                 type: Array,
              
             }
          }
  }
</script>

<style scoped>
.divider {
	border-top: 2px dashed #ccc;
}
</style>