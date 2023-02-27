import { prisma } from '#prisma'

export const User = {
  posts: (parent, args) => prisma.user
    .findUnique({
      where: { id: parent.id },
    })
    .posts()
}
