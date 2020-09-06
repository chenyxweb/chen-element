import Vue from 'vue'
import App from './App.vue'
import ChButton from './components/button.vue'
import ChDialog from './components/dialog.vue'
import ChInput from './components/input.vue'
import ChSwitch from './components/switch.vue'
import ChRadio from './components/radio.vue'
import ChRadioGroup from './components/radio-group.vue'

// 引入icon
import './assets/font/font.scss'

Vue.config.productionTip = false

Vue.component(ChButton.name, ChButton)
Vue.component(ChDialog.name, ChDialog)
Vue.component(ChInput.name, ChInput)
Vue.component(ChSwitch.name, ChSwitch)
Vue.component(ChRadio.name, ChRadio)
Vue.component(ChRadioGroup.name, ChRadioGroup)

new Vue({
  render: h => h(App)
}).$mount('#app')
