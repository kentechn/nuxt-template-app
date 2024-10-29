export default defineNuxtRouteMiddleware(async (to) => {
  if (to.name === "login" || to.name === "index") {
    return
  }

  const { isAuthenticated } = useAuthUser()

  if (!isAuthenticated.value) {
    return navigateTo("/login")
  }
})
