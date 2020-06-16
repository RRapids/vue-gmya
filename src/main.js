import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { vueBaberrage } from '../node_modules/vue-baberrage'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = 'http://localhost:8080'

Vue.use(VueAxios, axios)
Vue.use(vueBaberrage)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
