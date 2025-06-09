<template>
  <div>
    <header class="header text-white p-4">
      <div class="container mx-auto flex gap-6 items-center">
        <NuxtLink to="/" class="text-xl font-bold"
          ><img
            src="https://webreinvent.com/images/logo-webreinvent.svg"
            alt="logo"
            width="200px"
        /></NuxtLink>
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

</script>

<style>
.header {
  background-color: #5f4ca4;
}
</style>
