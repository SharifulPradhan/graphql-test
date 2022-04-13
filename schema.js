import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        vaccine: Boolean
    }
`)

export default schema;