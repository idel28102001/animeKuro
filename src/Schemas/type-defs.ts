import {gql} from "apollo-server";
const typeDefs = gql`
    enum WatchListStatus {
        PLANNED
        WATCHING
        COMPLETED
        DELAYED
        DROPPED
    }

    enum MediaSort {
        ID
        ID_DESC
        TYPE
        TYPE_DESC
        SCORE
        SCORE_DESC
    }

    input MediaFilter {
        id: ID
        watchListStatus: WatchListStatus
        sort: MediaSort
    }







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