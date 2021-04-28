import Vue from 'vue'
import Vuex from 'vuex'
import moduleUsers from './moduleUsers'
import moduleMenu from './moduleMenu'
import moduleGroup from './moduleGroup'
import moduleLineage from './moduleLineage'
import moduleGender from './moduleGender'
import moduleRoles from './moduleRoles'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    users: moduleUsers,
    navbar: moduleMenu,
    group: moduleGroup,
    lineage: moduleLineage,
    gender: moduleGender,
    roles: moduleRoles
  }
})
