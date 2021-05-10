import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle state
const getters = {
  filterOrders (state) {
    return id => state.list.filter(item => item.id === id)
  }
}

//to handle actions
const actions = {
  fetchOrders ({ commit }) {
    GET_API('orders')
    .then(response => response.data)
    .then(data => {
      commit('setListOrders', data)
    })
  },

  postOrder (state, data) {
    POST_API('orders', data)
  },

  putOrder (state, payload) {
    PUT_API(`orders/${payload.id}`, payload.value)
  },

  deleteOrders (state, id) {
    DELETE_API(`orders/${id}`)
  },

  async fetchOrder (state, id) {
    let res = await GET_API(`orders/${id}`)
    return res.data;
  },
}

//to handle mutations
const mutations = {
  setListOrders (state, payload) {
    state.list = payload
    state.loading = 'success'
  },

  setDefaultEditOrder () {
    state.dataEdit = {}
  }
}

//export store module
export default {
  state,
  getters,
  actions,
  mutations
}
