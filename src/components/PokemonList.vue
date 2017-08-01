<template>
    <div :class="$style.root">
      <transition-group name="slide-fade" tag="ul">
        <li v-for="pokemon in pokemons" :key="pokemon.name">
          <PokemonListItem :pokemon="pokemon" />
        </li>
      </transition-group>
    </div>
</template>

<script>
import PokemonListItem from '@/components/PokemonListItem'

export default {
  name: 'PokemonList',
  props: {
    pokemons: Array
  },
  components: {
    PokemonListItem
  }
}
</script>

<style module>
.root {}
.root ul li {
  transition: opacity 0.55s ease-in-out, transform 0.6s ease-out;
}
</style>
