import { prisma } from '#prisma'

export default async ({ userId, ip, agent, token, secret }) =>
  await prisma.session.findFirst({
    where: {
      userId,
      ip,
      agent,
      token,
      secret
    }
  })
