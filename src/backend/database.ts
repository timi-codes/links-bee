import { PrismaClient } from '@prisma/client';
import { DefaultArgs } from '@prisma/client/runtime/library';

let prisma: PrismaClient<{ log: { emit: "stdout"; level: "query"; }[]; }, never, DefaultArgs>;
const env = [];

if (env.includes(process.env.NODE_ENV)) {
  prisma = new PrismaClient({
    log: [{
      emit: 'stdout',
      level: 'query',
    }],
  });
} else {
  prisma = new PrismaClient();
}

export default prisma;
