import { prisma } from '#prisma'

export const feed = (parent, args) => prisma.post.findMany({
  where: { published: true },
})
