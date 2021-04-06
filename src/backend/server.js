const compression = require('compression');
const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const { applyMiddleware } = require('graphql-middleware');
const { RedisCache } = require('apollo-server-cache-redis');
const datasources = require('./graphql/datasources');
const config = require('./config');
const prisma = require('./database');
const { permissions } = require('./graphql/permissions');

const cache = new RedisCache(config.redis);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

const { typeDefs, resolvers } = require('./graphql');

const server = new ApolloServer({
  schema: applyMiddleware(
    makeExecutableSchema({
      typeDefs,
      resolvers,
    }),
    permissions,
  ),
  tracing: config.apollo.tracing,
  engine: {
    apiKey: config.apollo.apikey,
    variant: config.apollo.variant,
    reportSchema: true,
  },
  cache,
  dataSources: () => ({
    accounts: new datasources.Accounts(config),
    mailgun: new datasources.Mailgun(config.mailgun),
    token: new datasources.Token(),
  }),
  formatError: (err) => {
    if (err.extensions.code !== 'UNAUTHENTICATED' && err.extensions.code !== 'BAD_USER_INPUT') {
      console.error(JSON.stringify(err, null, 2)); // eslint-disable-line no-console
    }
    return err;
  },
  context: async ({ req }) => {
    const tokenSource = new datasources.Token();
    tokenSource.initialize({ cache });
    let auth = null;
    let authErrorMessage = null;
    try {
      auth = await tokenSource.getAuth({ req });
      if (!auth) {
        authErrorMessage = 'jwt expired';
      }
    } catch (error) {
      authErrorMessage = error.message;
    }

    return ({
      app,
      auth,
      authErrorMessage,
      prisma,
    });
  },
});

server.applyMiddleware({ app });

async function shutdown(serverApp) {
  console.info('Received kill signal, shutting down gracefully'); // eslint-disable-line no-console
  await prisma.$disconnect();
  await serverApp.close();
  return process.exit();
}

module.exports = {
  app,
  server,
  config,
  shutdown,
};
