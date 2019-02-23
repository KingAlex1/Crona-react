import { addUser, messageReceived, populateUsersList } from '../actions/chat'

const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: 'ADD_USER',
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        switch (data.type) {
            case 'ADD_MESSAGE':
                console.log(data)
                data.payload = {...data}
                dispatch(messageReceived(data))
                break
            case 'ADD_USER':
                dispatch(addUser(data.name))
                break
            case 'USERS_LIST':
                dispatch(populateUsersList(data.users))
                break
            default:
                break
        }
    }

    return socket
}

export default setupSocket
