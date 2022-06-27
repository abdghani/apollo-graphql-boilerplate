import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import Debug from 'debug';
const debug = Debug('API:app');
import { validateTokensMiddleware } from 'graphql/middleware/validateToken'
import initMiddleware from 'config/middleware';
import apolloServer from 'graphql'

// cors
import corsConfig from 'config/cors'
import initDatabase from 'config/database'

// main app
const app = express();

// initialize app
const initApp = async app => {

  // adding middlewares
  initMiddleware(app)
  // initializing database
  initDatabase()
  // cors
  app.use(cors(corsConfig));
  // Cookie Parser
  app.use(cookieParser());
  app.use(validateTokensMiddleware);

  // httpServer
  const server = await apolloServer(app)

  // listening to server
  server.listen(process.env.PORT || '3000',
    () => debug(`Server running on port ${process.env.PORT || 3000}`));
}

initApp(app)
