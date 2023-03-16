import { prisma } from '#prisma'

export default async ({ userId, ip, agent, token, secret }) => {
  const update = await prisma.session.updateMany({
    where: {
      userId,
      ip,
      agent
    },
    data: {
      token,
      secret
    }
  })

  if (update && update.count) {
    return update
  }

  return await prisma.session.create({
    data: {
      userId,
      ip,
      agent,
      token,
      secret
    }
  })
}
