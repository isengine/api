import { prisma } from '#prisma'
import { authModel } from '#api/auth/models'

export const authRead = async (id) =>
  await prisma.auth.findUnique({
    where: {
      id: id
    },
    select: authModel
  })
