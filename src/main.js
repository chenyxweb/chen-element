import Vue from 'vue'
import App from './App.vue'
import ChButton from './components/button.vue'
import ChDialog from './components/dialog.vue'
import ChInput from './components/input.vue'

// 引入icon
import './assets/font/font.scss'

Vue.config.productionTip = false

Vue.component(ChButton.name, ChButton)
Vue.component(ChDialog.name, ChDialog)
Vue.component(ChInput.name, ChInput)

new Vue({
  render: h => h(App)
}).$mount('#app')
