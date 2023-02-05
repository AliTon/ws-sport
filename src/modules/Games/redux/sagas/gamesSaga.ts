import {call, put, take, takeEvery} from '@redux-saga/core/effects'
import { initGameSocket} from '../actions/gamesActions'
import SportSocket from "../../service/SportSocket";
import {eventChannel} from "@redux-saga/core";
import {getInitialGamesSuccess} from "../slices/gamesSlice";
import gameDataAdapter from "../adapters/gameDataAdapter";

function initSocket() {
    return eventChannel( emitter => {
        // init the connection here
        const ws = new SportSocket('FF32862C-84F7-1276-CC06-ashkdhsa')

        ws.onGettingMatches = (e: any) => {
            // dispatch an action with emitter here
            return emitter(getInitialGamesSuccess(gameDataAdapter(e)))
        }
        // unsubscribe function
        return () => {
            // do whatever to interrupt the socket communication here
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




