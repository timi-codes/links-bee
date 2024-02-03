import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'
import { URLTypeDefinition, URLResolver } from 'graphql-scalars';

const typesArray = loadFilesSync(path.join(__dirname, './schema/**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, './schema/**/*.resolver.js'));

export const typeDefs = mergeTypeDefs([URLTypeDefinition, ...typesArray]);
export const resolvers = mergeResolvers([{ URL: URLResolver }, ...resolversArray]);