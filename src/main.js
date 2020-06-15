import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { vueBaberrage } from '../node_modules/vue-baberrage'

Vue.use(vueBaberrage)
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
