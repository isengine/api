import { faker } from '@faker-js/faker'
import { hash } from 'argon2'

import { prisma } from '#prisma'
import { userModel } from '#api/user/models'

export const userCreate = async (email, password) =>
  await prisma.user.create({
    data: {
      email,
      password: await hash(password),
      name: faker.name.fullName()
    },
    select: userModel
  })
