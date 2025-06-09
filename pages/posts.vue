<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Posts</h1>
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="post in posts"
        :key="post.id"
        @click="navigateToPost(post.id)"
        class="cursor-pointer"
      >
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostsStore } from "~/stores/posts";
import { storeToRefs } from "pinia";

const postsStore = usePostsStore();
const { posts } = storeToRefs(postsStore);
const { fetchPosts } = postsStore;

const { pending } = useAsyncData(async () => {
  await fetchPosts();
});

const navigateToPost = (id) => {
  // Use both methods for maximum reliability
  navigateTo(`/posts/${id}`);

  // Fallback for stubborn cases (remove if not needed)
  if (process.client && !window.location.pathname.endsWith(id)) {
    setTimeout(() => {
      window.location.assign(`/posts/${id}`);
    }, 50);
  }
};
</script>