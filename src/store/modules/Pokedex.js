import * as api from '@/api'
import * as types from '@/store/mutation-types'

export default {
  namespaced: true,

  getters: {
    pokemons: state => state.results,
    pagination: state => state.pagination
  },

  state: {
    count: 0,
    results: [],
    pagination: {
      current: 0,
      limit: 0,
      offset: 0,
      count: 0,
      total: 0,
      prev: 0,
      next: 0
    }
  },

  mutations: {
    [types.RECEIVE_POKEMONS_COUNT] (state, count) {
      state.count = count
    },
    [types.RECEIVE_POKEMONS] (state, results) {
      state.results = results
    },
    [types.RECEIVE_PAGINATION] (state, pagination) {
      state.pagination = pagination
    }
  },

  actions: {
    getPagination: ({ commit, state }, page = '1') => {
      const current = +page
      const limit = api.limit
      const offset = (current - 1) * limit
      const count = state.count
      const total = Math.ceil(count / limit)
      let prev = current - 1
      let next = current + 1
      prev = (prev <= 0) ? 1 : prev
      next = (next >= total) ? total : next

      commit(types.RECEIVE_PAGINATION, {
        current,
        limit,
        offset,
        total,
        prev,
        next
      })
    },
    getPokemons: ({ commit }, page = '1') => {
      const offset = (+page - 1) * api.limit
      return api
        .getPokemons(offset)
        .then(data => {
          commit(types.RECEIVE_POKEMONS_COUNT, data.count)
          commit(types.RECEIVE_POKEMONS, data.results)
        })
    }
  }
}
