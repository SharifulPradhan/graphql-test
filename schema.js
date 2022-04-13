import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Student {
      name: String
      class: Int
      rule: Int
      gender: String
      age: Int
      classCaptain: Boolean
    }

    type Query {
      student: Student
    }
`
);

export default schema;