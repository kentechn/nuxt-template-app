<script lang="ts" setup>
const { clearAlertMsg } = useAlertMsg()

// clear alert message when unmount
onBeforeUnmount(() => {
  clearAlertMsg()
})
</script>

<template>
  <div class="flex justify-center mt-12">
    <Card class="w-[600px]">
      <CardHeader>
        <CardTitle class="mb-3">
          Login
        </CardTitle>
        <Alert />
      </CardHeader>
      <CardContent>
        <ClientOnly>
          <AuthLoginForm />
        </ClientOnly>
      </CardContent>
    </Card>
  </div>
</template>

<style scoped></style>
