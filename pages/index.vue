<script setup>
const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <h1 class="text-4xl font-bold text-center mb-8 text-blue-600">Latest Posts</h1>

    <div v-if="posts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <div v-else class="text-center text-lg text-gray-500">Loading...</div>
  </div>
</template>