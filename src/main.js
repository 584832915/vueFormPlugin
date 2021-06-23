import Vue from 'vue'
import App from './App.vue'
import demoPlugin from "./lib/demo.js"
Vue.use(demoPlugin)

new Vue({
  el: '#app',
  render: h => h(App)
})
