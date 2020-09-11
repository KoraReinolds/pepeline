import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  vehiclesList: [],
})
export const getters = {
  VEHICLES: state => state.vehiclesList,
}
export const mutations = {
  SET_VEHICLES(state, list) {
    state.vehiclesList = list;
  }
}
export const actions = {
  async GET_VEHICLES ({ commit, dispatch }) {
    const res = await this.$axios.$post('api/getList', {})
    if (!res.error) {
      commit('SET_VEHICLES', res)
    }
    return res;
  },
}