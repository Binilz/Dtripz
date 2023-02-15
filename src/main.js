import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false



Vue.prototype.$hostname = 'http://192.168.1.46:8991/'
// Vue.prototype.$hostname = 'https://api.theawayholidays.com/' 

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
