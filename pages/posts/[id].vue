<template>
  <div class="container mx-auto px-4 py-8">
    <button
      @click="navigateTo('/posts')"
      class="mb-6 flex items-center text-blue-500 hover:text-blue-700"
    >
      ← Back to Posts
    </button>

    <div v-if="loading" class="text-center">Loading post...</div>
    <div v-else-if="post" class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-2xl font-bold mb-4">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>
    <div v-else class="text-center text-red-500">Post not found</div>
  </div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();


const post = ref(null);
const loading = ref(true);
const error = ref(null);


const fetchPost = async (id) => {
  try {
    loading.value = true;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) throw new Error("Post not found");
    post.value = await response.json();
    error.value = null;
  } catch (err) {
    error.value = err.message;
    post.value = null;
   
  } finally {
    loading.value = false;
  }
};


fetchPost(route.params.id);


watch(
  () => route.params.id,
  (newId) => {
    fetchPost(newId);
  }
);


onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    await fetchPost(to.params.id);
  }
});
</script>
