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
                url
                name
            }
            frames {
                ...Photo
            }
            trailer {
                ...trailer
            }
        }
    }
`;

export const animeReview = gpl`

    query animeReview($id:ID) {
        animeReview(data:$id) {
            id
            related {
                id
                title
                releaseDate
                type
                ...Photo
            }
            charachters {
                ...ProfileElement
            }
            authors {
                ...ProfileElement
            }
            statistic {
                id
                watchInfo {
                    id
                    usersCount
                    statuses {
                        id
                        slug
                        count
                    }
                }
                rateInfo {
                    id
                    averageRate
                    ratesCount
                    rates {
                        id
                        rateNumber
                        rateCount
                    }
                }
            }
            frames {
                trailer {
                    ...trailer
                }
                frames {
                    ...Photo
                }
            }
            similars {
                id
                ...Photo
                title
                episodesCount
                releasedAt
                type
            }
            communitySections {
                id
                messages {
                    ...reviewMessage
                }
            }
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

    fragment ProfileElement on AnimePage {
        id
        title
        ...Photo
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

    fragment trailer on AnimePage {
        id
        url
        duration
        frame {
            ...Photo
        }
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