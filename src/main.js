// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueProgressBar from 'vue-progressbar'
import router from './router'
import store from './store'
import App from './components/App'

sync(store, router)

Vue.config.debug = true
Vue.config.productionTip = false
Vue.config.errorHandler = () => {
  // airbrake or sentry integration
}

Vue.use(VueProgressBar, {
  color: '#000000',
  failedColor: '#ff0000',
  thickness: '1px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 500
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
