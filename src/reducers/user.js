import {
    fetchCurrentUserRequest,
    fetchCurrentUserSuccess,
    fetchCurrentUserFailure
} from '../actions/user'
import {handleActions} from 'redux-actions'

const initState = {
    name: null,
    hash: null,
    error: null,
    loading: false

}

export const user = handleActions({
        [fetchCurrentUserRequest]: (state, action) => ({
            ...state,
            loading: true
        }),
        [fetchCurrentUserSuccess]: (state, action) => ({
            ...state,
            name: action.payload.name,
            hash: action.payload.hash
        }),
        [fetchCurrentUserFailure]: (state, action) => ({
            ...state,
            name: null,
            hash: null,
            loading: false,
            error: action.error
        }),

    },
    initState
)

export const getUserHash = state => state.user.hash