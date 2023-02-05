import { createSlice } from '@reduxjs/toolkit'
// import { getGamesAction } from '../actions/gamesActions'

export interface GamesState {
    data: any[];
    activeGame: string;
    activeTournament: string
    loading: boolean
}

const initialState: GamesState = {
    data: [],
    activeGame: "",
    activeTournament: "",
    loading: true,
}

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        getInitialGamesSuccess: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
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

export const { getInitialGamesSuccess } = gamesSlice.actions;
export default gamesSlice;
