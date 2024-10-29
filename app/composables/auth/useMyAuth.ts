import type { AuthUser } from "@/interfaces/auth"

export const useMyAuth = () => {
  const { authUser, setAuthUser } = useAuthUser()
  const { setAlertMsg } = useAlertMsg()

  const {
    data: user,
    execute,
    error: getMeError,
  } = useCustomFetch<AuthUser>("/auth/me", {
    $fetch: useNuxtApp().$myFetch,
    immediate: false,
    headers: useRequestHeaders(["cookie"]) as HeadersInit,
  })

  const getMe = async () => {
    await execute()

    if (getMeError.value) {
      setAuthUser(null)

      setAlertMsg({
        level: "error",
        title: "Unauthorized Error",
        description: getMeError.value.statusMessage,
      })

      await navigateTo("/login")

      return
    }

    if (user.value) {
      setAuthUser(user.value)
    }
    else {
      setAuthUser(null)
    }
  }

  const login = async (username: string, password: string) => {
    try {
      const user = await useNuxtApp().$myFetch<AuthUser>("/auth/login", {
        method: "POST",
        body: { username, password },
      })

      if (user) {
        setAuthUser(user)
        await navigateTo("/")
      }
      else {
        setAuthUser(null)
        await navigateTo("/")
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    setAuthUser(null)
    await useNuxtApp().$myFetch("/auth/logout")
    await navigateTo("/login")
  }

  return {
    authUser,
    getMeError,
    getMe,
    logout,
    login,
  }
}
