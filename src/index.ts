import gpl from 'graphql-tag';


export const animePage = gpl`
    query generalAnimePageInfo($id: ID) {
        generalAnimePageInfo(data:$id) {
            id
            title
            type
            episodesCount
            nextEpisodeRealiseDate
            status {
                dateFrom
                dateTo
                slug
            }
            genres
            rate
            description
            imageObj {
                heroImage {
                   ...Photo 
                }
                mainImage {
                    ...Photo
                }
            }
            sections {
                id
                name
            }
            studioIcon {
                img
                name
            }
            frames {
                duration
                frames
            }
        }
    }
`;

export const animeReview = gpl`

    query animeReview($id:ID) {
        animeReview(data:$id) {
            id
            related
            charachters
            authors
            statistic
            frames
            similars
            communitySections
        }
    }

    query communityReview($filter: FilterCommunityReview) {
        comunityReview(data:$filter) {
            id
            messages {
                ...reviewMessage
            }
        }
    }

    query discussion($filter: FilterCommunityReview) {
        discussion(data: filter) {
            id
            messages {
                ...animeMessage
            }
        }
    }

    mutation writeReview($body:ReviewBody) {
        writeReview(data: body) {
            ...reviewMessage
        }
    }

    mutation startDiscussion($body:DiscussionBody) {
        startDiscussion(data: body) {
            ...animeMessage
        }
    }

    fragment Photo on AnimePage {
        id
        url
        name
    }

    fragment reviewMessage on AnimePage {
        ...animeMessage
        userRate
        messageRate
    }

    fragment animeMessage on AnimePage {
        id
        text
        createdAt
        commentsCount
        from
    }
`;
console.log(animePage);