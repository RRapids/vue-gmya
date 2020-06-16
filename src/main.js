import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vueBaberrage } from '../node_modules/vue-baberrage'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global_ from '@/util/Global.vue'

Vue.prototype.GLOBAL = global_
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.use(vueBaberrage)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
