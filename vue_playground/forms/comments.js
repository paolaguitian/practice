const Comments = {
  data() {
    return {
      newComment: '',
      comments: [
        'Vue is amazing',
        '5 star, highly reccomend',
        'React,Angluars cooler younger brother'
      ]
    }
  },
  addComment() {
    this.comments.push(this.newComment)
    this.newComment = '';
  }
}

Vue.create(App).mount('#app')