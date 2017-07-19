<template>
    <div class="pokemon-list">
      <transition-group name="fade" tag="ul">
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

<style scoped>
.fade-enter-active {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-leave-active {}

.fade-enter {}

.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.pokemon-list {}
.pokemon-list ul li {
  transition: opacity 0.55s ease-in-out, transform 0.6s ease-out;
}
</style>
