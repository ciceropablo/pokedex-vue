<template>
  <transition-group :class="$style.PokemonList" name="slide-fade" tag="ul">
    <li :class="$style.PokemonList__Item" v-for="pokemon in pokemons" :key="pokemon.name">
      <PokemonItem :pokemon="pokemon" />
    </li>
  </transition-group>
</template>

<script>
import PokemonItem from '@/components/PokemonItem'

export default {
  name: 'PokemonList',
  props: {
    pokemons: Array
  },
  components: {
    PokemonItem
  }
}
</script>

<style module>
.PokemonList {
  list-style: none;
  margin: 0;
  padding: 0;
}

.PokemonList__Item {}
</style>
