import {createActions} from 'redux-actions'

export const {
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    fetchNewsByTagsRequest,
    fetchNewsByTagsSuccess,
    fetchNewsByTagsFailure,
} = createActions(
    "FETCH_NEWS_REQUEST",
    "FETCH_NEWS_SUCCESS",
    "FETCH_NEWS_FAILURE",
    "FETCH_NEWS_BY_TAGS_REQUEST",
    "FETCH_NEWS_BY_TAGS_SUCCESS",
    "FETCH_NEWS_BY_TAGS_FAILURE",
)