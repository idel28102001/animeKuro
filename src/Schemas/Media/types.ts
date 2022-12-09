export default `
    scalar Date
    type MediaTitle {
        romaji: String
        english: String
        native: String
        userPreferred: String
    }
    type MediaReleaseDate {
        startYear: Date
        endYear: Date
    }

    type AiringSchedule {
        id: ID!
        airingAt: Int!
        timeUntilAiring: Int!
        episode: Int!
        mediaId: ID!
        media: Media
    }

    type MediaEdge {
        node: Media
        id: ID
        relationType: MediaRelation
        characters: [Character]
        characterRole: CharacterRole
        characterName: String
        roleNotes: String
        dubGroup: String
        staffRole: String
        voiceActors(language: StaffLanguage): [Staff]
        voiceActorRoles(language: StaffLanguage): [StaffRoleType]
        favouriteOrder: Int
    }

    type MediaConnection {
        edges: [MediaEdge]
        node: [Media]
        pageInfo: PageInfo
    }

    type MediaTrailer {
        id: ID
        thumbnail: String
    }

    type MediaFrame {
        id: ID
        image: String
    }

    type Media {
        id: ID!
        slug: String
        title: MediaTitle
        episodes: Int
        nextAiringEpisode: AiringSchedule
        format: MediaFormat
        status: MediaStatus
        trailer: MediaTrailer
        genres: [MediaGenre]
        duration: Int
        description: String
        date: MediaReleaseDate
        rating: MediaRating
        relations: MediaConnection
        characters(sort: [CharacterSort]
                    role: CharacterRole
                    page: Int
                    perPage: Int): CharacterConnection
        staff(sort: [StaffSort]): StaffConnection
        isFavourite: Boolean!
        frames: [MediaFrame]
        similars(
            sort: [SimilarSort],
            page: Int
            perPage: Int): SimilarConnection
    }
`;