import { put , call , takeLatest } from 'redux-saga/effects'

function * incrementar(payload) {
    try{
        console.log('este es el payload ',payload)
        const incremento = 10
        yield put({
            type:'INCREMENTAR',
            incremento
        })
    }
    catch(e){
        yield put({
            type:'INCREMENTAR_FAILED',
            payload: 0
        })
    }
}

export default function * watchCounter(){
    yield takeLatest('INCREMENTAR', incrementar)
}