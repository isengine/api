import { prisma } from '#prisma'

export const userFind = async (email) =>
  await prisma.user.findUnique({
    where: {
      email
    }
  })
