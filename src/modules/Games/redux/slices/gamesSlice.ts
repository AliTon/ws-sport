import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {ISport} from "../../interfaces";
import gameDataAdapter from "../adapters/gameDataAdapter";
// import { getGamesAction } from '../actions/gamesActions'

export interface GamesState {
    data: ISport[];
    activeGameId: string;
    activeRegionId: string;
    activeTournamentId: string
    loading: boolean
}

const initialState: GamesState = {
    data: [],
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
            state.data = games
            state.activeGameId = activeGameId
            state.activeRegionId = activeRegionId
            state.activeTournamentId = activeTournamentId
            state.loading = false
        },
        changeActiveGame(state, action) {
            state.activeGameId = action.payload
        },
        changeActiveTournament(state, action: PayloadAction<{id: string, regionId: string}>){
            state.activeTournamentId =  action.payload.id
            state.activeRegionId =  action.payload.regionId
        }
    },
    extraReducers: {
        // [getGamesAction.type as string]: (state: GamesState) => {
        //     state.loading = true
        // },
        // [getNewsFeedAction.type as string]: (state: GamesState) => {
        //     state.loading = true
        // },
    },
})

export const { getInitialGamesSuccess, changeActiveGame, changeActiveTournament } = gamesSlice.actions;
export default gamesSlice;
