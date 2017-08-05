<template>
  <table :class="$style.PokemonTable">
    <tr>
      <td>
        <img :src="data.image" :alt="`${data.name} pokémon`" height="96">
      </td>
      <td></td>
    </tr>
    <tr v-for="(value, key) in data.properties" :key="key">
      <td>{{ key }}</td>
      <td>{{ value }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'PokemonTable',
  props: {
    data: Object
  }
}
</script>

<style module>
.PokemonTable {}
</style>
