import {
    call,
    take,
    takeEvery,
    takeLatest,
    select,
    put
} from 'redux-saga/effects'
import firebase from 'firebase'
import {
    signInError,
    signInSuccess,
    signUpError, signUpRequest,
    signUpSuccess, signInRequest, signOutRequest,
    signOutSuccess
} from "../actions/auth";


export function* signUpSaga(action) {
    const auth = firebase.auth()
    try {
        const user = yield call([auth, auth.createUserWithEmailAndPassword],
            action.payload.email, action.payload.password)
        yield put(signUpSuccess(user))
    } catch (error) {
        yield put(signUpError(error))
    }
}

export function* signInSaga(action) {
    const auth = firebase.auth()
    try {
        const user = yield call([auth, auth.signInWithEmailAndPassword],
            action.payload.email, action.payload.password)

        console.log(user)
        yield put(signInSuccess(user))
    } catch (error) {
        yield put(signInError(error))
    }

}

export function* signOutSaga() {
    const auth = firebase.auth()
    try {
        yield call([auth,auth.signOut])
        yield put(signOutSuccess())
    }catch (error){
        console.log(error)
    }

}

export function* signUpWatch() {
    yield takeLatest(signUpRequest, signUpSaga)

}

export function* signInWatch() {
    yield takeLatest(signInRequest, signInSaga)

}

export function* signOutWatch() {
    yield takeLatest(signOutRequest,signOutSaga)
}