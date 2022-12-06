import gpl from 'graphql-tag';



export const animePage = gpl`
    query media($id: ID!,         
        $relatedFilter: FilterWithTypesInput,
        $charactersFilter: FilterWithTypesInput,
        $authorsFilter: FilterInput,
        $framesFilter: FilterInput,
        $similarsFilter: FilterInput,
        ) {
        Media(input:$id) {
            id
            slug
            name
            originalName
            type
            episodesCount
            nextAiringEpisode {
                airingAt
            }
            status
            startDate {
                year
            }
            endDate {
                year
            }
            genres {
                id
                slug
                name
            }
            rating
            description
            bannerImage
            coverImage {
                extraLarge
                large
            }
            sections {
                id
                name
            }
            studioIcon {
                url
                name
            }
            trailer {
                ...Trailer
            }
            related(input: $relatedFilter) {
                id
                title
                count
                types {
                    id
                    slug
                }
                elements {
                    id
                    title
                    releaseDate
                    type
                    image {
                        large {
                            ...Photo
                        }
                        extraLarge {
                            ...Photo
                        }
                    }
                } 
            }
            characters(input: $charactersFilter) {
                id
                title
                count
                types {
                    id
                    slug
                }
                ...ProfileElement
            }
            characterPreview {
                edge {
                    id
                    role
                    name {
                        userPreferred
                        original
                        english
                    }
                    description
                    voiceActor {
                        id
                        name {
                            userPreferred
                        }
                        role
                        language
                        image {
                            large
                        }
                    }
                }
            }
            authors(input: $authorsFilter) {
                id
                count
                elements: {
                    ...ProfileElement
                }
            }
            frames(input: $framesFilter) {
                trailer {
                    ...Trailer
                }
                coverImage {
                    large {
                        ...Photo
                    }
                    extraLarge {
                        ...Photo
                    }
                }
            }
            similiars(input: $similarsFilter) {
                id
                image {
                    large {
                        ...Photo
                    }
                }
                title
                episodesCount
                releasedAt
                type
            }
        }
    }

    fragment ProfileElement on AnimePage {
        id
        title
        image {
            large {
                ...Photo
            }
        }
    }
    fragment Trailer on AnimePage {
        id
        url
        duration
        frame {
            large {
                ...Photo
            }
        }
    }
    fragment Photo on AnimePage {
        id
        url
    }
`;
console.log(animePage);