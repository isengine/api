import { faker } from '@faker-js/faker'
import { prisma } from '#prisma'
import userDto from '#api/user/user.dto'

export default async (auth) =>
  await prisma.user.create({
    data: {
      userId: auth.id,
      email: auth.login,
      name: faker.name.fullName()
    },
    select: userDto.model
  })
