import { z } from "zod"

export const usernameSchema = z
  .string({ required_error: "required" })
  .min(1, "required")

export const passwordSchema = z
  .string({ required_error: "required" })
  .min(1, "required")
  .min(8)
  .max(50)

export const loginFormSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
})
