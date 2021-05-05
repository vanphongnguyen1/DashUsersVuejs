import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',

  dataEdit: {}
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchTypeProducts ({ commit }) {
    GET_API('typeProducts')
    .then(response => response.data)
    .then(data => {
      commit('setListTypeProducts', data)
    })
  },

  async fetchTypeProduct ({ commit }, id) {
    let res = await GET_API(`typeProducts/${id}`)
    commit('setTypeProductEdit', res.data)

    return res.data
  },

  postTypeProduct (state, data) {
    POST_API('typeProducts', data)
  },

  putTypeProduct (state, payload) {
    PUT_API(`typeProducts/${payload.id}`, payload.value)
  },

  deleteTypeProducts (state, id) {
    DELETE_API(`typeProducts/${id}`)
  },
}

//to handle mutations
const mutations = {
  setListTypeProducts (state, payload) {
    state.list = payload
    state.loading = 'success'
  },

  setTypeProductEdit (state, payload) {
    state.dataEdit = payload
  }

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
