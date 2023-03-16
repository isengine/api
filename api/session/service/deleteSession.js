import { prisma } from '#prisma'

export default async ({ userId, ip, agent }) =>
  await prisma.session.deleteMany({
    where: {
      userId,
      ip,
      agent
    }
  })
