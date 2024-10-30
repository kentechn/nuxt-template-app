import jwt from "jsonwebtoken"

interface JwtPayload {
  sub: string
}

const JWT_EXPIRY = "1h"

export function generateJWT(payload: JwtPayload) {
  return jwt.sign(payload, useRuntimeConfig().jwtSecretKey, {
    expiresIn: JWT_EXPIRY,
  })
}

export function verifyJWT(token: string) {
  return jwt.verify(token, useRuntimeConfig().jwtSecretKey)
}
