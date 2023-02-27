import { prisma } from '../../prisma/prisma.js'
import { userModel } from './user.model.js'

export const userRead = async (id) =>
  await prisma.user.findUnique({
    where: {
      id: id
    },
    select: userModel
  })
