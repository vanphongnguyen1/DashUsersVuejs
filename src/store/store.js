import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './moduleUsers'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users: moduleUsers
  }
})
