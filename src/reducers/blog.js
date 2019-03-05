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

import {handleActions} from 'redux-actions'
import {
    fetchNewsByTagsFailure, fetchNewsByTagsRequest,
    fetchNewsByTagsSuccess,
    fetchNewsFailure, fetchNewsRequest,
    fetchNewsSuccess
} from "../actions/news";

const initState = {
    posts: [],
    post: null,
    error: null,
    loading: false,
    filter: {},
    count: null,
    pages: null,    
    categories:null,
    tag:[]
}

export const blog = handleActions({
        [fetchBlogRequest]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: null,
            loading: true,
            tags: [],
        }),
        [fetchBlogSuccess]: (state, action) => ({
            ...state,
            posts: action.payload.data,
            post: null,
            error: null,
            loading: false,
            filter: action.payload.filter,
            count: action.payload.count,
            pages: action.payload.pages,
            tags: action.payload.tagArr,
            categories: action.payload.catArr
        }),
        [fetchBlogFailure]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: action.error,
            loading: false,
            filter: {},
            count: null,
            pages: null,
            tags: null,
            categories: null
        }),
        [fetchBlogByTagsRequest]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: null,
            loading: true,
            tags: null,
            categories: null
        }),
        [fetchBlogByTagsSuccess]: (state, action) => ({
            ...state,
            posts: action.payload.data,
            post: null,
            error: null,
            loading: false,
            filter: action.payload.filter,
            count: action.payload.count,
            pages: action.payload.pages,
            tags: action.payload.tagArr,
            categories: action.payload.catArr
        }),
        [fetchBlogByTagsFailure]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: action.error,
            loading: false,
            filter: {},
            count: null,
            pages: null,
            tags: null,
            categories: null
        }),
        [fetchBlogByCategoryRequest]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: null,
            loading: true,
            tags: null,
            categories: null
        }),
        [fetchBlogByCategorySuccess]: (state, action) => ({
            ...state,
            posts: action.payload.data,
            post: null,
            error: null,
            loading: false,
            filter: action.payload.filter,
            count: action.payload.count,
            pages: action.payload.pages,
            tags: action.payload.tagArr,
            categories: action.payload.catArr
        }),
        [fetchBlogByCategoryFailure]: (state, action) => ({
            ...state,
            posts: [],
            post: null,
            error: action.error,
            loading: false,
            filter: {},
            count: null,
            pages: null,
            tags: null,
            categories: null
        }),
        [sendMessageRequest]: (state, action) => ({
            ...state,
            post: null,
            error: null,
            loading: true,

        }),
        [sendMessageSuccess]: (state, action) => ({
            ...state,
            post: action.payload.data,
            error: null,
            loading: false,

        }),
        [sendMessageFailure]: (state, action) => ({
            ...state,
            post: null,
            error: action.error,
            loading: false,
        }),

    },
    initState
)

export const getNews = state => state.blog.posts
export const getFilter = state => state.blog.filter
export const getCount = state => state.blog.count
export const getPages = state => state.blog.pages
export const getTags = state => state.blog.tags
export const getCategories = state => state.blog.categories
export const getRecentPosts = state => state.blog.posts.slice(-5)
