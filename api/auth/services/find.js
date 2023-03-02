import { prisma } from '#prisma'

export const authFind = async (login) =>
  await prisma.auth.findUnique({
    where: {
      login
    }
  })
