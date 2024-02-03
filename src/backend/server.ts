import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';

import config from './config';
// import prisma from './database';
import { typeDefs, resolvers } from './graphql';

interface MyContext {
  token?: String;
}

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

server.start().then(()=>{
  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
})

async function shutdown(serverApp : http.Server) {
  console.info('Received kill signal, shutting down gracefully'); // eslint-disable-line no-console
  // await prisma.$disconnect();
  serverApp.close();
  return process.exit();
}

export {
  httpServer,
  server,
  config,
  shutdown,
}
