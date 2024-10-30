import type { AuthUser } from "@/interfaces/auth"

export const useMyAuth = () => {
  const { authUser, setAuthUser } = useAuthUser()
  const { setAlertMsg } = useAlertMsg()
  const { showLoadingMask, hideLoadingMask } = useShowLoadingMask()

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

    if (user.value) {
      setAuthUser(user.value)
    }
    else {
      setAuthUser(null)
    }
  }

  const login = async (username: string, password: string) => {
    try {
      showLoadingMask()
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

      setAlertMsg({
        level: "error",
        title: "Login Error",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        description: (error as any).statusMessage,
      })
    }
    finally {
      hideLoadingMask()
    }
  }

  const logout = async () => {
    console.log("logout実行")
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
