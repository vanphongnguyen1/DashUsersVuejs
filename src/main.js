import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import Antd from 'ant-design-vue'
import VueRouter from 'vue-router'
import { routes } from './components/router'
import { LayoutPlugin } from 'bootstrap-vue'

import 'ant-design-vue/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)
Vue.use(LayoutPlugin)

Vue.filter('to-uppercase', value => {
  return value.toUpperCase()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,

  render: h => h(App),
}).$mount('#app')
