<template>
  <div :class="$style.App">
    <vue-progress-bar />
    <transition appear appear-class="fade-enter" appear-active-class="fade-enter-active">
      <div>
        <AppHeader />
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style module>
@import '@/styles/shared/layout.css';
@import '@/styles/shared/animations.css';

.App {}
</style>
