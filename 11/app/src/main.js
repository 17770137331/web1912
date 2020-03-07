import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import ui from './ui-pulgin/index.js'
import router from "./router"

Vue.config.productionTip = false

Vue.use(ui,111111)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

