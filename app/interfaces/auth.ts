export interface LoginFormData {
  username: string
  password: string
}

export interface AuthUser {
  id: string
  username: string
  email: string
  isAdmin: boolean
}
