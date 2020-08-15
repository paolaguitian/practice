const App = {
  data() {
    return {
      counter: 0,
      name: ''
    }
  },
  methods: {
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
}

Vue.createApp(App).mount('#app')

