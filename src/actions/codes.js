import {createActions} from 'redux-actions'

export const {
    fetchCodesLezyRequest,
    fetchCodesLezyStart,
    fetchCodesLezySuccess,
    fetchCodesLezyFailure

} = createActions(
    "FETCH_CODES_LEZY_REQUEST",
    "FETCH_CODES_LEZY_START",
    "FETCH_CODES_LEZY_SUCCESS",
    "FETCH_CODES_LEZY_FAILURE"
)