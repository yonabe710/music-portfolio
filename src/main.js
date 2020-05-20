// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/scss/style.scss'
import App from './App.vue'
import router from './router'

/* Fontawesomeのインストールここから */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* Fontawesomeのインストールここまで */

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
