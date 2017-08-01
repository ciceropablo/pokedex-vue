<template>
  <transition
    appear
    appear-class="appear-in"
    appear-to-class="appear-to-in"
    appear-active-class="appear-active-in"
  >
    <main :class="$style.root">
      <header>
        <nav>
          <router-link :to="{ name: 'pokedex' }">pokedex</router-link>
        </nav>
      </header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <vue-progress-bar></vue-progress-bar>
    </main>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style module="gl">
@import '../styles/shared/layout.css';
@import '../styles/shared/animations.css';
</style>

<style module>
.root {}
</style>
