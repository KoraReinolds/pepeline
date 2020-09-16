import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  vehiclesList: [],
  curVehicle: null,
  filterType: '',
  types: [],
  addMode: false,
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
  ADD_MODE: state => state.addMode,
}
export const mutations = {
  ADD_VEHICLE(state, {
    name,
    image,
    description,
    rent,
  }) {
    const newVehicle = {
      id: Math.random().toString(),
      name: name || 'default name',
      type: "custom",
      description: description || 'default description',
      specifications_text: "Consectetur esse ex et sunt. Excepteur irure fugiat adipisicing ipsum reprehenderit laboris aliqua Lorem minim nostrud mollit reprehenderit. Voluptate fugiat pariatur pariatur eu incididunt. Laborum reprehenderit sit laboris magna dolore fugiat officia consectetur officia tempor eiusmod. Exercitation Lorem laboris amet ipsum. Dolor exercitation aute incididunt labore cupidatat eu ipsum laborum occaecat sit Lorem.\n\nEst aliqua culpa dolore occaecat incididunt consectetur aute cupidatat velit sint veniam qui adipisicing. Aliqua consequat labore in eiusmod Lorem cillum irure culpa nisi. Mollit ad ad incididunt fugiat dolore officia commodo occaecat labore. Ut elit consectetur consectetur dolore tempor ad culpa consequat. Qui dolor cillum quis exercitation eiusmod ad nulla aute.",
      team_text: "Ex elit qui ullamco quis ex consectetur nulla aliqua adipisicing amet tempor duis. Incididunt cillum reprehenderit dolore enim ea. Minim duis ipsum est ut id sint voluptate. Quis ad laborum amet fugiat nulla deserunt non ad adipisicing excepteur ullamco sint quis. Elit qui sit irure proident quis Lorem et eiusmod do quis.",
      term_text: "Ut consectetur dolor labore non velit voluptate sint enim cillum ad labore. Adipisicing minim sunt labore sit anim culpa cillum laboris proident dolor do sint. In esse cupidatat id sit eiusmod culpa quis.\n\nIn ullamco pariatur sit in excepteur ipsum incididunt reprehenderit aliqua minim. Deserunt cillum consectetur ut velit fugiat cupidatat elit ullamco adipisicing pariatur. Aute qui qui magna culpa proident ad labore qui est.\n\nAmet velit nisi ea eiusmod reprehenderit cillum aliqua do ut. Consectetur elit nostrud nulla fugiat laborum aliqua sit. Laboris magna consectetur qui ex. Sunt irure magna quis amet dolore.",
      rent: rent || 777,
      preview: image || "https://loremflickr.com/900/900/airship",
      image: image || "https://loremflickr.com/900/900/airship",
    }
    state.vehiclesList.push(newVehicle);
    state.types.add("custom");
    state.addMode = false;
  },
  SET_ADD_MODE(state, val) {
    window.scrollTo(0,0);
    state.addMode = val;
  },
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