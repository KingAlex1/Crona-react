import {fork} from 'redux-saga/effects'
import {fetchSignUpWatch} from './signUp'
import {fetchSignInWatch} from './signIn'
import {handleNewMessageWatch} from './chat'
import {fetchNewsWatch,fetchNewsByTagsWatch} from './news'
import {authFlow} from "./auth";


export default function* () {
    yield fork(authFlow)
    yield fork(fetchSignUpWatch)
    yield fork(fetchSignInWatch)
    yield fork(fetchNewsWatch)
    yield fork(handleNewMessageWatch)
    yield fork(fetchNewsByTagsWatch)


}
