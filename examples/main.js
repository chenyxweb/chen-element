// import Vue from 'vue'
// import App from './App.vue'
// import ChButton from './components/button.vue'
// import ChDialog from './components/dialog.vue'
// import ChInput from './components/input.vue'
// import ChSwitch from './components/switch.vue'
// import ChRadio from './components/radio.vue'
// import ChRadioGroup from './components/radio-group.vue'
// import ChCheckbox from './components/checkbox.vue'
// import ChCheckboxGroup from './components/checkbox-group.vue'
// import ChForm from './components/form.vue'
// import ChFormItem from './components/form-item.vue'

// // 引入icon
// import './assets/font/font.scss'

// Vue.config.productionTip = false

// Vue.component(ChButton.name, ChButton)
// Vue.component(ChDialog.name, ChDialog)
// Vue.component(ChInput.name, ChInput)
// Vue.component(ChSwitch.name, ChSwitch)
// Vue.component(ChRadio.name, ChRadio)
// Vue.component(ChRadioGroup.name, ChRadioGroup)
// Vue.component(ChCheckbox.name, ChCheckbox)
// Vue.component(ChCheckboxGroup.name, ChCheckboxGroup)
// Vue.component(ChForm.name, ChForm)
// Vue.component(ChFormItem.name, ChFormItem)

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'

// 引入组件库
import ChElementUI from '../packages'

Vue.use(ChElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
