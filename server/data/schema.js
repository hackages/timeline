import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';


let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'data',
    fields: () => ({
      counter: {
        type: GraphQLInt,
        resolve: () => 42
      },
      message: {
        type: GraphQLString,
        resolve: () => "Hello Hackages"
      }
    }),
  }),
});

export default schema;
