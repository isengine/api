import { faker } from '@faker-js/faker'
import { prisma } from '#prisma'
import userDto from '#api/user/user.dto'

export default async (data) =>
  await prisma.user.create({
    data: {
      userId: data.userId,
      email: data.email,
      name: data.name ?? faker.name.fullName(),
      avatar: data.avatar,
      locale: data.locale
    },
    select: userDto.model
  })
