import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import Antd from 'ant-design-vue'
import VueRouter from 'vue-router'
import { routes } from './components/router'
import 'ant-design-vue/dist/antd.css'
import './style.css'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,

  render: h => h(App),
}).$mount('#app')
