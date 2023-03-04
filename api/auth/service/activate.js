import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (userId) =>
  await prisma.auth.update({
    where: {
      id: userId
    },
    data: {
      isActivated: true
    },
    select: authDto.model
  })
