<template>
  <div class="h-full"> <!-- Added h-full to prevent click issues -->
    <div class="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 class="text-xl font-semibold mb-2">{{ post.title }}</h2>
      <p class="text-gray-600 line-clamp-3">{{ post.body }}</p>
      <div class="mt-4 text-sm text-blue-500">Read more →</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>