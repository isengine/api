import { prisma } from '#prisma'

export default async ({ ip, agent, token }) =>
  await prisma.session.findFirst({
    where: {
      ip,
      agent,
      token
    }
  })
