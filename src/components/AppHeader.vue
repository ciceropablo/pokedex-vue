<template>
  <header :class="$style.AppHeader">
    <PokedexLogo />
  </header>
</template>

<script>
import PokedexLogo from '@/components/PokedexLogo'

export default {
  name: 'AppHeader',
  components: {
    PokedexLogo
  }
}
</script>

<style module>
.AppHeader {}
</style>
