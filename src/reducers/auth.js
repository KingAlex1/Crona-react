import {
    signInRequest,
    signInSuccess,
    signInFailure,
    signUpRequest,
    signUpSuccess,
    signUpFailure,
    signOutRequest,
    signOutSuccess
} from '../actions/auth'
import {handleActions} from 'redux-actions'

const initState = {
    user: null,
    error: null,
    loading: false,
    isAuthorized: false

}

export const auth = handleActions({
        [signUpRequest]: (state, action) => ({
            ...state,
            loading: true
        }),
        [signUpSuccess]: (state, action) => ({
            ...state,
            isAuthorized: true
        }),
        [signUpFailure]: (state, action) => ({
            ...state,
            user: null,
            loading: false,
            error: action.error,
            isAuthorized: false,
        }),
        [signInRequest]: (state, action) => ({
            ...state,
            loading: true
        }),
        [signInSuccess]: (state, action) => ({
            ...state,
            user: action.payload.name,
            loading: false,
            error: action.error,
            isAuthorized: true
        }),
        [signInFailure]: (state, action) => ({
            ...state,
            user: null,
            loading: false,
            error: action.error,
            isAuthorized: false,
        }),
        [signOutSuccess]: (state, action) => ({
            ...state,
            user: null,
            error: null,
            loading: false
        })
    },
    initState
)

export const getIsAuthorized = state => state.auth.isAuthorized;