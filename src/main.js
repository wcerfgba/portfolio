import Vue from 'vue'
import PortalVue, { Portal } from 'portal-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  data: {
    blurMain: false
  },
  render: h => h(App),
}).$mount('#app')
