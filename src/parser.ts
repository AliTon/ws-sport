// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
function parseData(data) {
    const result = []
    const sportMap = new Map()
    for (const match of data) {
        const sportId = match.sport.id
        if (!sportMap.has(sportId)) {
            sportMap.set(sportId, {
                id: sportId,
                name: match.sport.name,
                regionMap: new Map(),
                count: 0,
            })
        }
        const sport = sportMap.get(sportId)
        sport.count++

        const regionId = match.region.id
        if (!sport.regionMap.has(regionId)) {
            sport.regionMap.set(regionId, {
                id: regionId,
                name: match.region.name,
                tournamentMap: new Map(),
                count: 0,
            })
        }
        const region = sport.regionMap.get(regionId)
        region.count++

        const tournamentId = match.tournament.id
        if (!region.tournamentMap.has(tournamentId)) {
            region.tournamentMap.set(tournamentId, {
                id: tournamentId,
                name: match.tournament.name,
                games: [],
                count: 0,
            })
        }
        const tournament = region.tournamentMap.get(tournamentId)
        tournament.count++

        tournament.games.push({
            id: match._id,
            home: match.home,
            away: match.away,
            status: match.status,
            date: match.date,
            markets_count: match.markets_count,
            match_info: match.match_info,
        })
    }
    for (const sport of sportMap.values()) {
        result.push({
            id: sport.id,
            name: sport.name,
            regions: Array.from(sport.regionMap.values()),
            count: sport.count,
        })
    }
    return result
}

export default parseData
