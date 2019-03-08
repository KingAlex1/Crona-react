import {fork} from 'redux-saga/effects'
import {fetchSignUpWatch} from './signUp'
import {fetchSignInWatch} from './signIn'
import {
    handleNewMessageWatch,
    socketSaga
} from './chat'
import {fetchNewsWatch, fetchNewsByTagsWatch} from './news'
import {
    fetchBlogWatch,
    fetchBlogByTagsWatch,
    sendMessageWatch,
    fetchBlogByCategoryWatch
} from "./blog";
import {authFlow} from "./auth";



export default function* () {
    yield fork(authFlow)
    yield fork(socketSaga)
    yield fork(fetchSignUpWatch)
    yield fork(fetchSignInWatch)
    yield fork(fetchNewsWatch)
    yield fork(handleNewMessageWatch)
    yield fork(fetchNewsByTagsWatch)
    yield fork(fetchBlogWatch)
    yield fork(fetchBlogByTagsWatch)
    yield fork(fetchBlogByCategoryWatch)
    yield fork(sendMessageWatch)



}
