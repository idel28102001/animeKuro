import typeDefs from './Schemas/type-defs';
import gpl from 'graphql-tag';

export const animePage = gpl`
    query animeMedia(
        $id: ID,
        $watchListStatus: WatchListStatus
        $sort: MediaSort         
        $relatedFilter: FilterWithTypesInput,
        $charactersFilter: FilterWithTypesInput,
        $authorsFilter: FilterInput,
        $framesFilter: FilterInput,
        $similarsFilter: FilterInput,
        ) {
        animeMedia(input:$id) {
            media {
                id
                slug
                name {
                    userPreferred
                    native
                }
                type
                episodesCount
                nextAiringEpisode {
                    airingAt
                }
                status
                date {
                    startYear
                    endYear
                }
                genres {
                    id
                    slug
                    name
                }
                score
                description
                image
                sections {
                    id
                    name
                }
                studioIcon {
                    id
                    url
                    name
                }
            }
            related(input: $relatedFilter) {
                id
                title
                count
                types {
                    id
                    slug
                }
                edges {
                    id
                    title
                    releaseDate
                    type
                    image
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
                edges {
                    ...ProfileElement
                }
            }
            characterPreview {
                edge {
                    id
                    role
                    name {
                        userPreferred
                        native
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
                        image
                    }
                }
            }
            authors(input: $authorsFilter) {
                id
                count
                edges {
                    ...ProfileElement
                }
            }
            frames(input: $framesFilter) {
                trailer {
                    id
                    site
                }
                image
            }
            similiars(input: $similarsFilter) {
                id
                image
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
        image
    }
`;


const animeCharacher = gpl`
    query animeCharacher(
        $id: ID,
        $relatedFilter: FilterInput,
        $framesFilter: FilterInput
        ) {
        characher(id: $id) {
            id
            name {
                userPreferred
                native
                english
            }
            image
            role
            description
            voiceActor {
                id
                name {
                    userPreferred
                }
                role
                image
            }
            related(input: $relatedFilter) {
                id
                title
                count
                types {
                    id
                    slug
                }
                edges {
                    id
                    title
                    releaseDate
                    type
                    image
                } 
            }
            frames(input: $framesFilter) {
                trailer {
                    id
                    site
                }
                image
            }
        }
    }
`;

const animeSearch = gpl`
    query animeSearch($filter: MockFilter) {
        animeSearch(filter: $filter) {
            id
            slug
            image
            node {
                name {
                    userPreferred
                    native
                }
                type
                properties {
                    id
                    episodesCount
                    releaseYear
                    seriesType
                }
            }
        }
    }
`;

console.log(animeSearch);