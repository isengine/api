//import { feed } from './queries/feed.js'
//import { post } from './queries/post.js'
//import { createDraft } from './mutations/createDraft.js'
//import { createUser } from './mutations/createUser.js'
//import { publish } from './mutations/publish.js'
//import { User } from './resolvers/user.js'
//import { Post } from './resolvers/post.js'
import { prisma } from '#prisma'

export const resolvers = {
  Query: {
    getAllUsers: async () => await prisma.user.findMany(),
    getUser: async (parent, { id }) =>
      await prisma.user.findUnique({
        where: {
          id: parseInt(id, 10)
        }
      })
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      const currentDate = new Date().toISOString()
      return await prisma.user.create({
        data: {
          createdAt: currentDate,
          updatedAt: currentDate,
          email: input.email,
          name: input.name
        }
      })
    }
  }

  //Query: {
  //  feed,
  //  post
  //},
  //Mutation: {
  //  createDraft,
  //  createUser,
  //  publish
  //},
  //User,
  //Post
}
