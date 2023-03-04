import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (confirmCode) =>
  await prisma.auth.findFirst({
    where: {
      confirmCode
    },
    select: authDto.model
  })
