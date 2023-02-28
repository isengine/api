import { prisma } from '#prisma'

export const publish = (parent, args) => prisma.post.update({
  where: {
    id: Number(args.id),
  },
  data: {
    published: true,
  },
})
