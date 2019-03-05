import {createActions} from 'redux-actions'

export const {
    fetchBlogRequest,
    fetchBlogSuccess,
    fetchBlogFailure,
    fetchBlogByTagsRequest,
    fetchBlogByTagsSuccess,
    fetchBlogByTagsFailure,
    fetchLastFivePostsRequest,
    fetchLastFivePostsSuccess,
    fetchLastFivePostsFailure,
    fetchBlogByCategoryRequest,
    fetchBlogByCategorySuccess,
    fetchBlogByCategoryFailure,
    sendMessageRequest,
    sendMessageSuccess,
    sendMessageFailure,
    
} = createActions(
    "FETCH_BLOG_REQUEST",
    "FETCH_BLOG_SUCCESS",
    "FETCH_BLOG_FAILURE",
    "FETCH_BLOG_BY_TAGS_REQUEST",
    "FETCH_BLOG_BY_TAGS_SUCCESS",
    "FETCH_BLOG_BY_TAGS_FAILURE",
    "FETCH_LAST_FIVE_POSTS_REQUEST",
    "FETCH_LAST_FIVE_POSTS_SUCCESS",
    "FETCH_LAST_FIVE_POSTS_FAILURE",
    "FETCH_BLOG_BY_CATEGORY_REQUEST",
    "FETCH_BLOG_BY_CATEGORY_SUCCESS",
    "FETCH_BLOG_BY_CATEGORY_FAILURE",
    "SEND_MESSAGE_REQUEST",
    "SEND_MESSAGE_SUCCESS",
    "SEND_MESSAGE_FAILURE"
)