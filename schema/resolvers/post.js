import { prisma } from '#prisma'

export const Post = {
  author: (parent, args) => prisma.post
    .findUnique({
      where: { id: parent.id },
    })
    .author()
}
