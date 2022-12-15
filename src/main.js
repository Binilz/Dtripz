import Vue from 'vue';
import Carousel3d from 'vue-carousel-3d';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/tailwind.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';
import VMdDateRangePicker from "v-md-date-range-picker";
 
Vue.use(VMdDateRangePicker);

Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.component('Datepicker', VueDatepickerUi)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCnkotaR_SjW39ABez3mvrKxUrx6vpRgyI',
    libraries: 'places',
  }
});

// import GAuth from 'vue-google-oauth2'


// Vue.use(GAuth, {
//     clientId: '744765984415-dklavt9qcn02htsh35dkhtg8te89d45t.apps.googleusercontent.com',
//     scope: 'email',
//     prompt: 'consent',
//     fetch_basic_profile: true
// })




// import GAuth from 'vue3-google-oauth2'
// const app = createApp(App)

// const gAuthOptions = { 
//   clientId: '744765984415-hk29jsot034id9mpsbat5cdffrm59us9.apps.googleusercontent.com', 
//   scope: 'email', 
//   prompt: 'consent', 
//   fetch_basic_profile: false }
// app.use(GAuth, gAuthOptions)


// import GoogleAuth from '@/config/google.js'
// const gauthOption = {
//   clientId: 'xxxxxxxxxxx.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GoogleAuth, gauthOption)

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  vuetify,
  Carousel3d,
  render: h => h(App)
}).$mount('#app')
