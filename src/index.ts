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
                id
                url
                name
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
                        large
                        extraLarge
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
                elements {
                    ...ProfileElement
                }
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
                elements {
                    ...ProfileElement
                }
            }
            frames(input: $framesFilter) {
                trailer {
                    id
                    site
                }
                image {
                    large
                    extraLarge
                }
            }
            similiars(input: $similarsFilter) {
                id
                image {
                    large
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
            large
        }
    }
`;
console.log(animePage);