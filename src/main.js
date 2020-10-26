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
  DatePicker,
  Upload,
  Dialog,
  Drawer
} from 'cube-ui'

Vue.use(Popup)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Drawer)

Vue.config.productionTip = false
Vue.prototype.$http = axios.create({
  // baseURL: process.env.VUE_APP_API_URL || '/web/api'
  baseURL: 'http://47.93.137.97:3000/',
  timeout: 30000,
  withCredentials: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
