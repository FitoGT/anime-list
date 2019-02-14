import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';

Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
