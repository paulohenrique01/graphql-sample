const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { createServer } = require('http');
const schema = require('./graphql/index');

const app = express();
app.use(cors({ origin: '*' }));


const server = new ApolloServer({
  schema, context: (context) => {
    return {
      ...context      
    }
  },
  playground: true
});

const httpServer = createServer(app);

server.applyMiddleware({ app });

const port = 4000;

httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
});
