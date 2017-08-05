<template>
  <router-link :class="$style.PokemonItem" :to="{ name: 'pokemon', params: { name: pokemon.name }}">
    {{ pokemon.name }}
  </router-link>
</template>

<script>
export default {
  name: 'PokedexItem',
  props: {
    pokemon: Object
  }
}
</script>

<style module>
.PokemonItem {}
</style>
