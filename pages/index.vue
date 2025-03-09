<script setup>
const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts");
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">Posts</h1>
    <div v-if="posts">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
