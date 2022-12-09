export default `
    input MediaFilter {
        id: ID
        watchListStatus: WatchListStatus
        sort: MediaSort
    }

    input MediaInput {
        id: ID
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