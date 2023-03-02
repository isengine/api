import { hash } from 'argon2'

import { prisma } from '#prisma'
import { authModel } from '#api/auth/models'

export const authCreate = async (login, password) =>
  await prisma.auth.create({
    data: {
      login,
      password: await hash(password)
    },
    select: authModel
  })
