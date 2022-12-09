import mediaInputs from "../../InputTypes/media";

export default `
    type StaffName {
        first: String
        middle: String
        last: String
        full: String
        native: String
        alternative: [String]
        userPreferred: String
    }

    type DateLiving {
        birth: Date
        death: Date
    } 

    type Staff {
        id: ID!
        name: StaffName
        image: String
        description: String
        gender: String
        dateLiving: DateLiving
        siteUrl: String
        staffMedia(
            sort: [MediaSort]
            type: MediaType
            onList: Boolean
            page: Int
            perPage: Int
            ): MediaConnection
        characters(sort: [CharacterSort]
            page: Int
            perPage: Int): CharacterConnection
        characterMedia(
            sort: [MediaSort]
            onList: Boolean
            page: Int
            perPage: Int): MediaConnection
    }

    type StaffEdge {
        node: Staff
        id: ID
        role: String
    }

    type StaffConnection {
        edges: [StaffEdge]
        nodes: [Staff]
        pageInfo: PageInfo
    }

    type StaffRoleType {
        voiceActor: Staff
        rolesNotes: String
        dubGroup: String
    }
`;