import express from 'express';
import schema from './schema';
import { graphqlHTTP } from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
  res.send('Graphql is amazing:');
});

const studentDatabase = {};

class Student {
  constructor(id, { name, rule, gender, age, classCaptain, email }) {
    this.id = id;
    this.name = name;
    this.rule = rule;
    this.gender = gender;
    this.age = age;
    this.classCaptain = classCaptain;
    this.email = email;
  }
}

const root = {
  student: () => {
    return {
      "id": 45687925,
      "name": "Tony Mark",
      "rule": 10,
      "gender": "male",
      "age": 2,
      "classCaptain": false,
      "email": "h1@turbo.com",
    }
  },
  createFriend: ({input}) => {
    let id = require('crypto').randomBytes(10).toString('hex');
    studentDatabase[id] = input;
    return new Student(id, input);
  }
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));