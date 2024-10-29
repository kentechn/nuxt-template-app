<script lang="ts" setup>
const { isShowLoadingMask } = useShowLoadingMask()
</script>

<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <!-- Loading Spinner -->
    <div class="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
  </div>
</template>

<style>

</style>
