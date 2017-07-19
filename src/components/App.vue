<template>
  <transition
    appear
    appear-class="appear-class"
    appear-to-class="appear-to-class"
    appear-active-class="appear-active-class"
  >
    <main id="app">
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
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      isLoading: 'isLoading'
    })
  }
}
</script>

<style>
.appear-class {
  opacity: 0;
}
.appear-to-class {}
.appear-active-class {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.65s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

body {
  font-family: sans-serif;
}

#app {}
</style>
