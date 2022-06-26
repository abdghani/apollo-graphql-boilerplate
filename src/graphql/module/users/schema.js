import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    username: String!
    about: String
    verified: Boolean!
    role: String
  }

  type MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  type jwtToken {
    userId: ID
    accessToken: String
    refreshToken: String
    code: String!
    success: Boolean!
    message: String!
  }

  type Query {
    currentUser: User
  }

  type Mutation {
    login(email: String!, password: String!): jwtToken!
    signup(name: String, username: String!, email: String!, password: String!): MutationResponse!
  }
`

export default typeDefs
