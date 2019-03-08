import {createActions} from 'redux-actions'

export const {
    addMessage,
    addUser,
    messageReceived,
    populateUsersList,
    webSocketRequest
    
} = createActions(
    "ADD_MESSAGE",
    "ADD_USER",
    "MESSAGE_RECEIVED",
    "POPULATE_USERS_LIST",
    "WEB_SOCKET_REQUEST"
   
)