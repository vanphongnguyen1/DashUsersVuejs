import { GET_API } from '../components/API'

//to handle state
const state = {
  listUsers: [],
  loading: 'loading',
  genders: [],
  roles: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchUsers ({ commit }) {
    setTimeout(() => {
      GET_API('users')
      .then(response => response.data)
      .then(data => {
        commit('setListUsers', data)
      })
    }, 500)
  },

  fetchGenders ({ commit }) {
    // axios.get('http://localhost:3000/genders')
    GET_API('genders')
    .then(response => response.data)
    .then(data => {
      commit('setGender', data)
    })
  },

  fetchMale ({ commit }) {
    // axios.get('http://localhost:3000/roles')
    GET_API('roles')
    .then(response => response.data)
    .then(data => {
      commit('setRoles', data)
    })
  },


}

//to handle mutations
const mutations = {
  setListUsers (state, payload) {
    state.listUsers = payload
    state.loading = 'success'
  },

  setGender (state, payload) {
    state.genders = payload
  },

  setRoles (state, payload) {
    state.roles = payload
  },

}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
