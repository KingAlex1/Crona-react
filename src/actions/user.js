import {createActions} from 'redux-actions'

export const {
    fetchCurrentUserRequest,
    fetchCurrentUserSuccess,
    fetchCurrentUserFailure,
} = createActions(
    "FETCH_CURRENT_USER_REQUEST",
    "FETCH_CURRENT_USER_SUCCESS",
    "FETCH_CURRENT_USER_FAILURE",
)

