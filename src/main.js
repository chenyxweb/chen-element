import Vue from 'vue'
import App from './App.vue'
import ChButton from './components/button.vue'

// 引入icon
import './assets/font/font.scss'

Vue.config.productionTip = false

Vue.component(ChButton.name, ChButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
