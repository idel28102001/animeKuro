export default `
    enum MediaGenre {
        DETECTIVE
        POLICE
        PSYCHOLOGICAL
        SENEN
        SUPERNATURAL
    }

    enum MediaType {
        ANIME
        MANGA
    }

    enum MediaRating {
        G
        PG
        PG_13
        R
        NC_17
        R_17
    }

    enum MediaSeason {
        WINTER
    }

    enum WatchListStatus {
        PLANNED
        WATCHING
        COMPLETED
        DELAYED
        DROPPED
    }

    enum MediaSort {
        ID
        ID_DESC
        TYPE
        TYPE_DESC
        SCORE
        SCORE_DESC
    }

    enum MediaFormat {
        TV
        TV_SHORT
        MOVIE
        SPECIAL
        OVA
        ONA
        MUSIC
        MANGA
        NOVEL
        ONE_SHOT
    }

    enum MediaStatus {
        FINISHED
        RELEASING
        NOT_YET_RELEASED
        CANCELLED
        HIATUS
    }

    enum MediaRelation {
        ADAPTATION
        PREQUEL
        SEQUEL
        PARENT
        SIDE_STORY
        CHARACTER
        SUMMARY
        ALTERNATIVE
        SPIN_OFF
        OTHER
        SOURCE
        COMPILATION
        CONTAINS
    }
`;