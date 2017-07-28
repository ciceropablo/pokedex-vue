export default {
  created () {
    this.$router.beforeEach((to, from, next) => {
      if (to.meta && to.meta.progress) {
        const progress = to.meta.progress
        this.$Progress.parseMeta(progress)
      }

      this.$Progress.start()
      next(() => {
        this.$Progress.finish()
      })
    })

    this.$router.afterEach(() => {
      this.$Progress.finish()
    })
  }
}
