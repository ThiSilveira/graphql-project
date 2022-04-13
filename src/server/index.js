const { ApolloServer } = require("apollo-server");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolver");

const server = new ApolloServer({ resolvers, typeDefs });

server
  .listen()
  .then(({ url }) => console.log(`>>> 🚀  Server is running on ${url} <<<`)); 
