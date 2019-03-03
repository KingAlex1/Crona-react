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
import {signInSuccess} from "../actions/auth";

export function* fetchNewsSaga(action) {
    try {       
        let response = yield call(fetchNews, action.payload)        
        yield put(fetchNewsSuccess(response.data))
    } catch (error) {
        yield put(fetchNewsFailure(error.data))
    }
}

export function* fetchNewsByTagsSaga (action) {
    try {
        console.log(action.payload)
        let response = yield call(fetchNewsByTags, action.payload)
        console.log(response)
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