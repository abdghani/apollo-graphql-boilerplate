import generalSchema from 'graphql/schema'
import userSchema from 'graphql/module/users/schema'
import postSchema from 'graphql/module/posts/schema'

const typeDefs = [generalSchema, userSchema, postSchema]

module.exports = typeDefs
