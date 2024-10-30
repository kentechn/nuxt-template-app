import type { LoginFormData } from "~/interfaces/auth"
import { generateJWT } from "~~/server/libs/jwt"

export const FAKE_DB_USER = {
  id: "1",
  username: "admin",
  password: "password",
  email: "test@example.com",
  isAdmin: true,
}

export default defineEventHandler(async (event) => {
  const { username, password }: LoginFormData = await readBody(event)

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing username or password",
    })
  }

  if (
    username !== FAKE_DB_USER.username
    || password !== FAKE_DB_USER.password
  ) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    })
  }

  const jwtPayload = {
    sub: FAKE_DB_USER.username,
  }

  // generate JWT
  const token = generateJWT(jwtPayload)

  // save JWT in a cookie
  setCookie(event, "token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60, // 1 hour
  })

  return {
    id: FAKE_DB_USER.id,
    username: FAKE_DB_USER.username,
    email: FAKE_DB_USER.email,
    isAdmin: FAKE_DB_USER.isAdmin,
  }
})
