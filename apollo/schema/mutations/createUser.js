import { prisma } from '#prisma'

export const createUser = (parent, args) => prisma.user.create({
  data: {
    email: args.data.email,
    name: args.data.name,
    posts: {
      create: args.data.posts,
    },
  },
})
