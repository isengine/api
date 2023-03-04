import { prisma } from '#prisma'
import userDto from '#api/user/user.dto'

export default async () =>
  await prisma.user.findMany({
    where: {},
    select: userDto.model
  })
