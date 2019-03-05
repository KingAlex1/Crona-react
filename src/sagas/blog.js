import {
    fetchBlogRequest,
    fetchBlogSuccess,
    fetchBlogFailure,
    fetchBlogByCategoryRequest,
    fetchBlogByCategorySuccess,
    fetchBlogByCategoryFailure,
    fetchBlogByTagsRequest,
    fetchBlogByTagsSuccess,
    fetchBlogByTagsFailure,
    fetchLastFivePostsRequest,
    fetchLastFivePostsSuccess,
    fetchLastFivePostsFailure,
    sendMessageRequest,
    sendMessageSuccess,
    sendMessageFailure
} from "../actions/blog";

import {call, takeLatest, put} from 'redux-saga/effects'
import {fetchPosts, fetchPostsByTags, updatePost,fetchPostsByCategory} from "../api";


export function* fetchBlogSaga(action) {
    try {
        let response = yield call(fetchPosts, action.payload)
        yield put(fetchBlogSuccess(response.data))
    } catch (error) {
        yield put(fetchBlogFailure(error.data))
    }
}

export function* fetchBlogByTagsSaga(action) {
    try {
        let response = yield call(fetchPostsByTags, action.payload)
        yield put(fetchBlogByTagsSuccess(response.data))
    } catch (error) {
        yield put(fetchBlogByTagsFailure(error.data))
    }
}

export function* fetchBlogByCategorySaga(action) {
    try {
        let response = yield call(fetchPostsByCategory, action.payload)
        yield put(fetchBlogByCategorySuccess(response.data))
    } catch (error) {
        yield put(fetchBlogByCategoryFailure(error.data))
    }
}

export function* sendMessageSaga(action) {
    try {
        let response = yield call(updatePost, action.payload)    
        console.log(response.data)
        yield put(sendMessageSuccess(response.data))
    } catch (error) {
        yield put(sendMessageFailure(error.data))
    }

}

export function* sendMessageWatch() {
    yield takeLatest(sendMessageRequest,sendMessageSaga )
    
}


export function* fetchBlogWatch() {
    yield takeLatest(fetchBlogRequest, fetchBlogSaga)

}

export function* fetchBlogByTagsWatch() {
    yield takeLatest(fetchBlogByTagsRequest, fetchBlogByTagsSaga)

}

export function* fetchBlogByCategoryWatch() {
    yield takeLatest(fetchBlogByCategoryRequest, fetchBlogByCategorySaga)

}