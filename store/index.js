import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  vehiclesList: [],
  curVehicle: null,
  filterType: '',
  types: [],
})
export const getters = {
  VEHICLES: state => {
    if (state.filterType) {
      return state.vehiclesList.filter(vec => vec.type === state.filterType);
    } else {
      return state.vehiclesList;
    }
  },
  DETAIL_VEHICLE: state => state.curVehicle,
  VEHICLE_TYPES: state => state.types,
}
export const mutations = {
  SET_VEHICLES(state, list) {
    state.vehiclesList = list;
    state.types = list.reduce((types, { type }) => types.add(type), new Set())
  },
  SET_CUR_VEHICLE(state, vec) {
    state.curVehicle = vec;
  },
  FILTER_VEHICLES(state, type) {
    state.filterType = type;
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