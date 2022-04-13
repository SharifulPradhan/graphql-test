import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Student {
      id: ID
      name: String
      rule: Int
      gender: String
      age: Int
      classCaptain: Boolean
      email: String
    }

    type Query {
      student: Student
    }

    input StudentInput {
      id: ID
      name: String
      rule: Int
      gender: String
      age: Int
      classCaptain: Boolean
      email: String
    }

    type Mutation {
      createStudent(input: StudentInput): Student
    }
`
);

export default schema;