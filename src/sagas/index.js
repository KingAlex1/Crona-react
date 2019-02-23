import {fork} from 'redux-saga/effects'
import {
    signUpWatch,
    signInWatch,
    signOutWatch
} from './auth'
import {handleNewMessageWatch} from './chat'
import username from '../utils/name'
import {socket} from '../index'


export default function* () {
    yield fork(signUpWatch)
    yield fork(signInWatch)
    yield fork(signOutWatch)
    yield fork(handleNewMessageWatch)


}
