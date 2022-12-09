import mediaInputs from "../../InputTypes/media";

export default `
    type SimilarEdge {
        node: Similar
    }

    type Similar {
        id: ID
        mediaFrom: Media
        mediaSimilar: Media
    }

    type SimilarConnection {
        edges: [SimilarEdge]
        nodes: [Similar]
        pageInfo: PageInfo
    }
`;