import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    lastFetch: null
  }),
  actions: {
    async fetchPosts() {
      // Check if cache is valid (15 minutes)
      if (this.lastFetch && Date.now() - this.lastFetch < 15 * 60 * 1000) {
        return
      }
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        this.posts = await response.json()
        this.lastFetch = Date.now()
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }
  }
})