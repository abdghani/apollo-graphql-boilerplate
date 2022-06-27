import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Post {
    _id: ID!
    title: String!
    content: String!
    createdBy: User!
    archieved: Boolean
    createdAt: Date!
    updatedAt: Date!
  }

  type PostPaginate {
    docs: [Post!]
    totalDocs: Int
    limit: Int
    totalPages: Int
    page: Int
    pagingCounter: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
    prevPage: Int
    nextPage: Int
  }

  input PostFilter {
    archieved: Boolean!
  }

  type Query {
    userPosts(paginateInput: PaginateInput, postFilter: PostFilter): PostPaginate
  }

  type Subscription {
    postCreated: Post
  }

  type Mutation {
    createPost(title: String!, content: String): Post!
  }

`

export default typeDefs
