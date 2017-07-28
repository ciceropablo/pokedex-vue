import Vue from 'vue'
import Vuex from 'vuex'
import Pokedex from './modules/pokedex'
import Pokemon from './modules/pokemon'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  getters: {},

  state: {},

  mutations: {},

  actions: {},

  modules: {
    namespaced: true,
    Pokedex,
    Pokemon
  }
})
