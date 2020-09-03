// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import {
  /* eslint-disable no-unused-vars */
  Popup,
  Button,
  DatePicker
} from 'cube-ui'

Vue.use(Popup)
Vue.use(Button)
Vue.use(DatePicker)

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/web/api'
  baseURL: 'http://localhost:3000',
  timeout: 30000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
