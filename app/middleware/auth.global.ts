export default defineNuxtRouteMiddleware(async (to) => {
  const { getMe } = useMyAuth()
  const { isAuthenticated } = useAuthUser()

  if (to.name === "login" || to.name === "index") {
    return
  }

  await getMe()

  if (!isAuthenticated.value) {
    return navigateTo("/login")
  }
})
