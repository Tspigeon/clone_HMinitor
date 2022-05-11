import Vue from 'vue'
import App from './App.vue'
import "lib-flexible"
import router from '../router'
import ElementUI from "element-ui"



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
