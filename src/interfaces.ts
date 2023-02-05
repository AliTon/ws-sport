export interface Match {
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
    }
    status: {
        id: string
        alias: string
        name: string
        short_name: string
        origin_id: string
    }
    markets_count: number
    match_info: {
        score: string
    }
    region: {
        id: string
        alias: string
        name: string
        order: number
    }
    sport: {
        id: string
        alias: string
        name: string
        order: number
    }
    tournament: {
        id: string
        alias: string
        name: string
        order: number
    }
}

export interface Region {
    id: string
    alias: string
    name: string
    order: number
    tournaments: Tournament[]
}

export interface Tournament {
    id: string
    alias: string
    name: string
    order: number
    games: Game[]
}

export interface Game {
    matches: Match[]
}
