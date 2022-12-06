import {gql} from "apollo-server";
const typeDefs = gql`

    input FilterInput {
        offset: Int!
        limit: Int!
    }

    input FilterWithTypesInput {
        type: String!
        offset: Int!
        limit: Int!
    }

    input MockFilter {
        type: String
        offset: Int
        limit: Int
        search: String
    }
`;

export default typeDefs;