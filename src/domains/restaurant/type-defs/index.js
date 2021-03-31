const { mergeTypeDefs } = require('@graphql-tools/merge');
const query = require('./query.gql');
const mutation = require('./mutation.gql');
const types = require('./types.gql');

const typeDefs = [
  query,
  mutation,
  types
];

module.exports = mergeTypeDefs(typeDefs);