import { prisma } from '#prisma'

export default async (token) =>
  await prisma.token.updateMany({
    where: {
      token
    },
    data: {
      token: null
    }
  })
