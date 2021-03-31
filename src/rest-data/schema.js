const { gql } = require('apollo-server');

const typeDefs = gql`
    type Restaurant {
        id: String,
        name: String
    }
    extend type Query {
        getRestaurant(id: String): Restaurant
        getRestaurantList: [Restaurant]
    }
`;

module.exports = typeDefs;