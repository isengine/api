import { prisma } from '#prisma'
import { userModel } from '#services/user'

export const userRead = async (id) =>
  await prisma.user.findUnique({
    where: {
      id: id
    },
    select: userModel
  })
