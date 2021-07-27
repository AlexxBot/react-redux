import { all } from '@redux-saga/core/effects'
import watchCounter from './counterSaga'

export default function * rootSaga(){
    yield all(
        watchCounter()
    )
}