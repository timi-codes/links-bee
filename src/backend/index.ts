import { httpServer, config, shutdown } from './server';


(async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port: config.port }, resolve));
})()

console.log(`🚀 Server ready at http://localhost:${config.port}/graphql`);

process.on('SIGINT', async () => {
  await shutdown(httpServer);
});

process.on('SIGTERM', async () => {
  await shutdown(httpServer);
});
