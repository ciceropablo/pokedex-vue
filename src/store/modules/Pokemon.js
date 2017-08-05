import * as api from '@/api'
import * as types from '@/store/mutation-types'

export default {
  namespaced: true,

  getters: {
    data: state => {
      const propertyList = ('id,name,base_experience,height,is_default,order,weight').split(',')
      const name = state.data.name
      const image = state.data.sprites.front_default
      const properties = Object.entries(state.data)
        .filter(([key, value]) => !!~propertyList.indexOf(key))
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
      return { name, image, properties }
    }
  },

  state: {
    data: {}
  },

  mutations: {
    [types.RECEIVE_POKEMON] (state, data) {
      state.data = data
    }
  },

  actions: {
    getPokemonByName: ({ commit }, name) => {
      return api
        .getPokemonByName(name)
        .then(data => {
          commit(types.RECEIVE_POKEMON, data)
        })
    }
  }
}
