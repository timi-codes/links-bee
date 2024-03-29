// import 'dotenv/config'
import { ApolloServer, BaseContext } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express, { Request } from 'express';
import http from 'http';
import cors from 'cors';
import { typeDefs, resolvers } from './graphql';
import { PrismaClient } from '@prisma/client';
import { LinkDataSource } from './graphql/datasources';
import config from './config';
import prisma from './database';
import Redis, { CommonRedisOptions } from 'ioredis'
import KeyvRedis from "@keyv/redis";
import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import ReBloom from './utils/bloom-filter';

export interface AppContext {
  prisma: PrismaClient;
  dataSources: {
    link: LinkDataSource;
  }
}

class ContextValue {
  public prisma: PrismaClient
  public dataSources: {
    link: LinkDataSource;
  }
  constructor({ req }: { req: Request }) {
    this.prisma = prisma
    this.dataSources = {
      link: new LinkDataSource({ context: this }),
    };
  }
}


const app = express();
const httpServer = http.createServer(app);
let server = null;

console.log(config.redis)
// Configure Redis Bloom Filer with 1billion capacity
const redis = new Redis(config.redis as CommonRedisOptions);
const bf = new ReBloom(redis)
bf.reserve("link-exists", 0.01, 1000000000).then(()=>{
  console.log('🁜 Reserved Bloom Filter.');
}); 


const main = async()=>{
  server = new ApolloServer<AppContext & BaseContext>({
    typeDefs, 
    resolvers,
    introspection: true,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    cache: new KeyvAdapter(new Keyv({ store: new KeyvRedis(redis) })), 
  });
  
  await server.start()

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req } : {req: Request }) => new ContextValue({ req })
    }),
  );
}

main()

async function shutdown(serverApp : http.Server) {
  console.info('Received kill signal, shutting down gracefully'); // eslint-disable-line no-console
  await prisma.$disconnect();
  serverApp.close();
  return process.exit();
}

export {
  httpServer,
  server,
  config,
  shutdown,
}

