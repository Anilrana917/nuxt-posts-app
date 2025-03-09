import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
    lastFetched: 0,
  }),

  actions: {
    async fetchPosts() {
      const currentTime = Date.now();

      if (
        this.posts.length > 0 &&
        currentTime - this.lastFetched < 15 * 60 * 1000
      ) {
        return;
      }

      try {
        const { data } = await axios.get("https://dummyjson.com/posts");
        console.log("API Response:", data.posts);
        this.posts = data.posts;
        this.lastFetched = currentTime;
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    },
  },
});
