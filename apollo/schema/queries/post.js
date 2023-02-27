import { prisma } from '#prisma'

export const post = (parent, args) => prisma.post.findUnique({
  where: { id: Number(args.id) },
})
