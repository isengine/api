import { prisma } from '#prisma'

export default async (email) =>
  await prisma.user.findUnique({
    where: {
      email
    }
  })
