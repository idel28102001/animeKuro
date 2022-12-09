export default `
    type CharacterName {
        first: String
        middle: String
        last: String
        full: String
        native: String
        alternative: [String]
        alternativeSpoiler: [String]
        userPreferred: String
    }

    type CharacterFrame {
        id: ID
        image: String
    }

    type Character {
        id: ID
        name: CharacterName
        image: String
        description: String
        gender: String
        dateOfBirth: Date
        age: String
        siteUrl: String
        relations(sort: [MediaSort]): MediaConnection
        frames: [CharacterFrame]
    } 

    type CharacterEdge {
        node: Character
        id: ID
        role: CharacterRole
        name: String
        voiceActors(language: StaffLanguage, sort: [StaffSort]): [Staff]
        voiceActorRoles(language: StaffLanguage, sort: [StaffSort]): [StaffRoleType]
        media: [Media]
    }

    type CharacterConnection {
        edges: [CharacterEdge]
        nodes: [Character]
        pageInfo: PageInfo
    }
`;