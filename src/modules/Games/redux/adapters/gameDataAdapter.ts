// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck

import { IMatch, ISport } from "../../interfaces";

export default function gameDataAdapter(data: IMatch[]): Record<string, ISport> {
    const result: Record<string, ISport> = {};
    for (const item of data) {
        const sportId = item.sport.id;
        if (!result[sportId]) {
            result[sportId] = { ...item.sport, matchesCount: 0 };
        }
        result[sportId].matchesCount += 1;

        const regionId = item.region.id;
        if (!result[sportId].regions) {
            result[sportId].regions = {};
        }
        if (!result[sportId].regions[regionId]) {
            result[sportId].regions[regionId] = { ...item.region, matchesCount: 0 };
        }
        result[sportId].regions[regionId].matchesCount += 1;

        const tournamentId = item.tournament.id;
        if (!result[sportId].regions[regionId].tournaments) {
            result[sportId].regions[regionId].tournaments = {};
        }
        if (!result[sportId].regions[regionId].tournaments[tournamentId]) {
            result[sportId].regions[regionId].tournaments[tournamentId] = { ...item.tournament, matches: {}, matchesCount: 0 };
        }
        result[sportId].regions[regionId].tournaments[tournamentId].matchesCount += 1;

        const matchId = item._id;

        if (!result[sportId].regions[regionId].tournaments[tournamentId].matches[matchId]) {
            result[sportId].regions[regionId].tournaments[tournamentId].matches[matchId] = { ...item  };
        }
    }
    return result;
}
