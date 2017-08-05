<template>
  <div :class="$style.Pagination">
    <router-link :class="$style.Pagination__Button" :to="prev.to">{{ prev.label }}</router-link>
    <span :class="$style.Pagination__Label">&nbsp;{{ current }}/{{ total }}&nbsp;</span>
    <router-link :class="$style.Pagination__Button" :to="next.to">{{ next.label }}</router-link>
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
.Pagination {}

.Pagination__Button {}

.Pagination__Label {}
</style>
