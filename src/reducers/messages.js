import {handleActions} from 'redux-actions'
import {addMessage, messageReceived} from '../actions/chat'


const initState = [{
    message: null,
    author: null,
    id: null
}]

let nextMessageId = 1

export const messages = handleActions({
        [addMessage]: (state, action) => ([
            ...state, {
                message: action.payload.message,
                author: action.payload.author,
                id: nextMessageId++

            }]),
        [messageReceived]: (state, action) => ([
            ...state, {
                message: action.payload.message,
                author: action.payload.author,
                id: nextMessageId++
            }
        ])
    }, initState
)

