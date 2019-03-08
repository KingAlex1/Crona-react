import {
    takeEvery,
    call,
    put,
    take,
    select
} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {
    addMessage,
    addUser,
    messageReceived,
    populateUsersList,
    webSocketRequest
} from '../actions/chat'
import {fetchUser} from "../api";
import {
    fetchCurrentUserSuccess,
    fetchCurrentUserFailure
} from '../actions/user'
import {getUserHash} from "../reducers/user";

let ws

function* createEventChannel(ws, name, hash) {
    return eventChannel(emit => {

        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: 'ADD_USER',
                name: name
            }))
        };
        ws.onmessage = (event) => emit(event);
        return () => {
            ws.close();
        };
    });
}

function* initializeWebSocketsChannel() {
    const {data: {data: {name}}, data: {data}, data: {data: {hash}}} = yield call(fetchUser)
    const userHash = yield select(getUserHash)

    if (userHash !== hash) {
        console.log('user',hash)
        yield put(fetchCurrentUserSuccess(data))

        ws = new WebSocket('ws://localhost:8080')
        const channel = yield call(createEventChannel, ws, name, hash);
        while (true) {
            const {data: event} = yield take(channel);

            const data = JSON.parse(event)
            switch (data.type) {
                case 'ADD_MESSAGE':
                    data.payload = {...data}
                    yield put(messageReceived(data))
                    break
                case 'ADD_USER':
                    yield put(addUser(data.name))
                    break
                case 'USERS_LIST':
                    console.log('userslist', data.users)
                    yield put(populateUsersList(data.users))
                    break
                default:
                    break
            }
        }
    }
}

export function* socketSaga() {
    yield takeEvery(webSocketRequest, initializeWebSocketsChannel)
}

function* handleNewMessage(action) {
    const response = yield call(fetchUser)
    action.author = response.data.data.name
    ws.send(JSON.stringify(action))
}

export function* handleNewMessageWatch() {
    yield takeEvery(addMessage, handleNewMessage)
}




