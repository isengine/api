import { prisma } from '#prisma'

export default async (confirmCode) =>
  await prisma.confirm.findUnique({
    where: {
      confirmCode
    }
  })
