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
            // console.log(action.payload)
            state.data = action.payload
            state.activeGame = action.payload[0].name
            // state.activeTournament = action.payload[0].region[0].
            state.loading = false
        },
        changeActiveGame(state, action) {
            state.activeGame = action.payload
        },
        changeActiveTournament(state, action){
            state.activeTournament =   action.payload
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
