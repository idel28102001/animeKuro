import {gql} from "apollo-server";
const typeDefs = gql`

    type Title {
        original: String!
        local: String!
    }

    enum AnimeType {
        TV
        OVA
    }

    enum StatusEnum {
        REALEASED
        PENDING
    }

    type Status {
        dateFrom: Date!
        dateTo: Date
        slug: StatusEnum
    }

    enum Genre {
        PSYCHOLOGY
        SENEN
        DETECTIVE
    }

    enum Rating {
        PG13
        R_17
    }

    type Image {
        id: ID
        name: String
        url: String
    }

    type FilterCommunityReview {
        animeId: Number
        offset: Number
        limit: Number
    }

    enum LikeDislike {
        Like
        Dislike
    }
    
    type DiscussionBody {
        animeId: ID
        text: String
    }

    type ReviewBody {
        animeId: ID
        text: String
        rate: LikeDislike
    }

    type AnimeImage {
        heroImage: Image!
        mainImage: Image!
    }

    enum SectionEnum {
        REVIEW
        CHARACTERS
    }

    type Trailer {
        id: ID!
        url: String!
        frame: Image!
        duration: Number
    }

    AnimePage {
        generalAnimePageInfo(input: PageId) {
            id: ID!
            title: Title!
            type: AnimeType!
            episodesCount: Number!
            nextEpisodeRealiseDate: String
            status: Status!
            genres: [Genre!]
            rating: Rating!
            rate: Float
            description: String!
            imageObj: AnimeImage!
            sections: [SectionEnum!]!
            studioIcon: Image!
            frames: [Image!]! 
            trailer: Trailer
        }
    }
`;

export default typeDefs;