import { ApolloServer } from '@apollo/server'
import { resolvers, typeDefs } from './schema.js'

export const apollo = new ApolloServer({
  typeDefs,
  resolvers
})
