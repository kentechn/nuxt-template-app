<script setup>
const { isAuthenticated } = useAuthUser()
const { logout } = useMyAuth()
</script>

<template>
  <header class="bg-black">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold text-white">
        <NuxtLink to="/">
          <p>logo</p>
        </NuxtLink>
      </div>

      <!-- Navigation Links -->
      <div class="space-x-4">
        <NuxtLink
          to="/"
          class="text-gray-100 hover:text-gray-400"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/protect"
          class="text-gray-100 hover:text-gray-400"
        >
          Protect
        </NuxtLink>
        <template v-if="isAuthenticated">
          <NuxtLink
            class="text-gray-100 hover:text-gray-400"
            :onclick="logout"
          >
            logout
          </NuxtLink>
        </template>
        <template v-else>
          <NuxtLink
            to="/login"
            class="text-gray-100 hover:text-gray-400"
          >
            login
          </NuxtLink>
        </template>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* Add your custom styling here */
</style>
