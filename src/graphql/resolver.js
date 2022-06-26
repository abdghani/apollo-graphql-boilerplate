import { userQuery, userMutation } from 'graphql/module/users/resolver'

export default {
  Query: {
    ...userQuery
  },

  Mutation: {
    ...userMutation
  }

  // MutationResponse: {
  //   __resolveType(mutationResponse, context, info) {
  //     return null
  //   }
  // }
}
