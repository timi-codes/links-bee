const { PrismaClient } = require('@prisma/client');
let prisma;
const env = [];

if (env.includes(process.env.NODE_ENV)) {
    prisma = new PrismaClient({
        log: [{
            emit: 'stdout',
            level: 'query'
        }],
    });
} else {
    prisma = new PrismaClient();
}

module.exports = prisma;
