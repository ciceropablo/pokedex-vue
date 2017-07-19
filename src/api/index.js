import axios from 'axios'
import ls from 'local-storage'
import qs from 'querystring'

export const limit = 50

const request = axios.create({
  baseURL: `http://pokeapi.co/api/v2`
})

const fetchData = (endpoint, options = {}) => {
  let params = qs.stringify(options.params)
  params = params && `?${params}`

  const key = `${endpoint}${params}`
  const cache = ls(key)
  if (cache) {
    return new Promise(resolve => {
      resolve(cache)
    })
  }
  return request(endpoint, options)
    .then(response => {
      const data = response.data
      ls(key, data)
      return data
    })
}

export const getPokemons = (offset = 0) => {
  return fetchData(`/pokemon`, {
    params: { limit, offset }
  })
}

export const getPokemonByName = (name) => {
  return fetchData(`/pokemon/${name}`)
}
