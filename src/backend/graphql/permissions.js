const { ApolloError, AuthenticationError } = require('apollo-server-express');
const {
  rule, shield, not, or,
} = require('graphql-shield');
const { isEmpty } = require('lodash');

const isAuthenticated = rule()(
  async (parent, args, { auth, authErrorMessage }) => {
    if (auth) {
      return !isEmpty(auth.user);
    }
    if (authErrorMessage) {
      return new AuthenticationError(authErrorMessage);
    }
    return false;
  },
);

const permissions = shield({
  Query: {
    '*': isAuthenticated,
    getShortLinks: or(isAuthenticated, not(isAuthenticated)),
  },
  Mutation: {
    '*': isAuthenticated,
    shortenLink: or(isAuthenticated, not(isAuthenticated)),
  },
}, {
  fallbackError: (error, parent, args, context, info) => {
    if (error === null) {
      return new AuthenticationError('Not Authorized');
    }
    console.error('The resolver threw something that is not an error.'); // eslint-disable-line no-console
    console.error(`path: ${info.fieldName}, parent: ${parent}, args: ${args}`); // eslint-disable-line no-console
    console.error(error); // eslint-disable-line no-console
    return new ApolloError('Internal Server Error', 'ERR_INTERNAL_SERVER');
  },
});

module.exports = { permissions };
