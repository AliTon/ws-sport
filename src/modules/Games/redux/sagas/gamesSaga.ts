import {call, Effect, put, take, takeEvery} from '@redux-saga/core/effects'
import {initGameSocketAction, IRouterParams} from '../actions/gamesActions'
import SportSocket from "../../service/SportSocket";
import {eventChannel} from "@redux-saga/core";
import {getInitialGamesSuccess, updateMatches} from "../slices/gamesSlice";
import gameDataAdapter from "../adapters/gameDataAdapter";
import {IMatch} from "../../interfaces";
import {PayloadAction} from "@reduxjs/toolkit";

function initSocket({gameId, regionId, tournamentId}: IRouterParams) {
    console.log(gameId, regionId, tournamentId)
    return eventChannel(emitter => {
        // init the connection here
        const ws = new SportSocket('FF32862C-84F7-1276-CC06-ashkdhsa')

        ws.onGettingMatches = (games: IMatch[]) => {
            const firstMatch: IMatch = games[0];
            console.log(games, "sagaaaaga")
            return emitter(getInitialGamesSuccess({
                games: gameDataAdapter(games) as unknown,
                activeGameId: gameId || firstMatch.sport.id,
                activeRegionId: regionId || firstMatch.region.id,
                activeTournamentId: tournamentId || firstMatch.tournament.id
            }))
        }

        ws.onUpdateMatches = (games: IMatch[]) => {
            return emitter(updateMatches(games))
        }
        // unsubscribe function
        return () => {
            // ws.close()
        }
    })
}

function* gameSocketSagas({
                              payload,
                          }: PayloadAction<IRouterParams>): Generator<Effect> {
    console.log(payload, ">>>>>>>>>>>>>> payload")
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const channel = yield call(initSocket, payload.params)
    while (true) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const action = yield take(channel)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        yield put(action)
    }
}

export default function* watchGamesSaga() {
    yield takeEvery(initGameSocketAction.type, gameSocketSagas)
}




