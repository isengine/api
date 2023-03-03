import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (id) =>
  await prisma.auth.findUnique({
    where: {
      id: id
    },
    select: authDto.model
  })
