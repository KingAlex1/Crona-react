import {handleActions} from 'redux-actions'
import {addUser, populateUsersList} from '../actions/chat'


const initState = [{
    name: 'Me',
    id: 0
}]

export const users = handleActions({
        [addUser]: (state, action) => ([
            ...state, {
                name: action.name,
                id: state.id++
            }]),
        [populateUsersList]: (state, action) => ([
            ...action.payload
        ])
    }, initState
)


