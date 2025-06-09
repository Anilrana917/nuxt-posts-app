<template>
  <div>
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold">Webreinvent</NuxtLink>
        <nav>
          <ul class="flex space-x-6">
            <li>
              <NuxtLink to="/posts" class="hover:underline">Posts</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main main class="container mx-auto p-4">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const router = useRouter()
router.beforeEach((to, from) => {
  console.log('Navigating from', from.path, 'to', to.path)
})
</script>
