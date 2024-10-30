export default defineNuxtRouteMiddleware(async (to) => {
  const { getMe, getMeError } = useMyAuth()
  const { isAuthenticated } = useAuthUser()
  const { setAuthUser } = useAuthUser()
  const { setAlertMsg } = useAlertMsg()

  if (to.name === "login" || to.name === "index") {
    return
  }

  await getMe()

  if (getMeError.value) {
    setAuthUser(null)

    setAlertMsg({
      level: "error",
      title: "Unauthorized Error",
      description: getMeError.value.statusMessage,
    })
  }

  if (!isAuthenticated.value) {
    return navigateTo("/login")
  }
})
