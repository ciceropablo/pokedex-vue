<template>
  <router-link :class="$style.PokedexLogo" :to="{ name: 'pokedex' }">
    pokedex
  </router-link>
</template>

<script>
export default {
  name: 'PokedexLogo'
}
</script>

<style module>
.PokedexLogo {}
</style>
