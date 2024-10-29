import type { LoginFormData, AuthUser } from "~/interfaces/auth"
import { generateToken } from "~~/server/utils/jwt"

export default defineEventHandler(async (event) => {
  const { username, password }: LoginFormData = await readBody(event)

  console.log("username, password formdata:")
  console.log(username, password)

  const user: AuthUser = {
    id: "12345",
    username,
    email: "test@test.com",
    isAdmin: true,
  }

  const token = generateToken(user.username)

  setCookie(event, "token", token, {
    maxAge: 60 * 60 * 24 * 1000 * 7,
  })

  return user
})
