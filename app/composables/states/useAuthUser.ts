import type { AuthUser } from "~/interfaces/auth"

export const useAuthUser = () => {
  const authUser = useState<AuthUser | null>("auth-user", () => null)

  const setAuthUser = (user: AuthUser | null) => {
    authUser.value = user
  }

  const isAuthenticated = computed(() => {
    return authUser.value !== null
  })

  return {
    authUser,
    setAuthUser,
    isAuthenticated,
  }
}
