import { all } from '@redux-saga/core/effects'
import { gamesSaga } from '../modules/Games'

export default function* rootSaga() {
    yield all([gamesSaga()])
}
