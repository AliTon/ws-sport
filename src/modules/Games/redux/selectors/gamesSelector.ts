import { RootState } from '../../../../configureApp/configureStore'

export const getGamesSelector = (state: RootState) => state.games.data;
export const getRegionsByGameSelector = (game: string) => (state: RootState) => state.games.data.find(g => g.name === game) || {}

