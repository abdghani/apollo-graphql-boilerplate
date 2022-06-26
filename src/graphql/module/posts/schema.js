import { gql } from 'apollo-server-express'

const typeDefs = gql`
  scalar ISODate

  type Post {
    _id: ID!
    title: String!
    content: String!
    createdBy: User!
    archieved: Boolean
    createdAt: ISODate!
    updatedAt: ISODate!
  }

  type Query {
    userPosts: [Post!]
  }

  type Mutation {
    createPost(title: String!, content: String): MutationResponse!
  }
`

export default typeDefs
