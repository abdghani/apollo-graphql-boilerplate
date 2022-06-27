import { gql } from 'apollo-server-express'

const typeDefs = gql`
  scalar Date

  input PaginateInput {
    limit: Int!
    page: Int!
  }
`

export default typeDefs
