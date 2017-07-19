import * as api from '@/api'
import * as types from '@/store/mutation-types'

export default {
  namespaced: true,

  getters: {
    properties: state => {
      const propertyList = ('id,name,base_experience,height,is_default,order,weight').split(',')
      return Object.entries(state.data)
        .filter(([key, value]) => !!~propertyList.indexOf(key))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
    },

    image: state => {
      return state.data.sprites.front_default
    }
  },

  state: {
    data: {
      sprites: {
        front_default: ''
      }
    }
  },

  mutations: {
    [types.RECEIVE_POKEMON] (state, data) {
      state.data = data
    }
  },

  actions: {
    getPokemonByName: ({ commit }, name) => {
      commit(types.CHANGE_LOADING_STATUS, true, { root: true })
      return api
        .getPokemonByName(name)
        .then(data => {
          commit(types.RECEIVE_POKEMON, data)
          commit(types.CHANGE_LOADING_STATUS, false, { root: true })
        })
    }
  }
}
