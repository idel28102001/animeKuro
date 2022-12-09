import { ApolloServer } from "apollo-server";
import { GraphQLScalarType } from "graphql";
import typeDefs from './Schemas/index';
import DateScalar from "./Schemas/Scalars";
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    
  },
  ...DateScalar.resolver
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(8001).then((args: { url: string }) => {
  console.log(`🚀 Server ready at ${args.url}`);
});