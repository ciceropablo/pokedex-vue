import Vue from 'vue'
import Vuex from 'vuex'
import Pokedex from './modules/pokedex'
import Pokemon from './modules/pokemon'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  getters: {
    isLoading: state => {
      return state.isLoading
    }
  },

  state: {
    isLoading: false
  },

  mutations: {
    [types.CHANGE_LOADING_STATUS] (state, isLoading) {
      state.isLoading = isLoading
    }
  },

  actions: {
    setLoading: ({ commit }, status) => {
      commit(types.CHANGE_LOADING_STATUS, status)
    }
  },

  modules: {
    namespaced: true,
    Pokedex,
    Pokemon
  }
})
