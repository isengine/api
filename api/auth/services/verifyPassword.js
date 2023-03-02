import { verify } from 'argon2'

export const authVerifyPassword = async (password, hashedPassword) =>
  await verify(password, hashedPassword)
