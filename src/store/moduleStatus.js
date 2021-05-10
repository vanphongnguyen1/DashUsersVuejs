import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchStatus ({ commit }) {
    GET_API('status')
    .then(response => response.data)
    .then(data => {
      commit('setListStatus', data)
    })
  },

  postStauts (state, data) {
    POST_API('status', data)
  },

  putStauts (state, payload) {
    PUT_API(`status/${payload.id}`, payload.value)
  },

  deleteStauts (state, id) {
    DELETE_API(`status/${id}`)
  },

  // async fetchOrder (state, id) {
  //   let res = await GET_API(`orders/${id}`)
  //   return res.data;
  // },
}

//to handle mutations
const mutations = {
  setListStatus (state, payload) {
    state.list = payload
    state.loading = 'success'
  }
}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
