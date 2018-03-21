import Vue from 'vue'
import App from './App.vue'
import hello from './components/hello.vue'
import todo from './components/todo/todo.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#hello',
  render: h => h(hello)
})

new Vue({
  el: 'todo',
  render: h => h(todo)
})
