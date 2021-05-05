import { DELETE_API, POST_API, PUT_API, GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle state
const getters = {
  product: ({dataEdit}) => dataEdit
}

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

  async fetchProduct (state, id) {
    let res = await GET_API(`products/${id}`)
    return res.data;
  },
}

//to handle mutations
const mutations = {
  setListProducts (state, payload) {
    state.list = payload
    state.loading = 'success'
  },

  setEditProduct (state, payload) {
    state.dataEdit = payload
  },

  setDefaultEditProduct () {
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
