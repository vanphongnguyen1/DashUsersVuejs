import { GET_API } from './usersService'

//to handle state
const state = {
  loading: 'loading',
  list: [],
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchRoles ({ commit }) {
    GET_API('roles')
    .then(response => response.data)
    .then(data => {
      commit('setRoles', data)
    })
  }
}

//to handle mutations
const mutations = {
  setRoles (state, payload) {
    state.list = payload
    state.loading = 'success'
  },
}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
