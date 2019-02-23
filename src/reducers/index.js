import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {auth} from './auth'
import {messages} from "./messages";
import {users} from "./users";


export default combineReducers({
    form,auth,messages, users
})
