import {handleActions} from 'redux-actions'
import {
    fetchCodesLezyStart,
    fetchCodesLezySuccess,
    fetchCodesLezyFailure, fetchCodesNewSearch
} from "../actions/codes";

const initState = {
    codes: [],
    error: null,
    loading: false,
    count: null,
    loaded: false
}

export const codes = handleActions({
    [fetchCodesLezyStart]: (state, action) => ({
        ...state,
        loading: true

    }),
    [fetchCodesLezySuccess]: (state, action) => ({
        ...state,
        loading: false,
        codes: [...state.codes, ...action.payload.data],
        count: action.payload.count,
        loaded: action.payload.data.length < 10

    }),
    [fetchCodesNewSearch]:(state,action)=>({
        ...state,
        codes:[]
    }),
    [fetchCodesLezyFailure]: (state, action) => ({
        ...state,
        loading: false,
        error: action.error
    }),

}, initState)

export const getState = state => state.codes
export const getCodes = state => state.codes.codes
export const getCount = state => state.codes.count
