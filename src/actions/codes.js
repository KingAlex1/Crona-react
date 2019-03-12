import {createActions} from 'redux-actions'

export const {
    fetchCodesLezyRequest,
    fetchCodesLezyStart,
    fetchCodesLezySuccess,
    fetchCodesLezyFailure,
    fetchCodesNewSearch

} = createActions(
    "FETCH_CODES_LEZY_REQUEST",
    "FETCH_CODES_LEZY_START",
    "FETCH_CODES_LEZY_SUCCESS",
    "FETCH_CODES_LEZY_FAILURE",
    "FETCH_CODES_NEW_SEARCH"
)