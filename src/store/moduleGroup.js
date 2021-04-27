import { GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle actions
const actions = {
  fetchGroup ({ commit }) {
    GET_API('groups')
    .then(response => response.data)
    .then(data => {
      commit('setListGroup', data)
    })
  },
}

const mutations = {
  setListGroup (state, payload) {
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
