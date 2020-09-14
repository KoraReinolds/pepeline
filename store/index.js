import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  vehiclesList: [],
  curVehicle: null,
})
export const getters = {
  VEHICLES: state => state.vehiclesList,
  DETAIL_VEHICLE: state => state.curVehicle,
}
export const mutations = {
  SET_VEHICLES(state, list) {
    state.vehiclesList = list;
  },
  SET_CUR_VEHICLE(state, vec) {
    state.curVehicle = vec;
  }
}
export const actions = {
  async GET_VEHICLE_BY_ID ({ commit, state, dispatch }, id) {
    let res = state.vehiclesList;
    if (!res.length) {
      res = await dispatch('GET_VEHICLES')
    }
    const vec = res.find(vec => vec.id === id)
    commit('SET_CUR_VEHICLE', vec)
    return vec;
  },
  async GET_VEHICLES ({ commit }) {
    const res = await this.$axios.$post('api/getList', {})
    if (!res.error) {
      commit('SET_VEHICLES', res)
    }
    return res;
  },
}