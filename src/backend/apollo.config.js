const { port } = require('./config');

module.exports = {
  service: {
    name: 'links.bee-api',
    endpoint: {
      url: `http://localhost:${port}/graphql`,
    },
  },
};
