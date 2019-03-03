import {
    signInRequest,
    signInSuccess,
    signInFailure
} from "../actions/auth";
import {singIn} from '../api'
import {call, put, takeLatest} from "redux-saga/effects"

export function* fetchSignInSaga(action) {
    try {
        console.log(action.payload)
        let response = yield call(singIn, action.payload)
        console.log(response)
        yield put(signInSuccess(response.data))
    } catch (error) {
        yield put(signInFailure(error.data))
    }

}

export function* fetchSignInWatch() {
    yield takeLatest(signInRequest, fetchSignInSaga)

}

