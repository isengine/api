import { prisma } from '#prisma'

export default async ({ userId, token, agent, ip }) => {
  const update = await prisma.token.updateMany({
    where: {
      userId,
      agent,
      ip
    },
    data: {
      token
    }
  })

  if (update && update.count) {
    return update
  }

  return await prisma.token.create({
    data: {
      userId,
      token,
      agent,
      ip
    }
  })
}
