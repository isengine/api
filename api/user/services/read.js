import { prisma } from '#prisma'
import { userModel } from '#api/user/user.models'

export const userRead = async (id) =>
  await prisma.user.findUnique({
    where: {
      id: id
    },
    select: userModel
  })
