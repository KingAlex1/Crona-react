import {
    signInRequest,
    signInSuccess,
    signInError,
    signUpRequest,
    signUpSuccess,
    signUpError,
    signOutRequest,
    signOutSuccess
} from '../actions/auth'
import {handleActions} from 'redux-actions'

const initState = {
    user: null,
    error: null,
    loading: false

}

export const auth = handleActions({
        [signUpRequest]: (state, action) => ({
            ...state,
            loading: true
        }),
        [signUpSuccess]: (state, action) => ({
            ...state,
            user: action.payload.user,
            loading: false,
            error: null
        }),
        [signUpError]: (state, action) => ({
            ...state,
            user: null,
            loading: false,
            error: action.error
        }),
        [signInRequest]: (state, action) => ({
            ...state,
            loading: true
        }),
        [signInSuccess]: (state, action) => ({
            ...state,
            user: action.payload.user,
            loading:false,
            error: action.error
        }),
        [signInError]: (state, action) => ({
            ...state,
            user: null,
            loading: false,
            error: action.error
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