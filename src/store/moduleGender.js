import { GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle actions
const actions = {
  fetchGenders ({ commit }) {
    GET_API('genders')
    .then(response => response.data)
    .then(data => {
      commit('setGender', data)
    })
  },
}

const mutations = {
  setGender (state, payload) {
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
