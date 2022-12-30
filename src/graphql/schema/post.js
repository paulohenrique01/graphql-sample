
const { gql } = require('apollo-server-express');
const { posts } = require('../../repository/data');

const post = gql`

type Post {
    title: String!
    author: Person!
}

extend type Query {    
    getPosts: [Post!]! 
}

`;

const postResolver = {
    Query: {
        async getPosts(root, { }, { }) {
            return posts;
        },
    }
};


module.exports = { post, postResolver };
