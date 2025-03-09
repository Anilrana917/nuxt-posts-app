<script setup>
import { useRoute } from 'vue-router';
import { usePostStore } from '~/stores/posts';
import { onMounted } from 'vue';

const route = useRoute();
const postStore = usePostStore();

onMounted(() => {
  postStore.fetchPostById(route.params.id);
});
</script>

<template>
  <div class="container mx-auto p-6">
    <NuxtLink to="/posts" class="text-blue-500">&larr; Back to Posts</NuxtLink>
    <div v-if="postStore.post" class="mt-6 p-4 border rounded-lg shadow-md">
      <h1 class="text-3xl font-bold mb-4">{{ postStore.post.title }}</h1>
      <p class="text-gray-700">{{ postStore.post.body }}</p>
    </div>
    <div v-else class="text-gray-500">Loading...</div>
  </div>
</template>
