<script setup>
const route = useRoute();
const postId = route.params.id;


const { data: post } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

</script>

<template>
  <div class="p-6">
    <div v-if="!post">Loading...</div>
    <div v-else>
      <h1 class="text-2xl font-bold">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>