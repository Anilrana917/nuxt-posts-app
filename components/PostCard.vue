<script setup>
defineProps({ post: Object });
</script>

<template>
  <NuxtLink
    :to="`/posts/${post.id}`"
    class="block p-5 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-xl transition-all transform hover:-translate-y-1"
  >
    <h2 class="text-xl font-semibold text-gray-800 line-clamp-2">
      {{ post.title }}
    </h2>
    <p class="text-gray-600 mt-2 line-clamp-3">
      {{ post.body }}
    </p>
    <div class="mt-4 text-blue-500 font-semibold">Read More →</div>
  </NuxtLink>
</template>