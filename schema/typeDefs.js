export const typeDefs = `#graphql
  type Auth {
    id:           ID!
    createdAt:    String!
    updatedAt:    String!
    login:        String!
    password:     String!
    refreshToken: String
    confirmCode:  String
    isActivated:  Boolean!
    user:         [User!]!
  }

  type User {
    id:           ID!
    createdAt:    String!
    updatedAt:    String!
    userId:       Int
    email:        String!
    name:         String!
    posts:        [Post]
  }

  type Post {
    id:           ID!
    createdAt:    String!
    updatedAt:    String!
    title:        String!
    content:      String
    published:    Boolean!
  }

  type Query {
    getAllUsers: [User]
    getUser(id: ID): User
    getAllPosts: [Post]
    getPost(id: ID): Post
  }

  type Mutation {
    createUser(input: UserInput): User
  }

  input UserInput {
    id:         ID
    createdAt:  String
    updatedAt:  String
    userId:     Int
    email:      String!
    name:       String!
  }

  input PostInput {
    id:         ID
    createdAt:  String
    updatedAt:  String
    title:      String!
    content:    String!
    published:  Boolean
  }

`
