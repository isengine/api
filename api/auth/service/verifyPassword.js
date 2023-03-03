import { verify } from 'argon2'

export default async (password, hashedPassword) =>
  await verify(password, hashedPassword)
