<template>
  <router-link class="pokemon-list-item" :to="{ name: 'pokemon', params: { name: pokemon.name }}">
    {{ pokemon.name }}
  </router-link>
</template>

<script>
export default {
  name: 'PokedexListItem',
  props: {
    pokemon: Object
  }
}
</script>

<style scoped>
.pokedex-list-item {}
</style>
