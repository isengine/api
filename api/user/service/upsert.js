import { faker } from '@faker-js/faker'
import { prisma } from '#prisma'
import userDto from '#api/user/user.dto'

export default async (data) => {
  const find = await prisma.user.findUnique({
    where: {
      userId: data.userId
    }
  })

  if (find) {
    return await prisma.user.update({
      where: {
        userId: data.userId
      },
      data: {
        email: data.email,
        name: data.name,
        avatar: data.avatar,
        locale: data.locale
      },
      select: userDto.model
    })
  }

  return await prisma.user.create({
    data: {
      userId: data.userId,
      email: data.email,
      name: data.name ?? faker.name.fullName(),
      avatar: data.avatar,
      locale: data.locale
    },
    select: userDto.model
  })
}
