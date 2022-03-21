import '@mdi/font/css/materialdesignicons.css'
import 'buefy/dist/buefy.css'

import Vue from 'vue'
import VueKonva from 'vue-konva'
import Buefy from 'buefy'

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueKonva)
Vue.use(Buefy)

new Vue({
  render: h => h(App),
}).$mount('#app')
