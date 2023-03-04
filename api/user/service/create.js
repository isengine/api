import { faker } from '@faker-js/faker'
import { prisma } from '#prisma'
import userDto from '#api/user/user.dto'

export default async (data) =>
  await prisma.user.create({
    data: {
      userId: data.id,
      email: data.email,
      name: faker.name.fullName()
    },
    select: userDto.model
  })
