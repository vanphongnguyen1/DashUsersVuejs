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
  fetchProducts ({ commit }) {
    GET_API('products')
    .then(response => response.data)
    .then(data => {
      commit('setListProducts', data)
    })
  },

  postProduct (state, data) {
    POST_API('products', data)
  },

  putProduct (state, payload) {
    PUT_API(`products/${payload.id}`, payload.value)
  },

  deleteProducts (state, id) {
    DELETE_API(`products/${id}`)
  },
}

//to handle mutations
const mutations = {
  setListProducts (state, payload) {
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
