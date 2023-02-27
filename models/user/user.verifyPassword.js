import { verify } from 'argon2'

export const userVerifyPassword = async (userPassword, hashedPassword) =>
  await verify(userPassword, hashedPassword)
