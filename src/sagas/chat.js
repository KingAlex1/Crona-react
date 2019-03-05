import {takeEvery,select} from 'redux-saga/effects'
import {addMessage} from '../actions/chat'
import {socket} from "../index";
import {getUser} from "../reducers/auth";


function* handleNewMessage(action) {

    action.author = yield select(getUser)
    console.log(action.payload)
    socket.send(JSON.stringify(action))
}

export function* handleNewMessageWatch() {
    yield takeEvery(addMessage, handleNewMessage)
}


