import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (userId, refreshToken) =>
  await prisma.auth.update({
    where: {
      id: userId
    },
    data: {
      refreshToken
    },
    select: authDto.model
  })
