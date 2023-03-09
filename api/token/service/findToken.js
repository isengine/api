import { prisma } from '#prisma'

export default async (token) =>
  await prisma.token.findFirst({
    where: {
      token
    }
  })
