import { ApolloServer } from 'apollo-server-express'
import typeDefs from 'graphql/typedef'
import resolvers from 'graphql/resolver'

const apolloServer = async app => {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // introspection: true,
    playground: true,
    context: ({ req, res }) => ({ req, res }),
    cors: false // <- ADD
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql', cors: false })
}

module.exports = apolloServer
