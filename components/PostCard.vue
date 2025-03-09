<script setup>
defineProps({
  post: Object
});
</script>

<template>
  <NuxtLink :to="`/posts/${post.id}`" class="block p-4 border rounded-lg shadow-md hover:shadow-lg transition">
    <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
    <p class="text-gray-600">{{ post.body.substring(0, 100) }}...</p>
  </NuxtLink>
</template>
