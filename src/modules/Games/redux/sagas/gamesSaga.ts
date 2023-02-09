import {call, put, take, takeEvery} from '@redux-saga/core/effects'
import { initGameSocket} from '../actions/gamesActions'
import SportSocket from "../../service/SportSocket";
import {eventChannel} from "@redux-saga/core";
import {getInitialGamesSuccess, updateMatches} from "../slices/gamesSlice";
import gameDataAdapter from "../adapters/gameDataAdapter";
import {IMatch} from "../../interfaces";

function initSocket() {
    return eventChannel( emitter => {
        // init the connection here
        const ws = new SportSocket('FF32862C-84F7-1276-CC06-ashkdhsa')

        ws.onGettingMatches = (games: IMatch[]) => {
            const firstMatch: IMatch = games[0];
            return emitter(getInitialGamesSuccess({
                games: gameDataAdapter(games) as unknown,
                activeGameId: firstMatch.sport.id,
                activeRegionId: firstMatch.region.id,
                activeTournamentId: firstMatch.tournament.id
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

function* gameSocketSagas() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const channel = yield call(initSocket)
    while (true) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const action = yield take(channel)
        yield put(action)
    }
}

export default function* watchGamesSaga() {
    yield takeEvery(initGameSocket.type, gameSocketSagas)
}




