import { prisma } from '#prisma'

export default async (userId) =>
  await prisma.user.findUnique({
    where: {
      userId
    }
  })
