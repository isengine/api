import { prisma } from '../../prisma/prisma.js'

export const userFind = async (email) =>
  await prisma.user.findUnique({
    where: {
      email
    }
  })
