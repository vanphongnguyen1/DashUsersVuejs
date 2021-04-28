import { GET_API } from './usersService'

//to handle state
const state = {
  list: [],
  loading: 'loading',
}

//to handle actions
const actions = {
  fetchLineage ({ commit }) {
    GET_API('lineages')
    .then(response => response.data)
    .then(data => {
      commit('setListLineage', data)
    })
  },

  fetchLineageGroup ({commit}, data) {
    GET_API(`group/${data}/lineages`)
    .then(response => response.data)
    .then(data => {
      commit('setListLineage', data)
    })
  }
}

const mutations = {
  setListLineage (state, payload) {
    state.list = payload
    state.loading = 'success'
  },

  setDefaultLineage (state) {
    state.list = []
    state.loading = 'loading'
  }
}

//export store module
export default {
  state,
  actions,
  mutations
}
