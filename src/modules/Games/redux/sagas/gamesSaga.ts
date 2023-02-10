import { call, Effect, put, take, takeEvery } from '@redux-saga/core/effects'
import { initGameSocketAction } from '../actions/gamesActions'
import SportSocket from '../../service/SportSocket'
import { eventChannel } from '@redux-saga/core'
import { getInitialGamesSuccess, updateMatches } from '../slices/gamesSlice'
import gameDataAdapter from '../adapters/gameDataAdapter'
import {IMatch, IRouterParams} from '../../interfaces'
import { PayloadAction } from '@reduxjs/toolkit'
import { SOCKET_RID } from '../../../../configureApp/constants'

function initSocket({ gameId, regionId, tournamentId }: IRouterParams) {
    return eventChannel((emitter) => {
        const ws = new SportSocket(SOCKET_RID)

        ws.onGettingMatches = (games: IMatch[]) => {
            const firstMatch: IMatch = games[0]
            return emitter(
                getInitialGamesSuccess({
                    games: gameDataAdapter(games),
                    activeGameId: gameId || firstMatch.sport.id,
                    activeRegionId: regionId || firstMatch.region.id,
                    activeTournamentId:
                        tournamentId || firstMatch.tournament.id,
                })
            )
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
}: PayloadAction<{ params: IRouterParams }>): Generator<Effect> {
    const channel = yield call(initSocket, payload.params)
    while (true) {
        // @ts-ignore
        const action = yield take(channel)
        // @ts-ignore
        yield put(action)
    }
}

export default function* watchGamesSaga() {
    yield takeEvery(initGameSocketAction.type, gameSocketSagas)
}
