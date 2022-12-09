import mediaInputs from "../../InputTypes/media";

export default `
    type PageInfo {
        total: Int
        perPage: Int
        currentPage: Int
        lastPage: Int
        hasNextPage: Boolean
    }

    type Page {
        media(${mediaInputs}): [Media]
    }
`;