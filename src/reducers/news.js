import {
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    fetchNewsByTagsRequest,
    fetchNewsByTagsSuccess,
    fetchNewsByTagsFailure
} from "../actions/news";
import {handleActions} from 'redux-actions'

const initState = {
    news: [],
    error: null,
    loading: false,
    filter: {},
    count: null,
    pages: null
}

export const news = handleActions({
        [fetchNewsRequest]: (state, action) => ({
            ...state,
            news: [],
            error: null,
            loading: true
        }),
        [fetchNewsSuccess]: (state, action) => ({
            ...state,
            news: action.payload.data,
            error: null,
            loading: false,
            filter: action.payload.filter,
            count: action.payload.count,
            pages: action.payload.pages
        }),
        [fetchNewsFailure]: (state, action) => ({
            ...state,
            news: [],
            error: action.error,
            loading: false,
            filter: {},
            count: null,
            pages: null
        }),
        [fetchNewsByTagsRequest]: (state, action) => ({
            ...state,
            news: [],
            error: null,
            loading: true
        }),
        [fetchNewsByTagsSuccess]: (state, action) => ({
            ...state,
            news: action.payload.data,
            error: null,
            loading: false,
            filter: action.payload.filter,
            count: action.payload.count,
            pages: action.payload.pages
        }),
        [fetchNewsByTagsFailure]: (state, action) => ({
            ...state,
            news: [],
            error: action.error,
            loading: false,
            filter: {},
            count: null,
            pages: null
        }),

    },
    initState
)

export const getNews = state => state.news.news
export const getFilter = state => state.news.filter
export const getCount = state => state.news.count
export const getPages = state => state.news.pages



