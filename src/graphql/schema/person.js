
const { gql } = require('apollo-server-express');
const { persons } = require('../../repository/data');

const person = gql`

type Person {
    id: Int!
    name: String!
    age: Int!
  }

extend type Query {    
    getPersons: [Person!]! 
}

extend type Mutation {
    createPerson(name: String!, age: Int!): Person! 
}

`;

const personResolver = {
    Query: {
        async getPersons(root, { }, { }) {
            return persons;
        },
    },
    Mutation: {
        async createPerson(root, { name, age }, { }) {
            const person = { id: persons.length + 1, name, age };
            persons.push(person);           
            return person;
        }
    }
};


module.exports = { person, personResolver };
