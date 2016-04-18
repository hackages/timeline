import express from 'express';
import schema from './data/schema';
import { MongoClient } from 'mongodb';
import GraphQLHTTP from 'express-graphql';

const server = express();

const PORT = process.env.PORT || 9000;

server.use('/graphql', GraphQLHTTP({
  schema
}));

server.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
