<template>
  <div class="home">
 <Banner />
 <Tabs />
 <Flexible />
 <User />
 <!-- <Pricing /> -->
 <!-- <Propses v-bind:studentData="studentData"></Propses> -->
  <Streamline /> 
  </div>
</template>

<script>
    // @ is an alias to /src
    import Banner from '@/components/Banner.vue'
    import Tabs from '@/components/Tabs.vue'
    import Flexible from '@/components/Flexible.vue'
    import Streamline from '@/components/Streamline.vue'
    import User from '@/components/User.vue'
    // import Propses from '@/components/Propses.vue'

    export default {
        name: 'Home',
        components: {
            Banner,
            Tabs,
            Flexible,
            Streamline,
            User,
            // Propses
        },
        data() {
            return {
                studentData: [{
                    name: 'Jason Martin',
                    grade: '100'
                }, {
                    name: 'Cersei Lannister',
                    grade: '88'
                }, {
                    name: 'Daenerys Targaryen',
                    grade: '94'
                }, {
                    name: 'Tyrion Lannister',
                    grade: '87'
                }, {
                    name: 'Arya Stark',
                    grade: '96'
                }]
            }
        }

    }
</script>