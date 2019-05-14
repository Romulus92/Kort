import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueWaypoint from 'vue-waypoint'
import YmapPlugin from 'vue-yandex-maps'
import VueMouseParallax from 'vue-mouse-parallax'
import { routes } from './routes'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'
import VueLazyload from 'vue-lazyload'
import VueYandexMetrika from 'vue-yandex-metrika'

const options = { // you may define your apiKey, lang and version or skip this.
  apiKey: 'dacd3d3c-1c3c-492d-8892-93d04cd8f99a', // '' by default
  lang: 'ru_RU', // 'ru_RU' by default
  version: '2.1' // '2.1' by default
}

// Waypoint plugin
Vue.use(VueRouter)
Vue.use(VueWaypoint)
Vue.use(YmapPlugin, options)
Vue.use(VueMouseParallax)
Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VueLazyload)

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to) {
    if (to.hash) {
      if (to.hash === '#camp') {
        setTimeout(function () {
          return window.scrollTo({ top: document.querySelector(to.hash).offsetTop - 130, behavior: 'smooth' })
        }, 2000)
      } else {
        return window.scrollTo({ top: document.querySelector(to.hash).offsetTop - 125, behavior: 'smooth' })
      }
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

Vue.use(VueYandexMetrika, {
  id: 52975210,
  router: router,
  env: process.env.NODE_ENV
  // other options
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
