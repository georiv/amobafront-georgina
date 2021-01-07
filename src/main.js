import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
import 'tailwindcss/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch } from '@fortawesome/free-solid-svg-icons'
import Paginate from 'vuejs-paginate'



Vue.component('paginate', Paginate)

library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

axios.defaults.baseURL = "http://amobapi.test";

Vue.use(axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
