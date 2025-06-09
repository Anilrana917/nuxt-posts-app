import { defineStore } from "pinia";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [] as Post[],
    lastFetch: null as number | null,
    error: null as string | null,
    isLoading: false,
  }),

  actions: {
    async fetchPosts(forceRefresh = false) {
      if (
        !forceRefresh &&
        this.lastFetch &&
        Date.now() - this.lastFetch < 15 * 60 * 1000
      ) {
        return;
      }

      this.isLoading = true;
      this.error = null;

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        this.posts = await response.json();
        this.lastFetch = Date.now();
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch posts";
        console.error("Error fetching posts:", error);
      } finally {
        this.isLoading = false;
      }
    },

    getPostById(id: number): Post | undefined {
      return this.posts.find((post) => post.id === id);
    },
  },

  getters: {
    cachedPostsCount: (state) => state.posts.length,
    isCacheValid: (state) => {
      return state.lastFetch && Date.now() - state.lastFetch < 15 * 60 * 1000;
    },
  },
});
