import { GraphQLScalarType } from 'graphql';
import  { Kind } from 'graphql/language';
// import Sugar from 'sugar-date';

export default {
  // Date: new GraphQLScalarType({
  //   name: 'Date',
  //   description: 'Date custom scalar type',
  //   parseValue(value) {
  //     return Sugar.Date.create(value, { setUTC: true });
  //   },
  //   serialize(value) {
  //     return Sugar.Date.create(value, { setUTC: true });
  //   },
  //   parseLiteral(ast) {
  //     if (ast.kind === Kind.STRING) {
  //       return Sugar.Date.create(ast.value, { setUTC: true });
  //     }
  //     return null;
  //   },
  // }),
};
