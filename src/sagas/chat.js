import {takeEvery} from 'redux-saga/effects'
import {addMessage} from '../actions/chat'
import {socket} from "../index";
import username from '../utils/name'

function* handleNewMessage(action) {

    action.author = username
    console.log(action.payload)
    socket.send(JSON.stringify(action))
}

export function* handleNewMessageWatch() {
    yield takeEvery(addMessage, handleNewMessage)
}


