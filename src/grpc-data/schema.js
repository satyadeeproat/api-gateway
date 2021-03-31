const { gql } = require('apollo-server');

const typeDefs = gql`
    type Note {
        id: String,
        name: String
        address: String
    }
    extend type Query {
        getNotesList: [Note]
        getNote(id: String): Note
    }
`;

module.exports = typeDefs;