import Vue from 'vue'
import App from './components/App.vue'

import todo from './components/todo.vue'

Vue.component("todo", todo)

new Vue({
  el: '#app',
  render: h => h(App)
})
