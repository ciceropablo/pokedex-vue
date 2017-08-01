<template>
  <div :class="$style.root">
    <p>
      <router-link :to="prev.to">{{ prev.label }}</router-link>
      <span>&nbsp;{{ current }}/{{ total }}&nbsp;</span>
      <router-link :to="next.to">{{ next.label }}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    prev: Object,
    next: Object,
    current: Number,
    total: Number
  }
}
</script>

<style module>
.root {}
</style>
