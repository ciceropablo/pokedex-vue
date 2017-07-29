<template>
  <div class="pokedex">
    <Pagination
      :prev="{ label: 'prev', to: { name: 'pokedex', params: { page: pagination.prev } } }"
      :next="{ label: 'next', to: { name: 'pokedex', params: { page: pagination.next } } }"
      :current="pagination.current"
      :total="pagination.total"
    />
    <PokemonList :pokemons="pokemons" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PokemonList from '@/components/PokemonList'
import Pagination from '@/components/Pagination'
import store from '@/store'

const beforeRoute = (to, from, next) => {
  const page = to.params.page
  store._vm.$Progress.start()
  store.dispatch('Pokedex/getPokemons', page)
    .then(() => {
      store._vm.$Progress.finish()
      next()
      store.dispatch('Pokedex/getPagination', page)
    }, error => {
      if (error) {
        store._vm.$Progress.fail()
        throw new Error(error)
      }
    })
}

export default {
  name: 'Pokedex',
  components: {
    PokemonList,
    Pagination
  },
  computed: {
    ...mapState('route', {
      page: state => state.params.page
    }),
    ...mapGetters('Pokedex', {
      pokemons: 'pokemons',
      pagination: 'pagination'
    })
  },
  beforeRouteEnter: beforeRoute,
  beforeRouteUpdate: beforeRoute,
  methods: {
    ...mapActions('Pokedex', {
      getPokemons: 'getPokemons'
    })
  }
}
</script>

<style scoped>
.pokedex {}
</style>
