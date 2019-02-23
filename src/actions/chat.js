import {createActions} from 'redux-actions'

export const {
    addMessage,
    addUser,
    messageReceived,
    populateUsersList
} = createActions(
    "ADD_MESSAGE",
    "ADD_USER",
    "MESSAGE_RECEIVED",
    "POPULATE_USERS_LIST"
)