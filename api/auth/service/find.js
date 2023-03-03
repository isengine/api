import { prisma } from '#prisma'

export default async (login) =>
  await prisma.auth.findUnique({
    where: {
      login
    }
  })
