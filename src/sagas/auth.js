import {take, put, call, select } from 'redux-saga/effects'
import {
    signInSuccess,
    signUpSuccess,
    signOutRequest
} from "../actions/auth";
import {
    getTokenFromLocalStorage,
    setTokenToLocalStorage,
    removeTokenFromLocalStorage
} from "../localStorage";
import {setTokenApi, clearTokenApi} from "../api";
import {getIsAuthorized} from '../reducers/auth'

export function* authFlow() {
  
    while (true) {
        const isAuthorized = yield select(getIsAuthorized)
        const localStorageToken = yield call(getTokenFromLocalStorage)
        let token

        if (!isAuthorized) {
            if (localStorageToken) {
                token = localStorageToken;
                yield put(signInSuccess(token))
                console.log(token)
            } else {
                const action = yield take([signInSuccess, signUpSuccess])
                token = action.payload.data

            }
        }
        console.log(token)

        yield call(setTokenApi, token)
        yield call(setTokenToLocalStorage, token)
        yield take(signOutRequest)
        yield call(removeTokenFromLocalStorage)
        yield call(clearTokenApi)

    }

}
