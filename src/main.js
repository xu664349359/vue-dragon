import Vue from 'vue'
import App from './App.vue'
/* 导入路由 */
import router from './route'
/* 导入全局样式 */
import '@/style/index.scss'
/* 导入重置样式 */
import '@/style/reset.css'
// import vuetify from '@/plugins/vuetify' // path to vuetify export

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  // vuetify
}).$mount('#app')
