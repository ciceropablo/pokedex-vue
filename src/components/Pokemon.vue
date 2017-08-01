<template>
  <div :class="$style.root">
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
import store from '@/store'

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

<style module>
.root {}
</style>
