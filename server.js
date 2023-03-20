const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
 type Query{
    greeting:String
 }
 `
const resolvers = {
    Query: {
        greeting: () => {
            return "hello GraphQL"
        }
    }
};
const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen(8082);