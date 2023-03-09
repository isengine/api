import { prisma } from '#prisma'

export default async (userId, token) =>
  await prisma.token.update({
    where: {
      userId
    },
    data: {
      token
    }
  })
