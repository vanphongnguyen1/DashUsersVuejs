import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',

  // dataEdit: {
  //   image: {},
  //   isUser: false
  // }
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchImages ({ commit }) {
    GET_API('images')
    .then(response => response.data)
    .then(data => {
      commit('setListImages', data)
    })
  },

  postImage (state, data) {
    POST_API('images', data)
  },

  putImage (state, payload) {
    PUT_API(`images/${payload.id}`, payload.value)
  },

  deleteImages (state, id) {
    DELETE_API(`images/${id}`)
  },
}

//to handle mutations
const mutations = {
  setListImages (state, payload) {
    state.list = payload
    state.loading = 'success'
  },

  // setEditUser (state, payload) {
  //   state.dataEdit.user = payload,
  //   state.dataEdit.isUser = true
  // },

  // setDefaultEditUser () {
  //   state.dataEdit.user = {}
  //   state.dataEdit.isUser = false
  // },
}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
