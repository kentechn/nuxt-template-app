import jwt from "jsonwebtoken"

export function generateToken(username: string) {
  const config = useRuntimeConfig()

  const payload = {
    username,
  }

  const jwtOptions: jwt.SignOptions = {
    algorithm: "HS256",
    expiresIn: "10s",
  }

  return jwt.sign(payload, config.jwtSecretKey, jwtOptions)
}

export function verifyToken(token: string) {
  const config = useRuntimeConfig()

  return jwt.verify(token, config.jwtSecretKey)
}
