import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (userId, confirmCode) =>
  await prisma.auth.update({
    where: {
      id: userId
    },
    data: {
      confirmCode
    },
    select: authDto.model
  })
