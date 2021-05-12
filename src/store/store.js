import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './moduleUsers'
import moduleMenu from './moduleMenu'
import moduleGroup from './moduleGroup'

import moduleLineage from './moduleLineage'
import moduleGender from './moduleGender'
import moduleRoles from './moduleRoles'

import moduleImages from './moduleImages'
import moduleTypeproduct from './moduleTypeproduct'
import moduleProducts from './moduleProducts'

import moduleOrders from './moduleOrders'
import moduleStatus from './moduleStatus'
import modulePayments from './modulePayments'
import moduleTransport from './moduleTransport'

import moduleSumProductOrders from './moduleSumProductOrders'
import moduleProductDetailOrders from './moduleProductDetailOrders'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export const store = new Vuex.Store({
  plugins: [createLogger()],
  modules: {
    users: moduleUsers,
    navbar: moduleMenu,
    group: moduleGroup,

    lineage: moduleLineage,
    gender: moduleGender,
    roles: moduleRoles,

    images: moduleImages,
    typeProduct: moduleTypeproduct,
    products: moduleProducts,

    orders: moduleOrders,
    status: moduleStatus,
    transports: moduleTransport,
    payments: modulePayments,
    productDetailOrders: moduleProductDetailOrders,
    sumProductOrders: moduleSumProductOrders
  }
})
