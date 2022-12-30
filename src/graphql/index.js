const { gql } = require('apollo-server-express');
const GraphQLJSON = require('graphql-type-json');
const { makeExecutableSchema } = require('graphql-tools');
const { person, personResolver } = require('./schema/person');
const { post, postResolver } = require('./schema/post');

//Generic
const typeDef = gql`
scalar Date   
scalar JSON

type Query{
    _empty: String
}
type Mutation {
    _empty: String
}

`;

const typeDefs = [typeDef, person, post];

const resolveFunctions = {
    JSON: GraphQLJSON
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers: [resolveFunctions, personResolver, postResolver]
})

module.exports = schema;