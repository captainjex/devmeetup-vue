import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'

import App from './App'
import router from './router'
import DateFilter from './filters/date'
import { store } from './store'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAqaXMU15J_gi87tuDV4abCbEmStKDTDOo',
      authDomain: 'devmeetup-b59bb.firebaseapp.com',
      databaseURL: 'https://devmeetup-b59bb.firebaseio.com',
      projectId: 'devmeetup-b59bb',
      storageBucket: 'devmeetup-b59bb.appspot.com'
    })
  }
})
