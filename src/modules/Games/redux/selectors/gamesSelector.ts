import { RootState } from '../../../../configureApp/configureStore'

//TODO IT CAN BE SHORTER

export const getGamesSelector = (state: RootState) => state.games.data
export const getActiveGameSelector = (state: RootState) => state.games.activeGameId;
export const getActiveRegionSelector = (state: RootState) => state.games.activeRegionId;
export const getActiveTournamentSelector = (state: RootState) => state.games.activeTournamentId;
export const getRegionsByActiveGameSelector = (state: RootState) => state.games.data[state.games.activeGameId] || {};
export const getActiveMatchesSelector =  (state: RootState) => state.games.data[state.games.activeGameId]?.regions[state.games.activeRegionId]?.tournaments[state.games.activeTournamentId] || {}

