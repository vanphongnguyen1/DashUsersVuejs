import { GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle actions
const actions = {
  fetchNavbar ({ commit }) {
    GET_API('navbar')
    .then(response => response.data)
    .then(data => {
      commit('setListNavbar', data)
    })
  },
}

const mutations = {
  setListNavbar (state, payload) {
    state.list = payload
    state.loading = 'success'
  },
}

//export store module
export default {
  state,
  actions,
  mutations
}
