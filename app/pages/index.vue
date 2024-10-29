<script lang="ts" setup>
const { authUser } = useMyAuth()
</script>

<template>
  <div class="pt-6">
    <h1 class="text-2xl mb-3">
      Home Page
    </h1>
    <section>
      <h3 class="text-lg mb-3">
        auth user info
      </h3>
      <template v-if="authUser">
        <ul>
          <li>
            <strong>Username:</strong> {{ authUser.username }}
          </li>
          <li>
            <strong>Email:</strong> {{ authUser.email }}
          </li>
          <li>
            <strong>isAdmin:</strong> {{ authUser.isAdmin }}
          </li>
        </ul>
      </template>
      <template v-else>
        <p>
          No user logged in
        </p>
      </template>
    </section>
  </div>
</template>

<style scoped></style>
