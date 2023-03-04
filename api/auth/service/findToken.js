import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (refreshToken) =>
  await prisma.auth.findFirst({
    where: {
      refreshToken
    },
    select: authDto.model
  })
