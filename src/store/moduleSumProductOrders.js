import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle state
const getters = {
  // filterOrders (state) {
  //   return id => state.list.filter(item => item.id === id)
  // }
}

//to handle actions
const actions = {
  fetchSumProductOrders ({ commit }) {
    GET_API('detailOrders')
    .then(response => response.data)
    .then(data => {
      commit('setListSumProductOrders', data)
    })
  },

  postSumProductOrders (state, data) {
    POST_API('SumProductOrders', data)
  },

  putSumProductOrders (state, payload) {
    PUT_API(`SumProductOrders/${payload.id}`, payload.value)
  },

  deleteSumProductOrders (state, id) {
    DELETE_API(`SumProductOrders/${id}`)
  },

  async fetchSumProductOrder (state, id) {
    let res = await GET_API(`SumProductOrders?orderId=${id}`)
    return res.data;
  },
}

//to handle mutations
const mutations = {
  setListSumProductOrders (state, payload) {
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
