<template>
  <div class="pokemon">
    <p>
      <a @click="onClickBackButton" href="">back</a>
    </p>
    <table>
      <tr>
        <td><img :src="image" :alt="`${name} pokémon`" height="96"></td>
        <td></td>
      </tr>
      <tr v-for="(value, key, index) in properties" :key="index">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import RouteCompMixins from '@/mixins/RouteCompMixins'
import store from '@/store'

const beforeRoute = (to, from, next) => {
  const name = to.params.name
  store.dispatch('Pokemon/getPokemonByName', name)
    .then(() => {
      next()
    }, error => {
      if (error) {
        store._vm.$Progress.fail()
        throw new Error(error)
      }
    })
}

export default {
  mixins: [RouteCompMixins],
  name: 'Pokemon',
  computed: {
    ...mapState('route', {
      name: state => state.params.name
    }),
    ...mapGetters('Pokemon', {
      properties: 'properties',
      image: 'image'
    })
  },
  beforeRouteEnter: beforeRoute,
  beforeRouteUpdate: beforeRoute,
  methods: {
    ...mapActions('Pokemon', {
      getPokemonByName: 'getPokemonByName'
    }),
    onClickBackButton (e) {
      e.preventDefault()
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.pokemon {}
</style>
