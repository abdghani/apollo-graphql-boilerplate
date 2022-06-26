import { userQuery, userMutation } from 'graphql/module/users'
import { postQuery, postMutation } from 'graphql/module/posts'

export default {
  Query: {
    ...userQuery,
    ...postQuery
  },

  Mutation: {
    ...userMutation,
    ...postMutation
  }
}
