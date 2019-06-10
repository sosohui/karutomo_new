import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbvue/build/css/mdb.css';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ImageUploader from 'vue-image-upload-resize'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.use(ImageUploader);

Vue.use(BootstrapVue)

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
