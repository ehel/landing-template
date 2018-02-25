import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

Vue.prototype.$http = axios
Vue.config.productionTip = false

window.events = new Vue()

window.flash = function (message, level = 'success') {
  window.events.$emit('flash', { message, level })
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
