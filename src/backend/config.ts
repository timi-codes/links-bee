export default {
  port: process.env.PORT || 4000,
  ttlInSeconds: process.env.CACHE_TTL || 0,
  frontend_url: process.env.FRONTEND_URL,
  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    templates: {
      welcome: process.env.MAILGUN_TEMPLATE_WELCOME || 'welcome',
    },
  },
  redis: {
    host: process.env.REDIS_HOST || "",
    port: process.env.REDIS_PORT || "",
    username: process.env.REDIS_PORT || 'default',
    password: process.env.REDIS_PASS || "",
    db: process.env.REDIS_DB || 0,
  },
  apollo: {
    apikey: process.env.APOLLO_KEY,
    variant: process.env.APOLLO_GRAPH_VARIANT,
    graphId: process.env.APOLLO_GRAPH_ID,
    tracing: /^true$/i.test(process.env.ENABLE_GRAPHQL_TRACING),
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_AUD,
    issuer: process.env.JWT_ISS,
    expiresIn: process.env.JWT_EXP || '14d',
  },
};
