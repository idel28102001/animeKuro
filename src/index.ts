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
                ...Trailer
            }
        }
    }
`;

export const animeReview = gpl`

    query animeReview($id:ID) {
        animeReview(data:$id) {
            id
            related {
                ...Related
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
                ...FramesAndTrailer
            }
            similars {
                ...Similar
            }
            communitySections {
                id
                messages {
                    ...ReviewMessage
                }
            }
        }
    }

    query related($filter: Filter) {
        related(data:$filter) {
            ...Related
        }
    }

    query similars($filter: Filter) {
        similar(data:$filter) {
            ...Similar
        }
    }

    query characters($filter: Filter) {
        characters(data:$filter) {
            ...ProfileElement
        }
    }

    query authors($filter: Filter) {
        authors(data:$filter) {
            ...ProfileElement
        }
    }


    query frames($filter: Filter) {
        frames(data:$filter) {
            ...FramesAndTrailer
        }
    }


    query communityReview($filter: Filter) {
        comunityReview(data:$filter) {
            id
            messages {
                ...ReviewMessage
            }
        }
    }

    query discussion($filter: Filter) {
        discussion(data: filter) {
            id
            messages {
                ...AnimeMessage
            }
        }
    }

    mutation writeReview($body:ReviewBody) {
        writeReview(data: body) {
            ...ReviewMessage
        }
    }

    mutation startDiscussion($body:DiscussionBody) {
        startDiscussion(data: body) {
            ...AnimeMessage
        }
    }


    fragment Related on AnimePage {
        id
        title
        releaseDate
        type
        ...Photo
    }

    fragment FramesAndTrailer on AnimePage {
        trailer {
            ...Trailer
        }
        frames {
            ...Photo
        }
    }

    fragment Similar on AnimePage {
        id
        ...Photo
        title
        episodesCount
        releasedAt
        type
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

    fragment ReviewMessage on AnimePage {
        ...AnimeMessage
        userRate
        messageRate
    }

    fragment Trailer on AnimePage {
        id
        url
        duration
        frame {
            ...Photo
        }
    }

    fragment AnimeMessage on AnimePage {
        id
        text
        createdAt
        commentsCount
        from
    }
`;
console.log(animePage);