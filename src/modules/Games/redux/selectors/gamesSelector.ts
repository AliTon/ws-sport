import { RootState } from '../../../../configureApp/configureStore'

export const getGamesSelector = (state: RootState) => state.games.data;
export const getActiveGameSelector = (state: RootState) => state.games.activeGame;
export const getActiveTournamentSelector = (state: RootState) => state.games.activeTournament;
export const getActiveMatchesSelector = (game: string, tournamentId: string ) => (state: RootState) => state.games.data.find(g => g.name === game)?.tournamentMap?.get(tournamentId)
;
export const getRegionsByGameSelector = (game: string) => (state: RootState) => state.games.data.find(g => g.name === game) || {}

