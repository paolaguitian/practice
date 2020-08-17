const App = {
  data() {
    return {
      name: '',
      email: '',
      question: '',
      activeClass: 'active',
      response: '',
    }
  },
  method: {
    submitForm() {
      axios.post('//jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        question: this.question,
      }).then(res => {
        this.response = JSON.stringify(res, null, 2)
      }).catch(error => {
        this.response = 'Error' + error.response.status
      })
    }
  }
}

Vue.create(App).mount('#app');