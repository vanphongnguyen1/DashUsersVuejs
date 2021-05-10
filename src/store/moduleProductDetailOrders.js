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
  fetchProductDetailOrders ({ commit }) {
    GET_API('productDetailOrders')
    .then(response => response.data)
    .then(data => {
      commit('setListProductDetailOrders', data)
    })
  },

  postProductDetailOrders (state, data) {
    POST_API('productDetailOrders', data)
  },

  putProductDetailOrders (state, payload) {
    PUT_API(`productDetailOrders/${payload.id}`, payload.value)
  },

  deleteProductDetailOrders (state, id) {
    DELETE_API(`productDetailOrders/${id}`)
  },

  async fetchProductDetailOrder (state, id) {
    let res = await GET_API(`productDetailOrders/${id}`)
    return res.data;
  },
}

//to handle mutations
const mutations = {
  setListProductDetailOrders (state, payload) {
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
