import { hash } from 'argon2'
import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (login, password) =>
  await prisma.auth.create({
    data: {
      login,
      password: await hash(password)
    },
    select: authDto.model
  })
