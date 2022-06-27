import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { validateTokenSubsMiddleware } from 'graphql/middleware/validateToken'


import typeDefs from 'graphql/typedef'
import resolvers from 'graphql/resolver'



const apolloServer = async app => {
  const httpServer = createServer(app);
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const apolloServer = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
    playground: true,
    // introspection: true,
    context: ({ req, res }) => ({ req, res }),
    cors: false,
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer }),

      // Proper shutdown for the WebSocket server.
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      }
    ],
  })

  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.
    server: httpServer,
    // Pass a different path here if your ApolloServer serves at
    // a different path.
    path: '/graphql',
  });
  const serverCleanup = useServer({
    schema, context: validateTokenSubsMiddleware,
  }, wsServer);


  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: '/graphql', cors: false })
  return httpServer
}

module.exports = apolloServer
