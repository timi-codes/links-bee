const path = require('path');
const { fileLoader, mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const { URLTypeDefinition, URLResolver } = require('graphql-scalars');

const typesArray = fileLoader(path.join(__dirname, './schema/**/*.graphql'));
const AllTypeDefs = mergeTypes([URLTypeDefinition, ...typesArray], { all: true });

const resolversArray = fileLoader(path.join(__dirname, './schema/**/*.resolver.js'));
const AllResolvers = mergeResolvers([{ URL: URLResolver }, ...resolversArray]);

module.exports = {
  typeDefs: AllTypeDefs,
  resolvers: AllResolvers,
};
