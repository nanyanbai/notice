import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


import vueiInfinite from 'vue-infinite-scroll'

import '@/assets/styles/index.scss' // global css
import '@/assets/font/index.css' // font css

Vue.use(vueiInfinite)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
