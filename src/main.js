import Vue from 'vue'
import App from './App'
import router from './router'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticles)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
