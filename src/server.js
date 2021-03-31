const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const RestaurantsAPI = require('./rest-data/data-source');

const restauarantTypeDef = require('./rest-data/schema');
const restaurantResolver = require('./rest-data/resolver');

const noteTypeDef = require('./grpc-data/schema');
const noteResolver = require('./grpc-data/resolver');

const Query = `
  type Query {
    _empty: String
  }
`;
const schema = makeExecutableSchema({
  typeDefs: [Query, restauarantTypeDef, noteTypeDef],
  resolvers: [restaurantResolver, noteResolver]
})
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    restaurantAPI: new RestaurantsAPI()
  })
});


server.listen(8080).then(() => {
  console.log(`
    API Gateway Server is running!
    Listening on port 8080
  `);
});