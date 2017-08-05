<template>
  <div :class="$style.Pokemon">
    <BackButton>back</BackButton>
    <PokemonTable :data="data" />
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import store from '@/store'
import BackButton from '@/components/BackButton'
import PokemonTable from '@/components/PokemonTable'

const beforeRoute = (to, from, next) => {
  const name = to.params.name
  store._vm.$Progress.start()
  store.dispatch('Pokemon/getPokemonByName', name)
    .then(() => {
      store._vm.$Progress.finish()
      next()
    }, error => {
      if (error) {
        store._vm.$Progress.fail()
        throw new Error(error)
      }
    })
}

export default {
  name: 'Pokemon',
  components: {
    BackButton,
    PokemonTable
  },
  computed: {
    ...mapState('route', {
      name: state => state.params.name
    }),
    ...mapGetters('Pokemon', {
      data: 'data'
    })
  },
  beforeRouteEnter: beforeRoute,
  beforeRouteUpdate: beforeRoute,
  methods: {
    ...mapActions('Pokemon', {
      getPokemonByName: 'getPokemonByName'
    })
  }
}
</script>

<style module>
.Pokemon {}
</style>
