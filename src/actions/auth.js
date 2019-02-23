import {createActions} from 'redux-actions'

export const {
    signUpRequest,
    signUpSuccess,
    signUpError,
    signInRequest,
    signInSuccess,
    signInError,
    signOutRequest,
    signOutSuccess
} = createActions(
    "SIGN_UP_REQUEST",
    "SIGN_UP_SUCCESS",
    "SIGN_UP_ERROR",
    "SIGN_IN_REQUEST",
    "SIGN_IN_SUCCESS",
    "SIGN_IN_ERROR",
    "SIGN_OUT_REQUEST",
    "SIGN_OUT_SUCCESS"
)