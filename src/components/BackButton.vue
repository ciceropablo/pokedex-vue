<template>
  <div :class="$style.BackButton">
    <a @click.prevent="onClickBackButton" href="">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  methods: {
    onClickBackButton () {
      this.$router.go(-1)
    }
  }
}
</script>

<style module>
.BackButton {}
</style>
