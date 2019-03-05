import {
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    fetchNewsByTagsRequest,
    fetchNewsByTagsSuccess,
    fetchNewsByTagsFailure
} from "../actions/news";
import {call, takeLatest, put} from 'redux-saga/effects'
import {fetchNews, fetchNewsByTags} from "../api";


export function* fetchNewsSaga(action) {
    try {
        let response = yield call(fetchNews, action.payload)
        yield put(fetchNewsSuccess(response.data))
    } catch (error) {
        yield put(fetchNewsFailure(error.data))
    }
}

export function* fetchNewsByTagsSaga(action) {
    try {

        let response = yield call(fetchNewsByTags, action.payload)
        yield put(fetchNewsByTagsSuccess(response.data))
    } catch (error) {
        yield put(fetchNewsByTagsFailure(error.data))
    }
}

export function* fetchNewsWatch() {
    yield takeLatest(fetchNewsRequest, fetchNewsSaga)

}

export function* fetchNewsByTagsWatch() {
    yield takeLatest(fetchNewsByTagsRequest, fetchNewsByTagsSaga)

}