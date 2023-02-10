export interface ISport {
    id: string
    name: string
    regions: Record<string, IRegion>
    matchesCount: number
}

export interface IRegion {
    id: string
    name: string
    tournaments: Record<string, ITournament>
    matchesCount: number
}

export interface ITournament {
    id: string
    name: string
    matches: Record<string, IMatch>
    matchesCount: number
}

export interface IMatch {
    _new?: boolean
    _id: string
    date: {
        start: number
        start_day: number
        start_hour: number
        start_pretty: string
    }
    home: {
        id: string
        alias: string
        name: string
        country: string
        abbreviation: string
        gender: string
        short_name: string
        country_code: string
        image?: {
            big: string
            small: string
            medium: string
            time: number
        }
    }
    away: {
        id: string
        alias: string
        name: string
        country: string
        abbreviation: string
        gender: string
        short_name: string
        country_code: string
        image?: {
            big: string
            small: string
            medium: string
            time: number
        }
    }
    status: {
        id: string
        alias: string
        name: string
        short_name: string
        origin_id: string
    }
    markets_count: number
    match_info?: {
        score: string
        scores?: Array<{
            score: string
            period: number
            type: string
        }>
        time?: string
    }
    region: IRegion
    sport: ISport
    tournament: ITournament
}
export interface IRouterParams {
    gameId?: string
    regionId?: string
    tournamentId?: string
}

