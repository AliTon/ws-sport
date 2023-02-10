import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IMatch, ISport} from "../../interfaces";

export interface GamesState {
    data: Record<string, ISport>;
    activeGameId: string;
    activeRegionId: string;
    activeTournamentId: string
    loading: boolean
}

const initialState: GamesState = {
    data: {},
    activeGameId: "",
    activeRegionId: "",
    activeTournamentId: "",
    loading: true,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        getInitialGamesSuccess: (state, {payload: {games, activeGameId, activeTournamentId, activeRegionId}}: PayloadAction<{
            games: any,
            activeGameId: string,
            activeRegionId: string,
            activeTournamentId: string
        }>) => {
            console.log(games)
            state.data = games
            state.activeGameId = activeGameId
            state.activeRegionId = activeRegionId
            state.activeTournamentId = activeTournamentId
            state.loading = false
        },
        updateMatches(state, {payload}: PayloadAction<IMatch[]>){
            payload.forEach(game => {
                console.log(game)
                if(!game._new){
                    state.data[game.sport.id].regions[game.region.id].tournaments[game.tournament.id].matches[game._id].match_info = game.match_info
                }
            })
        },
        changeActiveGame(state, {payload}: PayloadAction<{id: string, regionId: string; tournamentId: string}>) {
            state.activeGameId = payload.id;
            state.activeRegionId = payload.regionId;
            state.activeTournamentId = payload.tournamentId
            // const activeGame = state.data[action.payload];
            // state.activeRegionId =
        },
        changeActiveTournament(state, action: PayloadAction<{id: string, regionId: string}>){
            state.activeTournamentId =  action.payload.id
            state.activeRegionId =  action.payload.regionId
        }
    }
})

export const { getInitialGamesSuccess, changeActiveGame, changeActiveTournament, updateMatches } = gamesSlice.actions;
export default gamesSlice;
