import type { AuthUser } from "~/interfaces/auth"

export default defineEventHandler(async (event) => {
  console.log("event.context.user:")
  console.log(event.context.user)

  const username: string = event.context.user.username ?? ""

  if (!username) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    })
  }

  const user: AuthUser = {
    id: "12345",
    username,
    email: "test@test.com",
    isAdmin: true,
  }

  return user
})
