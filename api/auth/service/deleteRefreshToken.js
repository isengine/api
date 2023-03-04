import { prisma } from '#prisma'
import authDto from '#api/auth/auth.dto'

export default async (refreshToken) =>
  await prisma.auth.updateMany({
    where: {
      refreshToken
    },
    data: {
      refreshToken: null
    }
  })
