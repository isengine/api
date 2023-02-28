import { feed } from './queries/feed.js'
import { post } from './queries/post.js'
import { createDraft } from './mutations/createDraft.js'
import { createUser } from './mutations/createUser.js'
import { publish } from './mutations/publish.js'
import { User } from './resolvers/user.js'
import { Post } from './resolvers/post.js'

export const resolvers = {
  Query: {
    feed,
    post
  },
  Mutation: {
    createDraft,
    createUser,
    publish
  },
  User,
  Post
}
