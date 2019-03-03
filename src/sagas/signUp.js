import {
    signUpRequest,
    signUpSuccess,
    signUpFailure
} from "../actions/auth";
import {singUp} from '../api'
import {call, put, takeLatest} from "redux-saga/effects"

export function* fetchSignUpSaga(action) {
    try {
        
        let response = yield call(singUp, action.payload)
        yield put(signUpSuccess(response.data))
    } catch (error) {
        yield put(signUpFailure(error.data))
    }

}

export function* fetchSignUpWatch() {
    yield takeLatest(signUpRequest, fetchSignUpSaga)

}

