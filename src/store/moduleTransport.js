import { GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle state
const getters = {}

//to handle actions
const actions = {
  fetchTransports ({ commit }) {
    GET_API('transports')
    .then(response => response.data)
    .then(data => {
      commit('setListtransport', data)
    })
  }

  // postStauts (state, data) {
  //   POST_API('payments', data)
  // },

  // putStauts (state, payload) {
  //   PUT_API(`payments/${payload.id}`, payload.value)
  // },

  // deleteStauts (state, id) {
  //   DELETE_API(`payments/${id}`)
  // },

  // async fetchOrder (state, id) {
  //   let res = await GET_API(`orders/${id}`)
  //   return res.data;
  // },
}

//to handle mutations
const mutations = {
  setListtransport (state, payload) {
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
