import userSchema from 'graphql/module/users/schema'
import postSchema from 'graphql/module/posts/schema'

const typeDefs = [
    userSchema,
    postSchema
]

module.exports = typeDefs
