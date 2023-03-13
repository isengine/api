import { prisma } from '#prisma'

export default async (userId, confirmCode) =>
  await prisma.confirm.upsert({
    where: {
      userId
    },
    create: {
      userId,
      confirmCode
    },
    update: {
      confirmCode
    }
  })
