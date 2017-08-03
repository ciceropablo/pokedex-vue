<template>
  <main :class="$style.root">
    <transition
      appear
      appear-class="fade-enter"
      appear-active-class="fade-enter-active"
    >
      <div>
        <header>
          <nav>
            <router-link :to="{ name: 'pokedex' }">pokedex</router-link>
          </nav>
        </header>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </transition>
    <vue-progress-bar></vue-progress-bar>
  </main>
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
