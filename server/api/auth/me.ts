import { FAKE_DB_USER } from "./login.post"
import { verifyJWT } from "~~/server/libs/jwt"

export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token")

  const authError = createError({
    statusCode: 401,
    statusMessage: "Unauthorized, please login again",
  })

  if (!token) {
    throw authError
  }

  // verify JWT
  try {
    verifyJWT(token)
  }
  catch (e) {
    console.error(e)
    throw authError
  }

  return {
    id: FAKE_DB_USER.id,
    username: FAKE_DB_USER.username,
    email: FAKE_DB_USER.email,
    isAdmin: FAKE_DB_USER.isAdmin,
  }
})
