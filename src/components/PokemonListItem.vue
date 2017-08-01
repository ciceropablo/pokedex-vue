<template>
  <router-link :class="$style.root" :to="{ name: 'pokemon', params: { name: pokemon.name }}">
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

<style module>
.root {}
</style>
