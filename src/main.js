import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/animate.css'
import '@/assets/css/main-style.css'
import '@/assets/js/jquery.min.js'
import '@/assets/js/popper.min.js'
import '@/assets/js/bootstrap.bundle.min.js'
import '@/assets/js/custom.js'
import axios from 'axios'

axios.defaults.baseURL = 'https://seersco-front-end.here/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['header-name'] = 'value'
// axios.defaults.headers.common['X-CSRF-TOKEN'] = 'R7cSV1aCGO7cZnTa2EXeTs64VWYlwArD4RNW7ps0';
axios.defaults.headers.common['Authorization'] = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
createApp(App).use(router).mount('#app')