import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  listUsers: [],
  loading: 'loading',

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
}

//to handle mutations
const mutations = {
  setListUsers (state, payload) {
    state.listUsers = payload
    state.loading = 'success'
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
