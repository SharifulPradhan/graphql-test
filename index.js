import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res)=> {
  res.send('Graphql is amazing:');
});

const root = {student: () =>{
  return {
    "name": "Tony Mark",
    "class": 1,
    "rule": 10,
    "gender": "male",
    "age": 2,
    "classCaptain": false,
    "email": [
      {"email": "h1@turbo.com"},
      {"email": "h2@turbo.com"},
      {"email": "h3@turbo.com"},
    ]
  }
}};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));