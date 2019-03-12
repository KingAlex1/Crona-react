import {
    call,
    put,
    takeEvery,
    select,
    take, takeLatest
} from 'redux-saga/effects'
import {
    fetchCodesLezyRequest,
    fetchCodesLezyStart,
    fetchCodesLezySuccess,
    fetchCodesLezyFailure,
    fetchCodesNewSearch
} from "../actions/codes";
import {getState, getCodes} from '../reducers/codes'
import {fetchCodesLaze} from "../api";


export function* fetchCodesSaga() {

    while (true) {

        const request = yield take(fetchCodesLezyRequest)

        var search
        if (request.payload) {
            search = request.payload
            yield put(fetchCodesNewSearch())
        }
        const state = yield select(getState)

        if (state.loading) continue

        yield put(fetchCodesLezyStart())

        const codes = yield select(getCodes)
        const size = codes.length

        let response = yield call(fetchCodesLaze, size, search)

        yield put(fetchCodesLezySuccess(response.data))

    }

}


