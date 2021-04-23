import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  listUsers: [],
  loading: 'loading',
  genders: [],
  roles: [],

  dataEdit: {
    user: {},
    isUser: false
  }
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

  postUser (state, data) {
    POST_API('users', data)
  },

  putUser (state, payload = {}) {
    PUT_API(`users/${payload.id}`, payload.value)
  },

  deleteUser (state, id) {
    DELETE_API(`users/${id}`)
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

  setEditUser (state, payload) {
    state.dataEdit.user = payload,
    state.dataEdit.isUser = true
  },

  setDefaultEditUser () {
    state.dataEdit.user = {}
    state.dataEdit.isUser = false
  },
}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
