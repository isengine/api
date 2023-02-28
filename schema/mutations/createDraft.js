import { prisma } from '#prisma'

export const createDraft = (parent, args) => prisma.post.create({
  data: {
    title: args.title,
    content: args.content,
    published: false,
    author: args.authorEmail && {
      connect: { email: args.authorEmail },
    },
  },
})
